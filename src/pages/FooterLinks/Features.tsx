import BaseFooterPage from "./BaseFooterPage";

const Features = () => (
  <BaseFooterPage title="Platform Features">
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2">AI-Powered Energy Allocation</h2>
      <p className="text-muted-foreground">
        Our platform uses real-time machine learning models to forecast demand, supply, and surplus patterns across
        communities, enabling optimal distribution and preventing energy waste.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2">Community Energy Sharing</h2>
      <p className="text-muted-foreground">
        Users can seamlessly exchange surplus solar or stored energy within their neighbourhood. Smart contracts ensure
        transparent and fair settlement for every transaction.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2">Real-Time Analytics Dashboard</h2>
      <p className="text-muted-foreground">
        Visualize consumption, generation, and exchange patterns with interactive charts, predictive alerts, and
        sustainability metrics.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2">Secure & Verifiable Logs</h2>
      <p className="text-muted-foreground">
        Every operation is logged with cryptographic integrity, providing trust and auditability for communities and
        regulators.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-2">Plug-and-Play Device Integration</h2>
      <p className="text-muted-foreground">
        Works seamlessly with smart meters, inverters, local sensors, and battery storage systems.
      </p>
    </section>
  </BaseFooterPage>
);

export default Features;
