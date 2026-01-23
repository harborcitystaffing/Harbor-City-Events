import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react"; // 1. Import from @vercel/analytics/react
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
      <Helmet>
        <title>Harbor City Event Staff | Premium NJ Event Staffing</title>
        <meta name="description" content="Professional event staffing for corporate events and private parties in New Jersey." />
      </Helmet>
      
      <Router />
      <Toaster />
      <Analytics /> {/* 2. Add the component here */}
    </QueryClientProvider>
  );
}

export default App;