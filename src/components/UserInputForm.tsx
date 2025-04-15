
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface FormData {
  currentWeight: string;
  targetWeight: string;
  height: string;
  age: string;
  gender: string;
  activityLevel: string;
  fitnessGoal: "lose" | "gain" | "maintain";
}

interface UserInputFormProps {
  onSubmit: (data: FormData) => void;
}

export default function UserInputForm({ onSubmit }: UserInputFormProps) {
  const [formData, setFormData] = useState<FormData>({
    currentWeight: "",
    targetWeight: "",
    height: "",
    age: "",
    gender: "male",
    activityLevel: "moderate",
    fitnessGoal: "lose"
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-0 overflow-hidden">
      <div className="bg-gradient-to-r from-fitness-green to-fitness-blue p-1"></div>
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create Your Personalized Diet Plan</h2>
          <p className="text-gray-600">Complete the form below to get started</p>
          
          <div className="flex justify-between items-center my-6">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index + 1 === currentStep 
                    ? "bg-fitness-green text-white" 
                    : index + 1 < currentStep 
                      ? "bg-fitness-green/20 text-fitness-green" 
                      : "bg-gray-200 text-gray-500"
                }`}>
                  {index + 1}
                </div>
                {index < totalSteps - 1 && (
                  <div className={`h-1 w-16 md:w-24 ${
                    index + 1 < currentStep ? "bg-fitness-green" : "bg-gray-200"
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentWeight">Current Weight (kg)</Label>
                  <Input 
                    id="currentWeight"
                    type="number"
                    placeholder="e.g., 70"
                    value={formData.currentWeight}
                    onChange={(e) => updateFormData("currentWeight", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="targetWeight">Target Weight (kg)</Label>
                  <Input 
                    id="targetWeight"
                    type="number"
                    placeholder="e.g., 65"
                    value={formData.targetWeight}
                    onChange={(e) => updateFormData("targetWeight", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input 
                    id="height"
                    type="number"
                    placeholder="e.g., 175"
                    value={formData.height}
                    onChange={(e) => updateFormData("height", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input 
                    id="age"
                    type="number"
                    placeholder="e.g., 30"
                    value={formData.age}
                    onChange={(e) => updateFormData("age", e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <Label htmlFor="gender">Gender</Label>
                <Select 
                  value={formData.gender} 
                  onValueChange={(value) => updateFormData("gender", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="activityLevel">Activity Level</Label>
                <Select 
                  value={formData.activityLevel} 
                  onValueChange={(value) => updateFormData("activityLevel", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                    <SelectItem value="light">Light (light exercise 1-3 days/week)</SelectItem>
                    <SelectItem value="moderate">Moderate (moderate exercise 3-5 days/week)</SelectItem>
                    <SelectItem value="active">Active (hard exercise 6-7 days/week)</SelectItem>
                    <SelectItem value="veryActive">Very Active (physical job & hard exercise)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <Label htmlFor="fitnessGoal" className="block mb-2">Fitness Goal</Label>
                <RadioGroup 
                  value={formData.fitnessGoal} 
                  onValueChange={(value) => updateFormData("fitnessGoal", value as "lose" | "gain" | "maintain")}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className={`border-2 rounded-xl p-4 transition-all ${formData.fitnessGoal === "lose" ? "border-fitness-green bg-fitness-green/5" : "border-gray-200"}`}>
                    <RadioGroupItem value="lose" id="lose" className="sr-only" />
                    <Label htmlFor="lose" className="flex flex-col items-center cursor-pointer">
                      <div className="w-16 h-16 bg-fitness-green/10 rounded-full flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitness-green">
                          <path d="m18 15-6-6-6 6"/>
                        </svg>
                      </div>
                      <span className="font-medium">Lose Weight</span>
                    </Label>
                  </div>
                  
                  <div className={`border-2 rounded-xl p-4 transition-all ${formData.fitnessGoal === "gain" ? "border-fitness-blue bg-fitness-blue/5" : "border-gray-200"}`}>
                    <RadioGroupItem value="gain" id="gain" className="sr-only" />
                    <Label htmlFor="gain" className="flex flex-col items-center cursor-pointer">
                      <div className="w-16 h-16 bg-fitness-blue/10 rounded-full flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitness-blue">
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </div>
                      <span className="font-medium">Gain Weight</span>
                    </Label>
                  </div>
                  
                  <div className={`border-2 rounded-xl p-4 transition-all ${formData.fitnessGoal === "maintain" ? "border-fitness-orange bg-fitness-orange/5" : "border-gray-200"}`}>
                    <RadioGroupItem value="maintain" id="maintain" className="sr-only" />
                    <Label htmlFor="maintain" className="flex flex-col items-center cursor-pointer">
                      <div className="w-16 h-16 bg-fitness-orange/10 rounded-full flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fitness-orange">
                          <path d="M8 12h8"/>
                        </svg>
                      </div>
                      <span className="font-medium">Maintain Weight</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {currentStep > 1 ? (
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep}
                className="flex items-center gap-2"
              >
                <ArrowLeft size={16} /> Previous
              </Button>
            ) : <div></div>}
            
            {currentStep < totalSteps ? (
              <Button 
                type="button" 
                onClick={nextStep}
                className="bg-fitness-green hover:bg-fitness-green/90 flex items-center gap-2"
              >
                Next <ArrowRight size={16} />
              </Button>
            ) : (
              <Button 
                type="submit" 
                className="gradient-button"
              >
                Generate My Personalized Diet Plan
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
