
import { useState } from "react";
import Header from "@/components/Header";
import UserInputForm from "@/components/UserInputForm";
import DietPlanDisplay from "@/components/DietPlanDisplay";

const Index = () => {
  const [step, setStep] = useState<"form" | "plan">("form");
  const [fitnessGoal, setFitnessGoal] = useState<"lose" | "gain" | "maintain">("lose");

  const handleFormSubmit = (formData: any) => {
    setFitnessGoal(formData.fitnessGoal);
    setStep("plan");
    // In a real app, you would send this data to an API
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-8 px-4">
        {step === "form" ? (
          <div className="container mx-auto py-8">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-fitness-green via-fitness-blue to-fitness-orange bg-clip-text text-transparent">
                AI-Powered Diet Plan for Your Fitness Goals
              </h1>
              <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                Get a personalized diet plan tailored to your body metrics and fitness goals. 
                Whether you want to lose, gain, or maintain weight, our AI has you covered.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-fitness-green text-white flex items-center justify-center mr-4 shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Enter Your Details</h3>
                      <p className="text-gray-600">Provide your weight, height, age, activity level and fitness goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-fitness-blue text-white flex items-center justify-center mr-4 shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">AI Analysis</h3>
                      <p className="text-gray-600">Our advanced AI analyzes your data to create the perfect meal plan.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-fitness-orange text-white flex items-center justify-center mr-4 shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Get Your Plan</h3>
                      <p className="text-gray-600">Receive a personalized diet plan with meals, portions, and nutritional info.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Healthy food" 
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                  <div className="flex items-center gap-2">
                    <div className="bg-fitness-green/20 text-fitness-green p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Ready in minutes</p>
                      <p className="text-xs text-gray-500">AI-powered recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <UserInputForm onSubmit={handleFormSubmit} />

            <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-fitness-green/5 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-fitness-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitness-green">
                    <path d="M16 2H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Personalized Plans</h3>
                <p className="text-gray-600 text-sm">Get diet plans tailored to your unique body and goals</p>
              </div>
              
              <div className="bg-fitness-blue/5 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-fitness-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitness-blue">
                    <path d="M2 12h20"></path>
                    <path d="M12 2v20"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Nutritionally Balanced</h3>
                <p className="text-gray-600 text-sm">Perfect macro ratios for your specific fitness goal</p>
              </div>
              
              <div className="bg-fitness-orange/5 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-fitness-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitness-orange">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Tasty & Healthy</h3>
                <p className="text-gray-600 text-sm">Delicious recipes that support your fitness journey</p>
              </div>
            </div>
          </div>
        ) : (
          <DietPlanDisplay fitnessGoal={fitnessGoal} />
        )}
      </main>
      
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-fitness-green to-fitness-blue rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">AF</span>
              </div>
              <span className="font-semibold text-gray-800">AI Fitness Diet Planner</span>
            </div>
            
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} AI Fitness Diet Planner. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
