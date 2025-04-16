
import Header from '@/components/Header';
import RecipesCarousel from '@/components/RecipesCarousel';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Mock recipe data
const recipes = [
  {
    id: 1,
    name: "High-Protein Quinoa Bowl",
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
  }
];

const Recipes = () => {
  const [mealPlan, setMealPlan] = useState<number[]>([]);

  const handleAddToPlan = (recipeId: number) => {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
      // Add the recipe to the meal plan
      setMealPlan(prev => [...prev, recipeId]);
      
      toast({
        title: "Recipe Added",
        description: `${recipe.name} has been added to your meal plan.`,
      });
    }
  };

  const handleViewMealPlan = () => {
    const selectedRecipes = recipes.filter(recipe => mealPlan.includes(recipe.id));
    const recipeNames = selectedRecipes.map(r => r.name).join(', ');
    
    toast({
      title: "Your Meal Plan",
      description: mealPlan.length > 0 
        ? `Your plan includes: ${recipeNames}`
        : "Your meal plan is currently empty.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fitness-green/5 via-fitness-blue/5 to-fitness-orange/5 animate-gradient-shift"></div>
        <div className="relative z-10 container mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Healthy Recipe Collection</h1>
          
          <div className="flex justify-end mb-4">
            <Button 
              onClick={handleViewMealPlan} 
              className="bg-gradient-to-r from-fitness-blue to-fitness-green text-white"
            >
              View Meal Plan {mealPlan.length > 0 && `(${mealPlan.length})`}
            </Button>
          </div>
          
          <RecipesCarousel recipes={recipes} onAddToPlan={handleAddToPlan} />
        </div>
      </main>
    </div>
  );
};

export default Recipes;
