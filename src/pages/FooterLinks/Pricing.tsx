import BaseFooterPage from "./BaseFooterPage";
import { Button } from "@/components/ui/button";

const Pricing = () => (
  <BaseFooterPage title="Pricing Plans">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {/* Basic Plan */}
      <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition bg-card">
        <h2 className="text-xl font-semibold mb-4">Basic</h2>
        <p className="text-muted-foreground mb-6">For individuals and small households starting with energy insights.</p>
        <div className="text-4xl font-bold mb-6">Free</div>
        <ul className="space-y-2 text-muted-foreground mb-8">
          <li>✔ Real-time consumption analytics</li>
          <li>✔ Basic device integration</li>
          <li>✔ Community dashboard view</li>
          <li>✔ Monthly forecast access</li>
        </ul>
        <Button className="w-full">Get Started</Button>
      </div>

      {/* Pro Plan */}
      <div className="border-2 border-primary rounded-2xl p-8 shadow-md scale-105 bg-card relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">
          Most Popular
        </div>
        <h2 className="text-xl font-semibold mb-4">Pro</h2>
        <p className="text-muted-foreground mb-6">Best for prosumers, apartments, and small businesses.</p>
        <div className="text-4xl font-bold mb-2">$19<span className="text-lg text-muted-foreground">/mo</span></div>
        <ul className="space-y-2 text-muted-foreground mb-8">
          <li>✔ Everything in Basic</li>
          <li>✔ Smart-contract sharing automation</li>
          <li>✔ Advanced forecasting (AI-driven)</li>
          <li>✔ Unlimited device pairing</li>
          <li>✔ Export reports + analytics</li>
        </ul>
        <Button className="w-full">Upgrade Now</Button>
      </div>

      {/* Enterprise Plan */}
      <div className="border rounded-2xl p-8 shadow-sm hover:shadow-md transition bg-card">
        <h2 className="text-xl font-semibold mb-4">Enterprise</h2>
        <p className="text-muted-foreground mb-6">Designed for communities, smart-grid operators, and research teams.</p>
        <div className="text-4xl font-bold mb-2">Custom</div>
        <ul className="space-y-2 text-muted-foreground mb-8">
          <li>✔ Full API access</li>
          <li>✔ Custom ML model hosting</li>
          <li>✔ Private energy-exchange network</li>
          <li>✔ SLA + dedicated support</li>
          <li>✔ Bulk device onboarding</li>
        </ul>
        <Button variant="outline" className="w-full">Contact Sales</Button>
      </div>
    </div>
  </BaseFooterPage>
);

export default Pricing;
