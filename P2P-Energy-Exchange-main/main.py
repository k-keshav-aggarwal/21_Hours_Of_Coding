import p2pEex

if __name__ == '__main__':

    data = p2pEex.algo.calc_algo_results('data/solar_data_AMS.csv', 'data/panels.json', 'params.json')
    p2pEex.reporter.reporter(data, "data/P2P-Report.html")
