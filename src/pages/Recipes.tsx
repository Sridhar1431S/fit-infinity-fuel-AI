
import Header from '@/components/Header';
import RecipesCarousel from '@/components/RecipesCarousel';

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
  const handleAddToPlan = (recipeId: number) => {
    console.log(`Recipe ${recipeId} added to plan`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fitness-green/5 via-fitness-blue/5 to-fitness-orange/5 animate-gradient-shift"></div>
        <div className="relative z-10 container mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Healthy Recipe Collection</h1>
          <RecipesCarousel recipes={recipes} onAddToPlan={handleAddToPlan} />
        </div>
      </main>
    </div>
  );
};

export default Recipes;
