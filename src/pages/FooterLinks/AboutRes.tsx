// About Research Page
export default function AboutResearchPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-8">About Our Research</h1>

      <p className="text-muted-foreground mb-10 max-w-3xl">
        The 21 Topon Ki Salami platform is built on cutting-edge research in distributed systems, renewable energy
        optimization, and AI-driven demand forecasting. Our mission is to empower communities with transparency,
        efficiency, and sustainable energy-sharing technologies.
      </p>

      {/* Research Areas */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Research Areas</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Distributed smart-grid coordination</li>
          <li>AI models for consumption and generation forecasting</li>
          <li>Blockchain-based settlement for energy transactions</li>
          <li>IoT-driven real-time monitoring systems</li>
          <li>Energy surplus detection and dynamic redistribution algorithms</li>
        </ul>
      </section>

      {/* Papers */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Published Papers & Technical Notes</h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <p className="font-medium">1. AI-Based Forecasting for Community Energy Systems</p>
            <p>An in-depth study on machine-learning models used to predict peak loads and renewable energy output.</p>
          </div>
          <div>
            <p className="font-medium">2. Smart-Contract Mechanisms for Decentralized Energy Trading</p>
            <p>Explores secure, transparent, and automated settlement mechanisms for P2P energy sharing.</p>
          </div>
          <div>
            <p className="font-medium">3. Distributed Battery Optimization Framework</p>
            <p>Research into coordinating storage systems to minimize grid overload and improve reliability.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Research Team</h2>
        <p className="text-muted-foreground max-w-2xl">
          Our interdisciplinary team brings together experts in artificial intelligence, energy policy, power systems,
          cryptography, and embedded systems engineering.
        </p>
      </section>
    </div>
  );
}