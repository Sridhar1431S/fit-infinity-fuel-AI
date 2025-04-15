
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface Recipe {
  id: number;
  name: string;
  image: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface RecipesCarouselProps {
  recipes: Recipe[];
  onAddToPlan: (recipeId: number) => void;
}

const RecipesCarousel = ({ recipes, onAddToPlan }: RecipesCarouselProps) => {
  return (
    <div className="w-full py-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Recommended Recipes</h2>
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {recipes.map((recipe) => (
            <CarouselItem key={recipe.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg">{recipe.name}</CardTitle>
                    <div className="mt-3 grid grid-cols-4 gap-2 text-xs text-center">
                      <div className="bg-gray-50 p-2 rounded-md">
                        <p className="font-medium">{recipe.calories}</p>
                        <p className="text-gray-500">kcal</p>
                      </div>
                      <div className="bg-blue-50 p-2 rounded-md">
                        <p className="font-medium">{recipe.protein}g</p>
                        <p className="text-blue-500">Protein</p>
                      </div>
                      <div className="bg-green-50 p-2 rounded-md">
                        <p className="font-medium">{recipe.carbs}g</p>
                        <p className="text-green-500">Carbs</p>
                      </div>
                      <div className="bg-yellow-50 p-2 rounded-md">
                        <p className="font-medium">{recipe.fat}g</p>
                        <p className="text-yellow-500">Fat</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button 
                      onClick={() => onAddToPlan(recipe.id)}
                      variant="outline" 
                      className="w-full group hover:bg-fitness-green hover:text-white hover:border-fitness-green"
                    >
                      <Plus size={16} className="mr-2 group-hover:scale-110 transition-transform" /> Add to My Plan
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default RecipesCarousel;
