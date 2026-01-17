import datapane as dp
import plotly.graph_objs as go


def reporter(data_frame, filename='report.html'):
    demand_obj = (go.Figure(go.Scatter(x=data_frame.index, y=data_frame['Household Demand'], name='Demand')))
    demand_obj.update_layout(
        title={
            'text': "Daily Household Energy Demand<br><span style='font-size:0.6em;color:gray'>Simulated Daily Demand "
                    "using random noise generation for 4 homes</span>",
            'x': 0.5,
            'y': 0.90,
            'xanchor': 'center',
            'font': {'size': 26}},
        xaxis_title="Time (Days)",
        yaxis_title="Daily Demand (Kwh)",
        legend_title="",
    )
    solar_obj = (go.Figure(go.Scatter(x=data_frame.index, y=data_frame['Solar Supply'], name='Solar Production')))
    solar_obj.update_layout(
        title={
            'text': "Daily Solar Production<br><span style='font-size:0.6em;color:gray'>Represents our simulation "
                    "parameters</span>",
            'x': 0.5,
            'y': 0.90,
            'xanchor': 'center',
            'font': {'size': 26}},
        xaxis_title="Time (Days)",
        yaxis_title="Daily Supply (Kwh)",
        legend_title="",
    )
    grid_supply = (go.Scatter(x=data_frame.index, y=data_frame['Grid Supply'], name='Grid Supply'))
    solar_supply = (go.Scatter(x=data_frame.index, y=data_frame['Solar Supply'], name='Solar Supply'))
    battery_supply = (go.Scatter(x=data_frame.index, y=data_frame['Battery'], name='Battery Supply'))
    supply = go.Figure(
        [grid_supply, solar_supply, battery_supply,
         go.Scatter(x=data_frame.index, y=data_frame['Household Demand'], name='Demand')])
    supply.update_layout(
        title={
            'text': "Simulated Supply & Demand Curves<br><span style='font-size:0.6em;color:gray'>Detailed "
                    "compossition of node supply & demand</span>",
            'x': 0.5,
            'y': 0.90,
            'xanchor': 'center',
            'font': {'size': 26}},
        xaxis_title="Time (Days)",
        yaxis_title="Daily Supply & Demand (Kwh)",
        legend_title="",
    )
    price_line = (go.Scatter(x=data_frame.index, y=data_frame['Electricity Price'], name='Energy Price'))
    mean_line = (
        go.Scatter(x=data_frame.index, y=data_frame['Electricity Price'].rolling(15).mean(), name='Energy Price 15-D Rolling Mean'))
    price_obj = go.Figure([price_line, mean_line])
    price_obj.update_layout(
        title={
            'text': "Simulated Daily Energy Price<br><span style='font-size:0.6em;color:gray'>Random noise generated, "
                    "demand-correlated price timeseries</span>",
            'x': 0.5,
            'y': 0.90,
            'xanchor': 'center',
            'font': {'size': 26}},
        xaxis_title="Time (Days)",
        yaxis_title="Price ($)",
        legend_title="",
    )
    battery_line = (go.Scatter(x=data_frame.index, y=data_frame['Battery'], name='Battery Energy Use'))
    wattage_line = (go.Scatter(x=data_frame.index, y=data_frame['Battery Storage'], name='Battery Stored Wattage'))
    limiter_line = (go.Scatter(x=data_frame.index, y=[24.9 for i in range(0, 366)], name='Battery Discharge Limit'))
    battery_obj = go.Figure([battery_line, wattage_line, limiter_line])
    battery_obj.update_layout(
        title={
            'text': "Simulated Battery Charge & Discharge<br><span style='font-size:0.6em;color:gray'>Showcasing "
                    "battery use patterns based on our optimization algo</span>",
            'x': 0.5,
            'y': 0.90,
            'xanchor': 'center',
            'font': {'size': 26}},
        xaxis_title="Time (Days)",
        yaxis_title="Daily Store & Use (Kwh)",
        legend_title="",
    )
    cost_line = (go.Scatter(x=data_frame.index, y=data_frame['Electricity Cost'].cumsum(), name='Energy Purchase Cost'))
    revenue_line = (
        go.Scatter(x=data_frame.index, y=data_frame['Electricity Revenue'].cumsum(), name='Energy Sale Revenue'))
    net_line = (go.Scatter(x=data_frame.index,
                           y=(data_frame['Electricity Cost'] - data_frame['Electricity Revenue']).cumsum(),
                           name='Net Cost/Profit'))
    market_obj = go.Figure([cost_line, revenue_line, net_line])
    market_obj.update_layout(
        title={
            'text': "Simulated Energy Cost & Revenue<br><span style='font-size:0.6em;color:gray'>Showcases the energy "
                    "cost and sales over the period</span>",
            'x': 0.5,
            'y': 0.90,
            'xanchor': 'center',
            'font': {'size': 26}},
        xaxis_title="Time (Days)",
        yaxis_title="Cost & Revenue ($)",
        legend_title="",
    )
    energy_profile = [data_frame['Grid Supply'].sum(), data_frame['Battery'].sum(),
                      data_frame['Solar Supply'].sum().sum()]
    energy_profile = [energy_profile[i] / sum(energy_profile) for i in range(0, len(energy_profile))]

    weights_pie = go.Figure(go.Pie(values=energy_profile, labels=['Grid', 'Battery', 'Solar'], hoverinfo='label+value'))
    weights_pie.update_layout(
        title={
            'text': "Total Energy Supply Breakdown<br><span style='font-size:0.8em;color:gray'></span>",
            'x': 0.5,
            'y': 0.90,
            'xanchor': 'center',
            'font': {'size': 26}},
        legend_title="Energy Sources",
    )

    for fig_tmp in [demand_obj, solar_obj, supply, battery_obj, market_obj, price_obj]:
        fig_tmp.update_layout(
            xaxis=dict(
                rangeslider=dict(
                    visible=True
                ),
                type="linear"
            ))

    dp.Report(
        dp.Group(
            dp.Group(
                dp.Media(file='data/header.png'),
                dp.Text(
                    """# Energy Flow Optimization Simulation
## Hack from Home 2021

The P2P Energy Exchange is aiming to revolutionize and democratize energy markets. Our innovative platform 
integrates individual nodes (households, producers, buildings or, regions) into a decentralized energy market. To 
deploy our decentralization system, we are offering automated intra-node energy flow optimization. This demo is a 
proof of concept for this said optimization. We use proprietary algorithms and Machine Learning (ML) to best 
allocate energy resources within a given context. You can find more on our website: 
https://hackathon-from-sfsdf.vercel.app/

In this demo we are simulating a 4 home complex, located in Amsterdam, with 64 250W panels totalling 115m^2, 
there is also a 43Kwh Battery pack and, a grid connection. We assume a baseline consumption of 4Kwh per home. To 
simulate solar energy yield we use NASA’s POWER API to find historic irradiance data.

*The Graphs are interactive.*
                """),
                columns=2,
            ),
            dp.Group(
                dp.Plot(demand_obj),
                dp.Text("""
                We simulated our demand curve (left) using our base assumption of 4Kwh per home (16Kwh in total). The timeseries was generated using random noise to allow variance and ensure that our system can work on undefined interval data. Energy Demand is one of the three main real-time inputs, the other being solar production and energy price. In this test-case we assume consumption priority for the generated energy, and then use the battery or gird as needed. 
                """),
                columns=2,
            ),
            dp.Group(
                dp.Plot(solar_obj),
                dp.Text("""
                This is simulated Daily Solar production given 1 year historical data for Amsterdam via NASA’s POWER API. Our simulation parameters are 64 250W panels, 1.6m^2 each, totalling 115m^2, giving us a maximum generation potential of 18 Kwh per day at 15% efficiency. Noting that we can easily change simulation parameters and load custom solar-generation profiles. We can also see that the solar production peaks out soon and remains constant, this is because panels are low efficiency.
                """),
                columns=2,
            ),
            dp.Group(
                dp.Plot(supply),
                dp.Text("""
                On the left we can see the complete composition of the supply & demand pattern during the year. Our system has one demand curve (which can be thought of as an aggregate) and three supply curves. The house gets energy from solar, grid and, battery, only sourcing from the latter two if solar production is at a deficit. Here we can see how the system responds against the supply impacts. We can easily make out when and why energy from other sources was needed. The choice to source from one or the other is handled by our proprietary algorithm. 
                """),
                columns=2,
            ),
            dp.Group(
                dp.Plot(price_obj),
                dp.Text("""
                This is a simulated daily price for 1Kwh of energy, using c14.3 as a starting point and adding noise. Currently we are using the Rolling Mean to have an idea of relative prices and make optimal buying/selling decisions. Ideally our system would differentiate between energy sources and therefore, will be able to source energy based on its carbon footprint. We have capabilities to add two price-curves but used one in this simulation for simplicity.
                """),
                columns=2,
            ),
            dp.Group(
                dp.Plot(battery_obj),
                dp.Text("""
                The household battery pack was by far the most fun to model. According to our set parameters we have 42Kwh battery, which we have set a discharge limit at 70% of capacity. In the graph we can clearly see how well it has performed remaining above the boundary. What is notable is that the big increase in wattage before Day 100 is due to the really cheap prices. Money which was saved by discharging the battery little by little, since the price went up again. 
                """),
                columns=2,
            ),
            dp.Group(
                dp.Plot(market_obj),
                dp.Text("""
                Here we can see the cumulative energy cost and revenue. This represents the total energy bought from the grid and that sold. We can see that the system has been very economical and considerably lowered (by half!) the total electricity bill during the summer. Of course, the skyrocketing on the right is winter where solar isn't the best especially in Amsterdam (exact reason to choose it), this can be mitigate by introducing secondary renewable flows like biothermal, wind or others. 
                """),
                columns=2,
            ),
            dp.Group(
                dp.Plot(weights_pie),
                dp.Text("""
                On the left we can see the total energy supply breakdown. Clear winner here is solar which was used 87% of the time. Of course, second is the grid at 12% and finally, the battery at 1.2%. This chart tells us we are the right direction, we have used a lot of solar, but we can also tell there is much optimization to be done.
                """),
                columns=2,
            ),
            dp.Group(
                dp.Text("""
                ## Acknowledgments & Citations

    This simulation was produced for Hack from Home 2021, organized by Dataswift, using Python 3.8 on Datalore and Visual Studio Code. This report was generated using Datapane.

    *Source code by:* Foivos Dimitrakopoulos

    ### Data Sources

    NASA POWER API: https://power.larc.nasa.gov/

    Preliminary Energy Info: https://www.greenmatch.co.uk/blog/how-many-solar-panels-do-i-need#:~:text=A%204kW%20solar%20system%20is,solar%20panels%20you%20will%20use. 

    ### Citations
    Kubli, M., Loock, M. and Wüstenhagen, R., 2018. The flexible prosumer: Measuring the willingness to co-create distributed flexibility. Energy Policy, [online] 114, pp.540-548. Available at: https://doi.org/10.1016/j.enpol.2017.12.044 [Accessed 17 May 2021].

    Ghofrani, M. and Alolayan, M., 2018. Time Series and Renewable Energy Forecasting. Time Series Analysis and Applications, [online] Available at: http://10.5772/intechopen.70845 [Accessed 17 May 2021].

    Gartner, 2020. Maverick* Research: The New Energy Markets Under Your Kitchen Sink. Gartner.
                """)
            ),
            columns=1),
    ).save(path=filename)
    return True
