import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GameTheoryBadge } from "@/components/ui/game-theory-badge";
import { Play, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const PolicySimulator = () => {
  const [loading, setLoading] = useState(false);
  const [simulationType, setSimulationType] = useState("stackelberg");
  const [solarAdoption, setSolarAdoption] = useState([45]);
  const [batteryPenetration, setBatteryPenetration] = useState([25]);
  const [gridCapacity, setGridCapacity] = useState([80]);
  const [incentive, setIncentive] = useState([15]);
  const [results, setResults] = useState<any>(null);

  const runSimulation = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${window.location.protocol}//${window.location.hostname}:5001/api/simulate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: simulationType,
          solar_adoption: solarAdoption[0],
          battery_penetration: batteryPenetration[0],
          grid_capacity: gridCapacity[0],
          incentive: incentive[0],
        }),
      });
      
      if (!response.ok) throw new Error('Simulation failed');
      
      const data = await response.json();
      setResults(data);
      toast.success("Simulation completed successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to run simulation. Please ensure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-foreground mb-2">Policy Simulator</h1>
          <p className="text-muted-foreground">Test different market scenarios and policy interventions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-semibold mb-6">Simulation Parameters</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Simulation Type</label>
                <Select value={simulationType} onValueChange={setSimulationType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select simulation type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stackelberg">Stackelberg Game</SelectItem>
                    <SelectItem value="coalition">Coalition Formation</SelectItem>
                    <SelectItem value="bargaining">Bargaining</SelectItem>
                    <SelectItem value="non-cooperative">Non-cooperative Equilibrium</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Solar Adoption Estimate</label>
                <Slider value={solarAdoption} onValueChange={setSolarAdoption} max={100} step={5} />
                <span className="text-sm text-muted-foreground">{solarAdoption[0]}% of households</span>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Battery Penetration</label>
                <Slider value={batteryPenetration} onValueChange={setBatteryPenetration} max={100} step={5} />
                <span className="text-sm text-muted-foreground">{batteryPenetration[0]}% with storage</span>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Grid Capacity Limit</label>
                <Slider value={gridCapacity} onValueChange={setGridCapacity} max={100} step={5} />
                <span className="text-sm text-muted-foreground">{gridCapacity[0]}% of maximum</span>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">Incentive Percentage</label>
                <Slider value={incentive} onValueChange={setIncentive} max={50} step={5} />
                <span className="text-sm text-muted-foreground">{incentive[0]}% subsidy</span>
              </div>

              <Button 
                className="w-full" 
                size="lg" 
                onClick={runSimulation}
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Play className="mr-2 h-4 w-4" />
                )}
                {loading ? "Running..." : "Run Simulation"}
              </Button>
            </div>
          </Card>

          <Card className="p-6 shadow-card">
            <h2 className="text-xl font-semibold mb-6">Expected Outcomes</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Fairness Index</span>
                  <span className="text-2xl font-semibold text-primary">
                    {results ? results.fairness_index : "0.82"}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${(results?.fairness_index || 0.82) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <GameTheoryBadge type="stackelberg" />
                <GameTheoryBadge type="coalition" />
                <GameTheoryBadge type="bargaining" />
                <GameTheoryBadge type="non-cooperative" />
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">Key Insights</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {results ? results.insights : "Prices dip around noon because solar floods the network. The model expects moderate grid stress in the evening. Coalition formation reduces costs for 63% of participants."}
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-3">Impact Distribution</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Prosumers</span>
                    <span className="text-primary">
                      +{results ? results.savings.prosumers : "12"}% savings
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Households</span>
                    <span className="text-primary">
                      +{results ? results.savings.households : "8"}% savings
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Retailers</span>
                    <span className="text-muted-foreground">
                      {results ? results.savings.retailers : "-3"}% margin
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PolicySimulator;
