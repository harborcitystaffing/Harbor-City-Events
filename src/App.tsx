import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"; // Correct import for React
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* SEO Metadata */}
      <Helmet>
        <title>Harbor City Event Staff | Premium NJ Event Staffing</title>
        <meta 
          name="description" 
          content="Professional event staffing for corporate events, private parties, and venues in New Jersey. Reliable staffing solutions." 
        />
      </Helmet>
      
      {/* Website Content */}
      <Router />
      <Toaster />

      {/* Vercel Monitoring Tools */}
      <Analytics />
      <SpeedInsights />
    </QueryClientProvider>
  );
}

export default App;