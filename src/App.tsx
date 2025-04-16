
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
          {/* Gym background with neon lights */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-fitness-blue/30 via-fitness-green/30 to-fitness-orange/30 animate-gradient-shift"></div>
            <div className="absolute inset-0 backdrop-blur-[80px]"></div>
            
            {/* Updated gym photos with better positioning and variety */}
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
              alt="Gym Equipment"
              className="absolute right-0 top-0 w-64 h-auto opacity-20 mix-blend-luminosity"
            />
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
              alt="Fitness Training"
              className="absolute left-0 bottom-0 w-64 h-auto opacity-20 mix-blend-luminosity"
            />
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
              alt="Gym Workout"
              className="absolute right-0 bottom-1/3 w-56 h-auto opacity-20 mix-blend-luminosity"
            />
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
              alt="Weightlifting"
              className="absolute left-1/4 top-1/4 w-48 h-auto opacity-20 mix-blend-luminosity"
            />
            <img
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c"
              alt="Fitness Class"
              className="absolute right-1/4 top-2/3 w-48 h-auto opacity-20 mix-blend-luminosity"
            />
            
            {/* Enhanced neon light effects */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-[20%] left-[10%] w-36 h-36 bg-fitness-blue/40 rounded-full blur-3xl animate-pulse-soft"></div>
              <div className="absolute top-[40%] right-[20%] w-44 h-44 bg-fitness-green/40 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
              <div className="absolute bottom-[30%] left-[30%] w-40 h-40 bg-fitness-orange/40 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }}></div>
              <div className="absolute top-[60%] right-[30%] w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }}></div>
              <div className="absolute bottom-[10%] right-[15%] w-28 h-28 bg-pink-500/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "0.8s" }}></div>
              <div className="absolute top-[10%] right-[10%] w-36 h-36 bg-blue-500/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2.5s" }}></div>
              <div className="absolute bottom-[20%] left-[10%] w-32 h-32 bg-green-500/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.2s" }}></div>
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
