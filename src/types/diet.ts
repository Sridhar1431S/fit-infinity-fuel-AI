
export interface Meal {
  name: string;
  ingredients: string[];
  portionSize: string;
  calories: number;
  image: string;
}

export interface DietPlan {
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
