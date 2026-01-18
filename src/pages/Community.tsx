import BaseFooterPage from "./FooterLinks/BaseFooterPage";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Globe, Heart } from "lucide-react";

const Community = () => (
  <BaseFooterPage title="Community">
    <p className="text-muted-foreground mb-8">
      Join a growing movement of energy-conscious individuals and organizations committed to a sustainable, decentralized future.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Local Hubs</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Connect with prosumers in your immediate neighborhood to coordinate sharing schedules and local events.
        </p>
        <Button variant="outline" size="sm">Find Your Hub</Button>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Discussion Forum</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Share tips on solar optimization, battery maintenance, and market strategies with our global community.
        </p>
        <Button variant="outline" size="sm">Join Discussion</Button>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Globe className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Open Source</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Contribute to our open-source algorithms and help improve market fairness for everyone.
        </p>
        <Button variant="outline" size="sm">View on GitHub</Button>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Success Stories</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Read how communities around the world are reducing their carbon footprint and energy costs.
        </p>
        <Button variant="outline" size="sm">Read Stories</Button>
      </Card>
    </div>

    <section className="bg-muted p-8 rounded-2xl text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to participate?</h2>
      <p className="text-muted-foreground mb-6">
        Whether you're a homeowner with solar panels or a tenant looking for green energy, there's a place for you.
      </p>
      <Button size="lg">Get Started Today</Button>
    </section>
  </BaseFooterPage>
);

export default Community;
