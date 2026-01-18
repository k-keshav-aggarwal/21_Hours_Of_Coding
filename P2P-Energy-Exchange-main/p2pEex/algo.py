import json
import os
import p2pEex
import numpy as np
import pandas as pd


def _merge_dict(base, override):
    for key, value in override.items():
        if isinstance(value, dict) and isinstance(base.get(key), dict):
            _merge_dict(base[key], value)
        else:
            base[key] = value


def calc_algo_results(solar_data='solar_data_AMS.csv', panel_data='panels.json', setup_file='params.json', params_override=None):
    loader = p2pEex.get_data(solar_data, panel_data, setup_file)
    daily_data, solar, params = loader[0], loader[1], loader[2]
    if params_override:
        _merge_dict(params, params_override)
    solar = solar['small panel']

    np.random.seed(params['algo']['random_seed'])

    price_per_kwh = p2pEex.random_noise(params['price']['mu'], params['price']['sigma'], params['price']['start'])

    price_mean = pd.Series(price_per_kwh).rolling(window=params['algo']['rolling_window']).mean()
    price_mean = price_mean.fillna(price_per_kwh[0:(params['algo']['rolling_window'])].mean())
    price_mean = price_mean.tolist()

    # A demand curve 16 is the starting point representing aggregate demand. We could easily add four demand
    # schedules together to produce this with more accuracy
    np.random.seed(params['algo']['random_seed'])
    demand_curve = p2pEex.random_noise(params['demand']['mu'], params['demand']['sigma'], params['demand']['start'])

    # calculates KwH per day produced based on params
    # FOUR HOMES
    NUM_SOLAR = params['test_case']['num_solar']
    SOLAR_TYPE = solar
    # MAX SOLAR INPUT
    max = (SOLAR_TYPE['Wattage'] * NUM_SOLAR) / 1000
    # SOLAR PRODUCTION 'TRUE'
    solar_production = daily_data['Irradiance'] * (SOLAR_TYPE['Area'] * NUM_SOLAR) * SOLAR_TYPE['Efficiency']
    solar_production_cleaned = []
    # Cleans solar since it is usually >> than max prod
    for value in solar_production:
        if value > max:
            solar_production_cleaned.append(max)
        else:
            solar_production_cleaned.append(value)

    # all the algo reads are the surplus_energy timeseries
    demand = demand_curve
    surplus_energy = [(float(solar_production_cleaned[i]) - float(demand[i])) for i in
                      range(0, len(solar_production_cleaned) - 1)]

    # Algo Time !!

    # c limiter is the lowest the battery can reach
    critical_limiter = params['algo']['critical_limiter']
    # in kwh
    battery_capacity = params['test_case']['battery_capacity']
    # if we want to start with a charged battery just change 0 -> 42
    battery_wattage = [params['algo']['battery_start']]
    # arrays
    b_supply, g_supply = [], []
    cost, sell = [], []
    battery_wattage_cs = []

    for i in range(0, len(demand)):

        # the cumulative sum gives us battery fill state // overhead is kwh left
        battery_wattage_cs = pd.Series(battery_wattage).cumsum()
        overhead = battery_capacity - int(battery_wattage_cs[-1:])

        # if we have a surplus at Time = i
        if surplus_energy[i] < 0:

            sell.append(0)
            # FIND ENERGY

            # If we have more than 70% in the battery use it
            if float(battery_wattage_cs[-1:]) > (battery_capacity * critical_limiter):

                # fill the deficit with 40% battery and 60% grid supply
                g_supply.append(-surplus_energy[i] * params['algo']['defecit_fill_grid'])

                battery_wattage.append(surplus_energy[i] * params['algo']['defecit_fill_battery'])
                b_supply.append(-surplus_energy[i] * params['algo']['defecit_fill_battery'])

                # if prices are low, then buy 20% of the battery energy served to recharge it
                if price_per_kwh[i] < (price_mean[i] * params['algo']['battery_refil_price_multiple']):

                    add_sup = b_supply[i] * params['algo']['battery_refil_multiple']
                    b_supply[i] = b_supply[i] - add_sup
                    battery_wattage[i] = battery_wattage[i] + add_sup
                    g_supply[i] = g_supply[i] + add_sup
                    cost.append(g_supply[i] * price_per_kwh[i])
                else:
                    cost.append(g_supply[i] * price_per_kwh[i])

            # if not more than 70% in battery
            else:

                b_supply.append(0)
                # if battery under 70% then charge it with 1Kwh that day from the grid + the surplus added
                if overhead > 0:
                    battery_wattage.append(params['algo']['daily_battery_charge'])
                    g_supply.append(-surplus_energy[i] + params['algo']['daily_battery_charge'])
                    cost.append((-surplus_energy[i] + params['algo']['daily_battery_charge']) * price_per_kwh[i])
                # if battery at 100% and not discharging (special case, limiter = 1) then buy from grid & don't
                # charge battery
                else:
                    g_supply.append(-surplus_energy[i])
                    cost.append((-surplus_energy[i]) * price_per_kwh[i])

        # if we have a surplus
        elif surplus_energy[i] > 0:

            cost.append(0)
            b_supply.append(0)
            g_supply.append(0)

            # SELL OR STORE
            # If energy is economical/expensive then store
            if price_per_kwh[i] > price_mean[i]:

                # print(overhead)
                # if you can store
                if overhead > 0:
                    battery_wattage.append(surplus_energy[i])
                    sell.append(0)
                else:
                    sell.append(surplus_energy[i] * price_per_kwh[i])
                    battery_wattage.append(0)

            else:
                sell.append(surplus_energy[i] * price_per_kwh[i])
                battery_wattage.append(0)

    data_frame = pd.DataFrame()
    data_frame.insert(0, 'Household Demand', demand)
    data_frame.insert(1, 'Solar Supply', solar_production_cleaned[:365])
    data_frame.insert(2, 'Grid Supply', g_supply)
    data_frame.insert(3, 'Battery', b_supply)
    data_frame.insert(4, 'Battery Storage', battery_wattage_cs)
    data_frame.insert(5, 'Electricity Price', price_per_kwh)
    data_frame.insert(6, 'Electricity Cost', cost)
    data_frame.insert(7, 'Electricity Revenue', sell)

    return data_frame


