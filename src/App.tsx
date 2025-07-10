import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import WhatsAppButton from "@/components/WhatsAppButton";

// Simple router implementation
const Router = () => {
  const path = window.location.pathname;
  
  // Check if the path matches /articles/:id pattern
  const articleMatch = path.match(/^\/articles\/(\d+)$/);
  
  if (path === "/") {
    return <Index />;
  } else if (path === "/articles") {
    return <Articles />;
  } else if (articleMatch) {
    return <ArticleDetail />;
  } else {
    return <NotFound />;
  }
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <Router />
    <WhatsAppButton />
  </TooltipProvider>
);

export default App;
