import p2pEex
import numpy as np
import pandas as pd


def calc_algo_results(solar_data='solar_data_AMS.csv', panel_data='panels.json', setup_file='params.json'):
    loader = p2pEex.get_data(solar_data, panel_data, setup_file)
    daily_data, solar, params = loader[0], loader[1], loader[2]
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
