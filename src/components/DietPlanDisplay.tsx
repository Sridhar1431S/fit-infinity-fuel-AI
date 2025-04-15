
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

interface DietPlanDisplayProps {
  fitnessGoal: "lose" | "gain" | "maintain";
}

interface Meal {
  name: string;
  ingredients: string[];
  portionSize: string;
  calories: number;
  image: string;
}

interface DietPlan {
  dailyCalories: number;
  protein: number;
  carbs: number;
  fats: number;
  waterIntake: number;
  meals: {
    breakfast: Meal;
    morningSnack: Meal;
    lunch: Meal;
    eveningSnack: Meal;
    dinner: Meal;
  };
}

export default function DietPlanDisplay({ fitnessGoal }: DietPlanDisplayProps) {
  const [dietPlan, setDietPlan] = useState<DietPlan | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock data for demo purposes
  useEffect(() => {
    // Simulate API call with a timeout
    setTimeout(() => {
      let planData: DietPlan;

      if (fitnessGoal === "lose") {
        planData = {
          dailyCalories: 1800,
          protein: 135, // grams
          carbs: 157, // grams
          fats: 60, // grams
          waterIntake: 2.5, // liters
          meals: {
            breakfast: {
              name: "Greek Yogurt with Berries",
              ingredients: ["1 cup Greek yogurt", "1/2 cup mixed berries", "1 tbsp honey", "1 tbsp chia seeds"],
              portionSize: "1 bowl (250g)",
              calories: 320,
              image: "https://images.unsplash.com/photo-1514326005837-fb4791d25e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            morningSnack: {
              name: "Apple with Almond Butter",
              ingredients: ["1 medium apple", "1 tbsp almond butter"],
              portionSize: "1 apple + 1 tbsp (15g)",
              calories: 180,
              image: "https://images.unsplash.com/photo-1535913989690-96262b3136da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            lunch: {
              name: "Grilled Chicken Salad",
              ingredients: ["4 oz grilled chicken breast", "2 cups mixed greens", "1/4 cup cherry tomatoes", "1/4 cucumber", "1 tbsp olive oil", "1 tbsp lemon juice"],
              portionSize: "1 large bowl (350g)",
              calories: 420,
              image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            eveningSnack: {
              name: "Protein Shake with Banana",
              ingredients: ["1 scoop protein powder", "1 small banana", "1 cup almond milk", "Ice cubes"],
              portionSize: "1 glass (300ml)",
              calories: 250,
              image: "https://images.unsplash.com/photo-1540558870477-4322292d15bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            dinner: {
              name: "Baked Salmon with Quinoa",
              ingredients: ["5 oz salmon fillet", "1/2 cup cooked quinoa", "1 cup steamed broccoli", "1 tsp olive oil", "Lemon and herbs"],
              portionSize: "1 plate (300g)",
              calories: 450,
              image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
          }
        };
      } else if (fitnessGoal === "gain") {
        planData = {
          dailyCalories: 2800,
          protein: 180, // grams
          carbs: 315, // grams
          fats: 90, // grams
          waterIntake: 3, // liters
          meals: {
            breakfast: {
              name: "Protein Oatmeal with Fruits",
              ingredients: ["1 cup oats", "1 scoop protein powder", "1 banana", "1/4 cup mixed nuts", "1 tbsp honey", "1 cup milk"],
              portionSize: "1 large bowl (400g)",
              calories: 650,
              image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            morningSnack: {
              name: "Protein Bar & Smoothie",
              ingredients: ["1 protein bar", "1 banana", "1 cup milk", "1 tbsp peanut butter", "1/4 cup oats"],
              portionSize: "1 bar + 1 glass (350ml)",
              calories: 450,
              image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            lunch: {
              name: "Chicken Pasta with Vegetables",
              ingredients: ["6 oz chicken breast", "1.5 cups whole grain pasta", "1 cup mixed vegetables", "2 tbsp olive oil", "Parmesan cheese"],
              portionSize: "1 large plate (450g)",
              calories: 750,
              image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            eveningSnack: {
              name: "Yogurt with Granola and Honey",
              ingredients: ["1 cup Greek yogurt", "1/3 cup granola", "1 tbsp honey", "1/2 cup mixed berries"],
              portionSize: "1 bowl (300g)",
              calories: 380,
              image: "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            dinner: {
              name: "Steak with Sweet Potato",
              ingredients: ["8 oz ribeye steak", "1 large sweet potato", "1 cup asparagus", "2 tbsp butter", "Herbs and spices"],
              portionSize: "1 large plate (500g)",
              calories: 780,
              image: "https://images.unsplash.com/photo-1579366948929-444eb79881eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
          }
        };
      } else {
        planData = {
          dailyCalories: 2200,
          protein: 155, // grams
          carbs: 220, // grams
          fats: 73, // grams
          waterIntake: 2.7, // liters
          meals: {
            breakfast: {
              name: "Avocado Toast with Eggs",
              ingredients: ["2 slices whole grain bread", "1/2 avocado", "2 eggs", "Cherry tomatoes", "Salt and pepper"],
              portionSize: "2 slices (300g)",
              calories: 450,
              image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            morningSnack: {
              name: "Fruit and Nut Mix",
              ingredients: ["1 apple", "1/4 cup mixed nuts", "1 oz dark chocolate"],
              portionSize: "1 small bowl (150g)",
              calories: 300,
              image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            lunch: {
              name: "Quinoa Bowl with Roasted Vegetables",
              ingredients: ["1 cup cooked quinoa", "4 oz chicken or tofu", "1 cup roasted vegetables", "1 tbsp olive oil", "Mixed herbs"],
              portionSize: "1 bowl (380g)",
              calories: 520,
              image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            eveningSnack: {
              name: "Hummus with Veggie Sticks",
              ingredients: ["1/3 cup hummus", "1 cup mixed veggie sticks (carrots, cucumber, bell pepper)"],
              portionSize: "1 plate (200g)",
              calories: 220,
              image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            },
            dinner: {
              name: "Grilled Fish with Brown Rice",
              ingredients: ["5 oz white fish fillet", "3/4 cup brown rice", "1 cup steamed vegetables", "1 tbsp olive oil", "Lemon and herbs"],
              portionSize: "1 plate (400g)",
              calories: 480,
              image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            }
          }
        };
      }

      setDietPlan(planData);
      setLoading(false);
    }, 1500);
  }, [fitnessGoal]);

  if (loading) {
    return (
      <div className="w-full max-w-5xl mx-auto p-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 animate-pulse-soft bg-fitness-green/20 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitness-green">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <h2 className="text-xl font-medium text-gray-700">Generating your personalized diet plan</h2>
          <p className="text-gray-500 mt-2">Our AI is creating a plan tailored to your goals...</p>
        </div>
      </div>
    );
  }

  if (!dietPlan) return null;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-8 text-center animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Your Personalized Diet Plan
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {fitnessGoal === "lose" 
            ? "Based on your inputs, we've created a calorie-deficit plan with high protein to help you lose weight while preserving muscle." 
            : fitnessGoal === "gain" 
              ? "We've prepared a nutrient-dense, calorie-surplus plan to support healthy weight gain and muscle building."
              : "Your personalized maintenance plan focuses on balanced nutrition to keep your weight stable while supporting your fitness."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 animate-fade-in">
        <Card className="bg-fitness-green/5 border-fitness-green/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Daily Calories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dietPlan.dailyCalories} kcal</div>
          </CardContent>
        </Card>
        
        <Card className="bg-fitness-blue/5 border-fitness-blue/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Macros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-1 text-sm">
              <div>
                <div className="font-semibold">{dietPlan.protein}g</div>
                <div className="text-xs text-gray-500">Protein</div>
              </div>
              <div>
                <div className="font-semibold">{dietPlan.carbs}g</div>
                <div className="text-xs text-gray-500">Carbs</div>
              </div>
              <div>
                <div className="font-semibold">{dietPlan.fats}g</div>
                <div className="text-xs text-gray-500">Fats</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-fitness-orange/5 border-fitness-orange/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Water Intake</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dietPlan.waterIntake} L</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Fitness Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-semibold capitalize">
              {fitnessGoal === "lose" ? "Lose Weight" : fitnessGoal === "gain" ? "Gain Weight" : "Maintain Weight"}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 animate-fade-in">
        <h3 className="text-xl font-semibold mb-4">Daily Meal Plan</h3>
        <div className="space-y-6">
          {(["breakfast", "morningSnack", "lunch", "eveningSnack", "dinner"] as const).map((mealTime) => {
            const meal = dietPlan.meals[mealTime];
            const mealDisplayName = mealTime === "morningSnack" 
              ? "Mid-Morning Snack" 
              : mealTime === "eveningSnack" 
                ? "Evening Snack" 
                : mealTime.charAt(0).toUpperCase() + mealTime.slice(1);
            
            return (
              <Card key={mealTime} className="overflow-hidden border-0 shadow-md">
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto bg-gray-200 relative overflow-hidden">
                    <img 
                      src={meal.image} 
                      alt={meal.name} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-sm font-medium text-fitness-green">{mealDisplayName}</span>
                        <h4 className="text-xl font-semibold mt-1">{meal.name}</h4>
                      </div>
                      <span className="bg-fitness-orange/10 text-fitness-orange-dark px-3 py-1 rounded-full text-sm font-medium">
                        {meal.calories} kcal
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-500 mb-1">Ingredients:</div>
                      <ul className="text-sm grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
                        {meal.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-fitness-green"></div>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">Portion size:</span>
                        <span className="ml-2 text-sm">{meal.portionSize}</span>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        Swap Meal
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