def solve_p2p(params_override=None, base_dir=None):
    if base_dir is None:
        base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

    solar_data = os.path.join(base_dir, 'data', 'solar_data_AMS.csv')
    panel_data = os.path.join(base_dir, 'data', 'panels.json')
    setup_file = os.path.join(base_dir, 'params.json')

    data_frame = calc_algo_results(
        solar_data=solar_data,
        panel_data=panel_data,
        setup_file=setup_file,
        params_override=params_override,
    )

    net_cost = (data_frame['Electricity Cost'] - data_frame['Electricity Revenue']).fillna(0.0)
    mean_abs = float(net_cost.abs().mean())
    std = float(net_cost.std())

    if not np.isfinite(mean_abs) or not np.isfinite(std) or mean_abs == 0:
        fairness_index = 0.5
    else:
        cv = std / mean_abs
        fairness_index = max(0.05, min(0.99, 1.0 / (1.0 + cv)))

    baseline_cost = float((data_frame['Household Demand'] * data_frame['Electricity Price']).sum())
    actual_cost = float(net_cost.sum())
    savings_ratio = 0.0 if baseline_cost == 0 else (baseline_cost - actual_cost) / baseline_cost
    savings_ratio = max(-1.0, min(1.0, float(savings_ratio)))

    savings = {
        "prosumers": round(savings_ratio * 100 * 0.6, 1),
        "households": round(savings_ratio * 100 * 0.4, 1),
        "retailers": round(savings_ratio * 100 * -0.2, 1),
    }

    insights = (
        "Solar output shifts midday prices; higher storage penetration smooths volatility, "
        "while lower grid capacity amplifies evening stress."
    )

    return {
        "fairness_index": round(fairness_index, 3),
        "savings": savings,
        "insights": insights,
    }
