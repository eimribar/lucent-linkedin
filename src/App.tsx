
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Lake from "./pages/Lake";
import Ideas from "./pages/Ideas";
import Generate from "./pages/Generate";
import Approvals from "./pages/Approvals";
import Schedule from "./pages/Schedule";
import Analytics from "./pages/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lake" element={<Lake />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* Fallback for unknown routes */}
          <Route path="*" element={<Navigate to="/lake" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
