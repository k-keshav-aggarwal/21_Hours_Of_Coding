import BaseFooterPage from "./BaseFooterPage";

const AboutRes = () => (
  <BaseFooterPage title="About Our Research">
    <p className="text-muted-foreground mb-6">
      The 21 Topon Ki Salami platform is built on cutting-edge research in distributed systems, renewable energy
      optimization, and AI-driven demand forecasting. Our mission is to empower communities with transparency,
      efficiency, and sustainable energy-sharing technologies.
    </p>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Key Research Areas</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Distributed smart-grid coordination</li>
        <li>AI models for consumption and generation forecasting</li>
        <li>Blockchain-based settlement for energy transactions</li>
        <li>IoT-driven real-time monitoring systems</li>
        <li>Energy surplus detection and dynamic redistribution algorithms</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Published Papers & Technical Notes</h2>
      <div className="space-y-4 text-muted-foreground">
        <div>
          <p className="font-medium text-foreground">1. AI-Based Forecasting for Community Energy Systems</p>
          <p>An in-depth study on machine-learning models used to predict peak loads and renewable energy output.</p>
        </div>
        <div>
          <p className="font-medium text-foreground">2. Smart-Contract Mechanisms for Decentralized Energy Trading</p>
          <p>Explores secure, transparent, and automated settlement mechanisms for P2P energy sharing.</p>
        </div>
        <div>
          <p className="font-medium text-foreground">3. Distributed Battery Optimization Framework</p>
          <p>Research into coordinating storage systems to minimize grid overload and improve reliability.</p>
        </div>
      </div>
    </section>
  </BaseFooterPage>
);

export default AboutRes;
