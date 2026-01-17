import { BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 mt-20 border-t border-secondary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-2xl bg-primary flex items-center justify-center shadow-md">
                <BarChart3 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-xl tracking-tight">21 Hours Of Coding</span>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Empowering communities with AI&nbsp;driven energy sharing and sustainability insights.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Platform</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <Link to="/features" className="hover:text-secondary-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-secondary-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="hover:text-secondary-foreground transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <Link to="/about-research" className="hover:text-secondary-foreground transition-colors">
                  About Research
                </Link>
              </li>
              <li>
                <Link to="/api-documentation" className="hover:text-secondary-foreground transition-colors">
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <Link to="/support" className="hover:text-secondary-foreground transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <a href="/community" className="hover:text-secondary-foreground transition-colors">
                  Community
                </a>
              </li>
              <li>
                <Link to="/email-us" className="hover:text-secondary-foreground transition-colors">
                  Email Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-6 text-center text-sm text-secondary-foreground/60">
          <p>
            &copy; 2026 - 21 Hours of Coding Platform. Built for sustainable communities.
          </p>
        </div>
      </div>
    </footer>
  );
};
