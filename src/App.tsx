import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import PolicySimulator from "./pages/PolicySimulator";
import NotFound from "./pages/NotFound";

import AboutRes from "./pages/FooterLinks/AboutRes";
import APIDoc from "./pages/FooterLinks/APIDoc";
import Documentation from "./pages/FooterLinks/Documentation";
import EmailUs from "./pages/FooterLinks/EmailUs";
import Features from "./pages/FooterLinks/Features";
import Pricing from "./pages/FooterLinks/Pricing";
import Support from "./pages/FooterLinks/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/simulator" element={<PolicySimulator />} />
          <Route path="/about-research" element={<AboutRes />} />
          <Route path="/api-documentation" element={<APIDoc />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/email-us" element={<EmailUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
