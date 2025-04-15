import { useEffect, useState } from "react";
import type { DietPlan } from "@/types/diet";
import { DietPlanLoading } from "./diet/DietPlanLoading";
import { DietPlanStats } from "./diet/DietPlanStats";
import { MealCard } from "./diet/MealCard";

interface DietPlanDisplayProps {
  fitnessGoal: "lose" | "gain" | "maintain";
}

export default function DietPlanDisplay({ fitnessGoal }: DietPlanDisplayProps) {
  const [dietPlan, setDietPlan] = useState<DietPlan | null>(null);
  const [loading, setLoading] = useState(true);

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
    return <DietPlanLoading />;
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

      <DietPlanStats dietPlan={dietPlan} fitnessGoal={fitnessGoal} />

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
              <MealCard
                key={mealTime}
                meal={meal}
                mealTime={mealTime}
                mealDisplayName={mealDisplayName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
