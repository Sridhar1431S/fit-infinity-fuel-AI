
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
      } else {
        document.documentElement.classList.remove("dark");
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
          {/* Enhanced animated background with gym aesthetic and dumbbells */}
          <div className="fixed inset-0 -z-10 transition-all duration-700 dark:bg-gray-900">
            {/* Dynamic animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-fitness-blue/30 via-fitness-green/30 to-fitness-orange/30 dark:from-fitness-blue/10 dark:via-fitness-green/10 dark:to-fitness-orange/10 animate-gradient-shift opacity-90"></div>
            <div className="absolute inset-0 backdrop-blur-[50px]"></div>
            
            {/* Dynamic gym photos with better positioning and animation */}
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
              alt="Gym Equipment"
              className="absolute right-0 top-0 w-96 h-auto opacity-15 dark:opacity-10 mix-blend-luminosity animate-float"
              style={{animationDelay: "0s"}}
            />
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
              alt="Fitness Training"
              className="absolute left-0 bottom-0 w-96 h-auto opacity-15 dark:opacity-10 mix-blend-luminosity animate-float"
              style={{animationDelay: "1s"}}
            />
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
              alt="Gym Workout"
              className="absolute right-0 bottom-1/3 w-80 h-auto opacity-15 dark:opacity-10 mix-blend-luminosity animate-float"
              style={{animationDelay: "1.5s"}}
            />
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f"
              alt="Weightlifting"
              className="absolute left-1/4 top-1/4 w-72 h-auto opacity-15 dark:opacity-10 mix-blend-luminosity animate-float"
              style={{animationDelay: "0.5s"}}
            />
            <img
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c"
              alt="Fitness Class"
              className="absolute right-1/4 top-2/3 w-80 h-auto opacity-15 dark:opacity-10 mix-blend-luminosity animate-float"
              style={{animationDelay: "2s"}}
            />
            
            {/* Enhanced floating dumbbells animation - more dumbbells, better positioned */}
            {Array.from({ length: 50 }).map((_, index) => (
              <div 
                key={index}
                className="dumbbell absolute text-gray-400 dark:text-gray-600" 
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 7}s`,
                  transform: `scale(${0.4 + Math.random() * 0.8}) rotate(${Math.random() * 45}deg)`,
                  opacity: 0.2 + Math.random() * 0.4,
                  zIndex: -1
                }}
              >
                <div className="dumbbell-bar"></div>
              </div>
            ))}
            
            {/* Enhanced dynamic neon light effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-fitness-blue/40 dark:bg-fitness-blue/20 rounded-full blur-3xl animate-pulse-soft"></div>
              <div className="absolute top-[40%] right-[20%] w-80 h-80 bg-fitness-green/40 dark:bg-fitness-green/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
              <div className="absolute bottom-[30%] left-[30%] w-72 h-72 bg-fitness-orange/40 dark:bg-fitness-orange/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }}></div>
              <div className="absolute top-[60%] right-[30%] w-56 h-56 bg-purple-500/30 dark:bg-purple-500/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }}></div>
              <div className="absolute bottom-[10%] right-[15%] w-48 h-48 bg-pink-500/30 dark:bg-pink-500/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "0.8s" }}></div>
              <div className="absolute top-[10%] right-[10%] w-60 h-60 bg-blue-500/30 dark:bg-blue-500/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2.5s" }}></div>
              <div className="absolute bottom-[20%] left-[10%] w-56 h-56 bg-green-500/30 dark:bg-green-500/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.2s" }}></div>
            </div>
            
            {/* Enhanced particle system - subtle moving dots */}
            <div className="particle-container absolute inset-0 overflow-hidden opacity-50 dark:opacity-30" aria-hidden="true">
              {Array.from({ length: 40 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute h-3 w-3 rounded-full bg-white/80 dark:bg-white/50"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${3 + Math.random() * 7}s linear infinite`,
                    opacity: 0.2 + Math.random() * 0.6,
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
