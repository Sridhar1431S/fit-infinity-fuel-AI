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

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const savedSettings = localStorage.getItem("userSettings");
    if (savedSettings) {
      const { theme, fontSize } = JSON.parse(savedSettings);
      
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
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
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-fitness-blue/10 via-fitness-green/10 to-fitness-orange/10 dark:from-fitness-blue/5 dark:via-fitness-green/5 dark:to-fitness-orange/5 animate-gradient-shift"></div>
            
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
              alt="Gym Equipment"
              className="absolute right-0 top-0 w-96 h-auto opacity-20 dark:opacity-15 mix-blend-overlay animate-float"
              style={{animationDelay: "0s"}}
            />
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
              alt="Fitness Training"
              className="absolute left-0 bottom-0 w-96 h-auto opacity-20 dark:opacity-15 mix-blend-overlay animate-float"
              style={{animationDelay: "1s"}}
            />
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
              alt="Gym Workout"
              className="absolute right-0 bottom-1/3 w-80 h-auto opacity-20 dark:opacity-15 mix-blend-overlay animate-float"
              style={{animationDelay: "1.5s"}}
            />
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
              alt="Weightlifting"
              className="absolute left-1/4 top-1/4 w-72 h-auto opacity-20 dark:opacity-15 mix-blend-overlay animate-float"
              style={{animationDelay: "0.5s"}}
            />
            <img
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c"
              alt="Fitness Class"
              className="absolute right-1/4 top-2/3 w-80 h-auto opacity-20 dark:opacity-15 mix-blend-overlay animate-float"
              style={{animationDelay: "2s"}}
            />
            
            {Array.from({ length: 50 }).map((_, index) => (
              <div 
                key={index}
                className="dumbbell absolute text-gray-600 dark:text-gray-400" 
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 7}s`,
                  transform: `scale(${0.4 + Math.random() * 0.8}) rotate(${Math.random() * 45}deg)`,
                  opacity: 0.3 + Math.random() * 0.4,
                  zIndex: -1
                }}
              >
                <div className="dumbbell-bar"></div>
              </div>
            ))}
            
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-fitness-blue/20 dark:bg-fitness-blue/10 rounded-full blur-3xl animate-pulse-soft"></div>
              <div className="absolute top-[40%] right-[20%] w-80 h-80 bg-fitness-green/20 dark:bg-fitness-green/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
              <div className="absolute bottom-[30%] left-[30%] w-72 h-72 bg-fitness-orange/20 dark:bg-fitness-orange/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }}></div>
              <div className="absolute top-[60%] right-[30%] w-56 h-56 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }}></div>
              <div className="absolute bottom-[10%] right-[15%] w-48 h-48 bg-pink-500/15 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "0.8s" }}></div>
            </div>
            
            <div className="particle-container absolute inset-0 overflow-hidden opacity-60 dark:opacity-40 pointer-events-none" aria-hidden="true">
              {Array.from({ length: 40 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute h-3 w-3 rounded-full bg-white/60 dark:bg-white/40"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${3 + Math.random() * 7}s linear infinite`,
                    opacity: 0.3 + Math.random() * 0.4,
                    zIndex: -1
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
