import BaseFooterPage from "./BaseFooterPage";

const APIDoc = () => (
  <BaseFooterPage title="API Documentation">
    <p className="text-muted-foreground mb-6">
      Integrate your smart devices and local grids with our robust API suite. We provide RESTful endpoints for real-time monitoring and energy exchange settlement.
    </p>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
      <p className="text-muted-foreground mb-4">All API requests require a Bearer token in the Authorization header.</p>
      <div className="bg-muted p-4 rounded-lg font-mono text-sm">
        Authorization: Bearer YOUR_API_KEY
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-foreground">GET /v1/meter/usage</h3>
          <p className="text-muted-foreground text-sm">Retrieve current energy consumption for a specific device.</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-foreground">POST /v1/exchange/offer</h3>
          <p className="text-muted-foreground text-sm">Post a new energy surplus offer to the local marketplace.</p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-foreground">GET /v1/market/prices</h3>
          <p className="text-muted-foreground text-sm">Get real-time and predicted energy prices for your region.</p>
        </div>
      </div>
    </section>
  </BaseFooterPage>
);

export default APIDoc;
