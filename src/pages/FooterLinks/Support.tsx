import BaseFooterPage from "./BaseFooterPage";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Support = () => (
  <BaseFooterPage title="Support">
    <p className="text-muted-foreground mb-8">
      We're here to help you with anything you need — from troubleshooting, platform guidance,
      developer support, account issues, to integration assistance.
    </p>

    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-3">📩 Contact Support</h2>
      <p className="text-muted-foreground mb-4">
        Reach out to our team for personalized assistance. We typically respond within 24 hours.
      </p>
      <Button asChild>
        <a href="mailto:k.keshav.agg@gmail.com">Email Support</a>
      </Button>
    </section>

    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-3">💬 Live Community Help</h2>
      <p className="text-muted-foreground mb-4">
        Join our community spaces to get help from other developers and users.
      </p>
      <ul className="list-disc ml-6 text-muted-foreground space-y-2">
        <li>Discord Community</li>
        <li>Developer Forum</li>
        <li>Feature Request Board</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-3">📘 Help Center</h2>
      <p className="text-muted-foreground mb-4">
        Browse detailed tutorials, FAQs, troubleshooting guides, and best practices.
      </p>
      <Button asChild variant="outline">
        <Link to="/documentation">Visit Documentation</Link>
      </Button>
    </section>
  </BaseFooterPage>
);

export default Support;
