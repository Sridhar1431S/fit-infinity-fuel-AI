
import { useState } from 'react';
import { ArrowDown, ArrowUp, Minus } from 'lucide-react';

interface FitnessGoalSelectionProps {
  onSelect: (goal: "lose" | "gain" | "maintain") => void;
}

const FitnessGoalSelection = ({ onSelect }: FitnessGoalSelectionProps) => {
  const [selectedGoal, setSelectedGoal] = useState<"lose" | "gain" | "maintain" | null>(null);

  const handleSelect = (goal: "lose" | "gain" | "maintain") => {
    setSelectedGoal(goal);
    onSelect(goal);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Select Your Fitness Goal</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Lose Weight Button */}
        <button 
          onClick={() => handleSelect("lose")}
          className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl transition-all duration-300 overflow-hidden
            ${selectedGoal === "lose" ? 'bg-gradient-to-br from-red-500 to-red-600 text-white' : 'bg-red-50 hover:bg-red-100 text-red-600'}
            border-2 ${selectedGoal === "lose" ? 'border-red-500' : 'border-red-200'} hover:shadow-xl`}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-300 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-300 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
            <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-red-300 to-transparent transform -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>
            <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-transparent via-red-300 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000"></div>
          </div>
          
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 
            ${selectedGoal === "lose" ? 'bg-white text-red-500' : 'bg-red-100 text-red-500'}`}>
            <ArrowDown size={32} className="animate-pulse-soft" />
          </div>
          <h3 className="text-xl font-bold">Lose Weight</h3>
          <p className="mt-2 text-sm opacity-80 text-center">Calorie deficit diet to reduce body weight</p>
        </button>

        {/* Gain Weight Button */}
        <button 
          onClick={() => handleSelect("gain")}
          className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl transition-all duration-300 overflow-hidden
            ${selectedGoal === "gain" ? 'bg-gradient-to-br from-green-500 to-green-600 text-white' : 'bg-green-50 hover:bg-green-100 text-green-600'}
            border-2 ${selectedGoal === "gain" ? 'border-green-500' : 'border-green-200'} hover:shadow-xl`}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-300 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-300 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
            <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-green-300 to-transparent transform -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>
            <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-transparent via-green-300 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000"></div>
          </div>
          
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 
            ${selectedGoal === "gain" ? 'bg-white text-green-500' : 'bg-green-100 text-green-500'}`}>
            <ArrowUp size={32} className="animate-pulse-soft" />
          </div>
          <h3 className="text-xl font-bold">Gain Weight</h3>
          <p className="mt-2 text-sm opacity-80 text-center">Calorie surplus diet to build muscle mass</p>
        </button>

        {/* Maintain Weight Button */}
        <button 
          onClick={() => handleSelect("maintain")}
          className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl transition-all duration-300 overflow-hidden
            ${selectedGoal === "maintain" ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' : 'bg-blue-50 hover:bg-blue-100 text-blue-600'}
            border-2 ${selectedGoal === "maintain" ? 'border-blue-500' : 'border-blue-200'} hover:shadow-xl`}
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
            <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-blue-300 to-transparent transform -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>
            <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-transparent via-blue-300 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000"></div>
          </div>
          
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 
            ${selectedGoal === "maintain" ? 'bg-white text-blue-500' : 'bg-blue-100 text-blue-500'}`}>
            <Minus size={32} className="animate-pulse-soft" />
          </div>
          <h3 className="text-xl font-bold">Maintain Weight</h3>
          <p className="mt-2 text-sm opacity-80 text-center">Balanced diet to sustain current weight</p>
        </button>
      </div>
    </div>
  );
};

export default FitnessGoalSelection;
