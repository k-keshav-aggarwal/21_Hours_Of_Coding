import json
import numpy as np
import pandas as pd


def random_noise(mu, sigma, start_price):
    # to generate random curves
    returns = np.random.normal(loc=mu, scale=sigma, size=365)
    price = start_price * (1 + returns).cumprod()
    return price


def get_data(csv_filename, json_filename, params_filename):
    # imports test dataset & solar-panel info file
    daily_data = pd.read_csv(csv_filename)
    solar = open(json_filename)
    solar = json.load(solar)
    params = open(params_filename)
    params = json.load(params)

    return [daily_data, solar, params]
