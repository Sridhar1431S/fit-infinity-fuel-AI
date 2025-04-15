
import { useState } from "react";
import Header from "@/components/Header";
import UserInputForm from "@/components/UserInputForm";
import DietPlanDisplay from "@/components/DietPlanDisplay";
import FitnessGoalSelection from "@/components/FitnessGoalSelection";
import RecipesCarousel from "@/components/RecipesCarousel";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

// Mock recipe data
const mockRecipes = [
  {
    id: 1,
    name: "Protein Packed Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    calories: 420,
    protein: 22,
    carbs: 45,
    fat: 12
  },
  {
    id: 2,
    name: "Grilled Salmon with Avocado",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    calories: 380,
    protein: 28,
    carbs: 18,
    fat: 16
  },
  {
    id: 3,
    name: "Mediterranean Veggie Wrap",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    calories: 310,
    protein: 12,
    carbs: 42,
    fat: 8
  },
  {
    id: 4,
    name: "Berry Protein Smoothie",
    image: "https://images.unsplash.com/photo-1557694797-69dd1a771c92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    calories: 280,
    protein: 24,
    carbs: 32,
    fat: 4
  }
];

const Index = () => {
  const [step, setStep] = useState<"goal" | "form" | "plan">("goal");
  const [fitnessGoal, setFitnessGoal] = useState<"lose" | "gain" | "maintain">("lose");

  const handleGoalSelect = (goal: "lose" | "gain" | "maintain") => {
    setFitnessGoal(goal);
    setStep("form");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleFormSubmit = (formData: any) => {
    // Preserve the selected fitness goal from the previous step
    setStep("plan");
    // In a real app, you would send this data to an API
    console.log("Form submitted with data:", { ...formData, fitnessGoal });
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleAddToPlan = (recipeId: number) => {
    console.log(`Recipe ${recipeId} added to plan`);
    // In a real app, you would update the user's meal plan
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-8 px-4">
        {step === "goal" && (
          <div className="container mx-auto py-8 animate-fade-in">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-fitness-green via-fitness-blue to-fitness-orange bg-clip-text text-transparent">
                Personalized Diet Plans Powered by AI
              </h1>
              <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                Get a customized nutrition plan tailored to your body metrics and fitness goals. 
                Whether you want to lose, gain, or maintain weight, our AI has you covered.
              </p>
            </div>

            <FitnessGoalSelection onSelect={handleGoalSelect} />

            <div className="mt-20 max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose FitInfinityFuel AI?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-fitness-green/20 to-fitness-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitness-green">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">AI-Powered Precision</h3>
                  <p className="text-gray-600 text-sm">Our advanced AI analyzes your unique needs to create the perfect meal plan.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-fitness-blue/20 to-fitness-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitness-blue">
                      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/>
                      <path d="M12 12H3"/>
                      <path d="M16 6V18"/>
                      <path d="M14 16 12 18 14 20"/>
                      <path d="M14 8 12 6 14 4"/>
                      <path d="M18 12H21"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Personalized Plans</h3>
                  <p className="text-gray-600 text-sm">Customized nutrition based on your body metrics and specific goals.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-fitness-orange/20 to-fitness-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitness-orange">
                      <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Progress Tracking</h3>
                  <p className="text-gray-600 text-sm">Monitor your journey with visual charts and data insights.</p>
                </div>
              </div>
            </div>

            <RecipesCarousel 
              recipes={mockRecipes} 
              onAddToPlan={handleAddToPlan}
            />
          </div>
        )}

        {step === "form" && (
          <div className="container mx-auto py-8 animate-fade-in">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Your Profile
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {fitnessGoal === "lose" && "We'll create a calorie deficit plan with high-protein, nutrient-dense meals."}
                {fitnessGoal === "gain" && "We'll design a calorie surplus plan with balanced macros to support muscle growth."}
                {fitnessGoal === "maintain" && "We'll develop a balanced meal plan with controlled portions to maintain your weight."}
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <UserInputForm onSubmit={handleFormSubmit} />
              
              <div className="mt-4 text-center">
                <Button variant="ghost" onClick={() => setStep("goal")} className="text-gray-500">
                  &larr; Back to Goals
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {step === "plan" && (
          <div className="container mx-auto py-8 animate-fade-in">
            <DietPlanDisplay fitnessGoal={fitnessGoal} />
            
            <div className="mt-8 text-center">
              <Button 
                variant="outline"
                onClick={() => setStep("form")}
                className="mr-4"
              >
                Adjust My Details
              </Button>
              
              <Button
                className="bg-gradient-to-r from-fitness-green to-fitness-blue text-white"
              >
                <Zap className="mr-2 h-4 w-4" />
                Save Diet Plan
              </Button>
            </div>
            
            <RecipesCarousel 
              recipes={mockRecipes} 
              onAddToPlan={handleAddToPlan}
            />
          </div>
        )}
      </main>
      
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-fitness-green to-fitness-blue rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">FF</span>
              </div>
              <span className="font-semibold text-gray-800">FitInfinityFuel AI</span>
            </div>
            
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} FitInfinityFuel AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
