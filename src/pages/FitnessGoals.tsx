
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, TrendingUp, Scale, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const FitnessGoals = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleStartJourney = () => {
    if (selectedGoal) {
      toast({
        title: "Fitness Goal Selected",
        description: `Your ${selectedGoal} goal has been set! Redirecting to your diet plan.`,
      });
      
      // Navigate to diet plan with the selected goal as state
      navigate('/diet-plan', { state: { fitnessGoal: selectedGoal.toLowerCase() } });
    }
  };

  const handleGoalSelection = (goal: string) => {
    setSelectedGoal(goal);
    toast({
      title: `${goal} Selected`,
      description: `Great choice! Click "Start Your Journey" to continue.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fitness-green/5 via-fitness-blue/5 to-fitness-orange/5 animate-gradient-shift"></div>
        <div className="relative z-10 container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Set Your Fitness Goals</h1>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Weight Loss", icon: Scale, color: "from-fitness-green", description: "Achieve sustainable weight loss with personalized nutrition plans" },
              { title: "Muscle Gain", icon: TrendingUp, color: "from-fitness-blue", description: "Build lean muscle mass with optimal protein intake and workouts" },
              { title: "Performance", icon: Target, color: "from-fitness-orange", description: "Enhance athletic performance with targeted nutrition strategies" }
            ].map((goal) => (
              <Card 
                key={goal.title}
                className={`group overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 ${
                  selectedGoal === goal.title ? 'border-fitness-green' : 'border-transparent'
                }`}
                onClick={() => handleGoalSelection(goal.title)}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 mb-4 rounded-lg bg-gradient-to-br ${goal.color} to-white/20 flex items-center justify-center group-hover:animate-pulse`}>
                    <goal.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
                  <p className="text-gray-600">{goal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {selectedGoal && (
            <div className="mt-8 text-center animate-fade-in">
              <Button 
                onClick={handleStartJourney}
                className="bg-gradient-to-r from-fitness-green to-fitness-blue text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                Start Your Journey <ArrowRight size={18} />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default FitnessGoals;
