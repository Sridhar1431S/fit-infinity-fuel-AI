
import React from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Header from "@/components/Header";
import { Moon, Sun, Languages } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto space-y-12">
          <h1 className="text-3xl font-bold text-center mb-8">Settings</h1>

          <div className="bg-white rounded-xl p-6 shadow-lg space-y-6">
            {/* Theme Settings */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Sun className="h-5 w-5 text-fitness-orange" />
                Theme Preferences
              </h2>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-gray-500">
                    Switch between light and dark theme
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4" />
                  <Switch />
                  <Moon className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Language Settings */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Languages className="h-5 w-5 text-fitness-blue" />
                Language
              </h2>
              <RadioGroup defaultValue="en" className="gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="en" id="en" />
                  <Label htmlFor="en">English</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="es" id="es" />
                  <Label htmlFor="es">Español</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fr" id="fr" />
                  <Label htmlFor="fr">Français</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
