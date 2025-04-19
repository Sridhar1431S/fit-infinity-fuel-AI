
import React, { useEffect } from "react";
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
import Settings from "./pages/Settings";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  // Check for saved theme on app load
  useEffect(() => {
    const savedSettings = localStorage.getItem("userSettings");
    if (savedSettings) {
      const { theme, fontSize } = JSON.parse(savedSettings);
      
      // Apply theme
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }
      
      // Apply font size
      const htmlElement = document.documentElement;
      if (fontSize === 1) {
        htmlElement.style.fontSize = "0.9rem";
      } else if (fontSize === 2) {
        htmlElement.style.fontSize = "1rem";
      } else {
        htmlElement.style.fontSize = "1.1rem";
      }
    }
  }, []);

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {/* Enhanced animated background with gym aesthetic */}
          <div className="fixed inset-0 -z-10 transition-all duration-700 dark:bg-gray-900">
            <div className="absolute inset-0 bg-gradient-to-br from-fitness-blue/20 via-fitness-green/20 to-fitness-orange/20 dark:from-fitness-blue/10 dark:via-fitness-green/10 dark:to-fitness-orange/10 animate-gradient-shift"></div>
            <div className="absolute inset-0 backdrop-blur-[80px]"></div>
            
            {/* Dynamic gym photos with better positioning and animation */}
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
              alt="Gym Equipment"
              className="absolute right-0 top-0 w-64 h-auto opacity-20 dark:opacity-10 mix-blend-luminosity animate-float"
              style={{animationDelay: "0s"}}
            />
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
              alt="Fitness Training"
              className="absolute left-0 bottom-0 w-64 h-auto opacity-20 dark:opacity-10 mix-blend-luminosity animate-float"
              style={{animationDelay: "1s"}}
            />
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
              alt="Gym Workout"
              className="absolute right-0 bottom-1/3 w-56 h-auto opacity-20 dark:opacity-10 mix-blend-luminosity animate-float"
              style={{animationDelay: "1.5s"}}
            />
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
              alt="Weightlifting"
              className="absolute left-1/4 top-1/4 w-48 h-auto opacity-20 dark:opacity-10 mix-blend-luminosity animate-float"
              style={{animationDelay: "0.5s"}}
            />
            <img
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c"
              alt="Fitness Class"
              className="absolute right-1/4 top-2/3 w-48 h-auto opacity-20 dark:opacity-10 mix-blend-luminosity animate-float"
              style={{animationDelay: "2s"}}
            />
            
            {/* Enhanced dynamic neon light effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-[20%] left-[10%] w-36 h-36 bg-fitness-blue/30 dark:bg-fitness-blue/20 rounded-full blur-3xl animate-pulse-soft"></div>
              <div className="absolute top-[40%] right-[20%] w-44 h-44 bg-fitness-green/30 dark:bg-fitness-green/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
              <div className="absolute bottom-[30%] left-[30%] w-40 h-40 bg-fitness-orange/30 dark:bg-fitness-orange/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }}></div>
              <div className="absolute top-[60%] right-[30%] w-32 h-32 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }}></div>
              <div className="absolute bottom-[10%] right-[15%] w-28 h-28 bg-pink-500/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "0.8s" }}></div>
              <div className="absolute top-[10%] right-[10%] w-36 h-36 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2.5s" }}></div>
              <div className="absolute bottom-[20%] left-[10%] w-32 h-32 bg-green-500/20 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.2s" }}></div>
            </div>
            
            {/* Enhanced particle system - subtle moving dots */}
            <div className="particle-container absolute inset-0 overflow-hidden opacity-30 dark:opacity-20" aria-hidden="true">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute h-2 w-2 rounded-full bg-white/80 dark:bg-white/50"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${3 + Math.random() * 7}s linear infinite`,
                    opacity: 0.1 + Math.random() * 0.5
                  }}
                ></div>
              ))}
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
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
