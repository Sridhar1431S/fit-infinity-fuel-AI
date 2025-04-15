
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Meal } from "@/types/diet";

interface MealCardProps {
  meal: Meal;
  mealTime: string;
  mealDisplayName: string;
}

export const MealCard = ({ meal, mealTime, mealDisplayName }: MealCardProps) => {
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
};
