
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import DietPlanDisplay from '@/components/DietPlanDisplay';

const MyDietPlan = () => {
  const location = useLocation();
  const fitnessGoal = location.state?.fitnessGoal || 'maintain';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fitness-green/5 via-fitness-blue/5 to-fitness-orange/5 animate-gradient-shift"></div>
        <div className="relative z-10 container mx-auto py-8 px-4">
          <DietPlanDisplay fitnessGoal={fitnessGoal} />
        </div>
      </main>
    </div>
  );
};

export default MyDietPlan;
