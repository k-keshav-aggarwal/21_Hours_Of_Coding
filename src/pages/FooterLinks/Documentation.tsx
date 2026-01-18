import BaseFooterPage from "./BaseFooterPage";

const Documentation = () => (
  <BaseFooterPage title="Documentation">
    <p className="text-muted-foreground mb-6">
      Welcome to the official documentation for the P2P Energy Exchange platform. Learn how to optimize your energy consumption and participate in community sharing.
    </p>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
      <p className="text-muted-foreground mb-4">
        Setting up your energy dashboard is quick and easy. Follow our step-by-step guide to connect your smart devices.
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
        <li>Create an account and set up your profile.</li>
        <li>Connect your solar inverter and battery storage.</li>
        <li>Configure your energy sharing preferences.</li>
        <li>Start monitoring your real-time analytics.</li>
      </ol>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">User Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium mb-1">Dashboard Overview</h3>
          <p className="text-sm text-muted-foreground">Understand your energy generation, usage, and battery metrics.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium mb-1">Simulator Guide</h3>
          <p className="text-sm text-muted-foreground">How to use the Policy Simulator to predict market outcomes.</p>
        </div>
      </div>
    </section>
  </BaseFooterPage>
);

export default Documentation;
