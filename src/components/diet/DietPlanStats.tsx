
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { DietPlan } from "@/types/diet";

interface DietPlanStatsProps {
  dietPlan: DietPlan;
  fitnessGoal: "lose" | "gain" | "maintain";
}

export const DietPlanStats = ({ dietPlan, fitnessGoal }: DietPlanStatsProps) => {
  return (
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
  );
};
