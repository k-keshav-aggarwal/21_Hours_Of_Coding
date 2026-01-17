// Pricing Page
export default function PricingPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-10 text-center">Pricing Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Basic Plan */}
        <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition bg-secondary/30">
          <h2 className="text-xl font-semibold mb-4">Basic</h2>
          <p className="text-muted-foreground mb-6">For individuals and small households starting with energy insights.</p>
          <div className="text-4xl font-bold mb-6">Free</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔ Real-time consumption analytics</li>
            <li>✔ Basic device integration</li>
            <li>✔ Community dashboard view</li>
            <li>✔ Monthly forecast access</li>
          </ul>
          <button className="mt-8 w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition">Get Started</button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-2xl p-8 shadow-md scale-105 bg-secondary/20">
          <h2 className="text-xl font-semibold mb-4">Pro</h2>
          <p className="text-muted-foreground mb-6">Best for prosumers, apartments, and small businesses.</p>
          <div className="text-4xl font-bold mb-2">$19<span className="text-lg text-muted-foreground">/mo</span></div>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔ Everything in Basic</li>
            <li>✔ Smart-contract sharing automation</li>
            <li>✔ Advanced forecasting (AI-driven)</li>
            <li>✔ Unlimited device pairing</li>
            <li>✔ Export reports + analytics</li>
          </ul>
          <button className="mt-8 w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition">Upgrade Now</button>
        </div>

        {/* Enterprise Plan */}
        <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition bg-secondary/30">
          <h2 className="text-xl font-semibold mb-4">Enterprise</h2>
          <p className="text-muted-foreground mb-6">Designed for communities, smart-grid operators, and research teams.</p>
          <div className="text-4xl font-bold mb-2">Custom</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>✔ Full API access</li>
            <li>✔ Custom ML model hosting</li>
            <li>✔ Private energy-exchange network</li>
            <li>✔ SLA + dedicated support</li>
            <li>✔ Bulk device onboarding</li>
          </ul>
          <button className="mt-8 w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition">Contact Sales</button>
        </div>

      </div>
    </div>
  );
}
