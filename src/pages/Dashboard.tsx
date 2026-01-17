import { Card } from "@/components/ui/card";
import { Battery, Sun, TrendingUp, Zap } from "lucide-react";
import { PriceChart } from "@/components/dashboard/PriceChart";
import { UsageCard } from "@/components/dashboard/UsageCard";
import { RecommendationCard } from "@/components/dashboard/RecommendationCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">Welcome, John/Jane Doe  - Your Energy Dashboard</h1>
          <p className="text-muted-foreground">Monitor your consumption, using solar generation, and market opportunities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <UsageCard
            title="Current Usage"
            value="2.4 kW"
            icon={Zap}
            trend="-12%"
            trendLabel="vs yesterday"
          />
          <UsageCard
            title="Solar Generation"
            value="3.8 kW"
            icon={Sun}
            trend="+18%"
            trendLabel="vs yesterday"
          />
          <UsageCard
            title="Battery Level"
            value="87%"
            icon={Battery}
            trend="+5%"
            trendLabel="charging"
          />
          <UsageCard
            title="Market Price"
            value="$0.18/kWh"
            icon={TrendingUp}
            trend="-8%"
            trendLabel="vs average"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-card">
              <h2 className="text-xl font-semibold mb-4">24-Hour Price Projection</h2>
              <PriceChart />
            </Card>
          </div>
          
          <div>
            <RecommendationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
