
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MyDietPlan from "./pages/MyDietPlan";
import FitnessGoals from "./pages/FitnessGoals";
import Recipes from "./pages/Recipes";
import Progress from "./pages/Progress";
import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {/* Neon background with gradient animation */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-fitness-blue/20 via-fitness-green/20 to-fitness-orange/20 animate-gradient-shift"></div>
            <div className="absolute inset-0 backdrop-blur-[100px]"></div>
            {/* Fitness anime image */}
            <img
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
              alt="Fitness Inspiration"
              className="absolute right-0 bottom-0 w-48 h-auto opacity-30 mix-blend-luminosity"
            />
            {/* Neon light effects */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-fitness-blue/30 rounded-full blur-3xl animate-pulse-soft"></div>
              <div className="absolute top-[40%] right-[20%] w-40 h-40 bg-fitness-green/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
              <div className="absolute bottom-[30%] left-[30%] w-36 h-36 bg-fitness-orange/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>

          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/diet-plan" element={<MyDietPlan />} />
              <Route path="/goals" element={<FitnessGoals />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/settings" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
