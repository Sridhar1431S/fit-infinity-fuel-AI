
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import { Moon, Sun, Languages, Type, Save } from "lucide-react";

// Theme types
type Theme = "light" | "dark";

// Language types
type Language = "en" | "es" | "fr";

// Settings interface
interface UserSettings {
  theme: Theme;
  fontSize: number; // 1 = small, 2 = medium, 3 = large
  language: Language;
}

// Default settings
const defaultSettings: UserSettings = {
  theme: "light",
  fontSize: 2,
  language: "en",
};

const Settings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [saved, setSaved] = useState(false);

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("userSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Apply theme when settings change
  useEffect(() => {
    // Apply dark mode
    if (settings.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Apply font size
    const htmlElement = document.documentElement;
    if (settings.fontSize === 1) {
      htmlElement.style.fontSize = "0.9rem";
    } else if (settings.fontSize === 2) {
      htmlElement.style.fontSize = "1rem";
    } else {
      htmlElement.style.fontSize = "1.1rem";
    }
  }, [settings]);

  const handleThemeToggle = (checked: boolean) => {
    setSettings((prev) => ({
      ...prev,
      theme: checked ? "dark" : "light",
    }));
    setSaved(false);
  };

  const handleFontSizeChange = (value: number[]) => {
    setSettings((prev) => ({
      ...prev,
      fontSize: value[0],
    }));
    setSaved(false);
  };

  const handleLanguageChange = (value: string) => {
    setSettings((prev) => ({
      ...prev,
      language: value as Language,
    }));
    setSaved(false);
  };

  const saveSettings = () => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
    setSaved(true);
    toast({
      title: "Settings saved",
      description: "Your preferences have been saved successfully",
    });
  };

  // Generate font size label
  const getFontSizeLabel = () => {
    switch (settings.fontSize) {
      case 1:
        return "Small";
      case 2:
        return "Medium";
      case 3:
        return "Large";
      default:
        return "Medium";
    }
  };

  // Header offset for fixed header
  const headerOffset = "mt-24"; // Add margin to account for fixed header

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col transition-colors duration-300">
      <Header />
      <main className={`flex-1 container mx-auto py-8 px-4 ${headerOffset}`}>
        <div className="max-w-2xl mx-auto space-y-12">
          <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-fitness-green via-fitness-blue to-fitness-orange bg-clip-text text-transparent">
            Settings
          </h1>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-lg space-y-8 border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl animate-fade-in relative overflow-hidden glow-card">
            {/* Theme Settings */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Sun className="h-5 w-5 text-fitness-orange" />
                Theme Preferences
              </h2>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Switch between light and dark theme
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4" />
                  <Switch 
                    checked={settings.theme === "dark"} 
                    onCheckedChange={handleThemeToggle}
                  />
                  <Moon className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Font Size Settings */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Type className="h-5 w-5 text-fitness-green" />
                Font Size
              </h2>
              <div className="space-y-4">
                <div className="space-y-0.5">
                  <Label>Adjust Text Size</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Choose your preferred text size
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Small</span>
                    <span className="text-sm font-medium">{getFontSizeLabel()}</span>
                    <span className="text-sm">Large</span>
                  </div>
                  <Slider
                    value={[settings.fontSize]}
                    min={1}
                    max={3}
                    step={1}
                    onValueChange={handleFontSizeChange}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Language Settings */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Languages className="h-5 w-5 text-fitness-blue" />
                Language
              </h2>
              <RadioGroup 
                value={settings.language} 
                onValueChange={handleLanguageChange} 
                className="gap-4"
              >
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

            {/* Save Button */}
            <div className="pt-4 flex justify-end">
              <Button 
                onClick={saveSettings}
                className="bg-gradient-to-r from-fitness-green to-fitness-blue hover:from-fitness-green/90 hover:to-fitness-blue/90 text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <Save className="mr-2 h-4 w-4" />
                {saved ? "Saved" : "Save Settings"}
              </Button>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-fitness-green/10 to-fitness-blue/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-fitness-orange/10 to-fitness-blue/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
