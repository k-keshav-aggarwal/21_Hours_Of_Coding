import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BaseFooterPage = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="min-h-screen bg-background py-12">
    <div className="container mx-auto px-4 max-w-4xl">
      <Card className="p-8 shadow-card">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <div className="prose dark:prose-invert max-w-none">
          {children}
        </div>
        <div className="mt-8 pt-6 border-t">
          <Button asChild variant="outline">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </Card>
    </div>
  </div>
);

export default BaseFooterPage;
