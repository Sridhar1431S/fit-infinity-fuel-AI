
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
type Language = "en" | "es" | "fr" | "de";

// Font size types
type FontSize = 1 | 2 | 3;

// Settings interface
interface UserSettings {
  theme: Theme;
  fontSize: FontSize;
  language: Language;
}

// Default settings
const defaultSettings: UserSettings = {
  theme: "light",
  fontSize: 2,
  language: "en",
};

// Language labels
const languageLabels: Record<Language, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch"
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
      fontSize: value[0] as FontSize,
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
      className: "bg-fitness-green/10 border-fitness-green text-foreground"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col transition-colors duration-300">
      {/* Enhanced animated dumbbell background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Generate 30 animated dumbbells with varied positions and animations */}
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="dumbbell absolute text-gray-300 dark:text-gray-600"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3,
              transform: `scale(${0.5 + Math.random() * 1})`,
              animationDuration: `${5 + Math.random() * 7}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <div className="dumbbell-bar"></div>
          </div>
        ))}
        
        {/* Gradient orbs for additional visual interest */}
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-fitness-green/10 dark:bg-fitness-green/5 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-[30%] right-[20%] w-56 h-56 rounded-full bg-fitness-blue/10 dark:bg-fitness-blue/5 blur-3xl animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-[60%] right-[40%] w-72 h-72 rounded-full bg-fitness-orange/10 dark:bg-fitness-orange/5 blur-3xl animate-pulse-soft" style={{animationDelay: '0.8s'}}></div>
      </div>

      <Header />

      <main className="flex-1 container mx-auto py-8 px-4">
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
                  <Sun className="h-4 w-4 text-fitness-orange" />
                  <Switch 
                    checked={settings.theme === "dark"} 
                    onCheckedChange={handleThemeToggle}
                    className="data-[state=checked]:bg-fitness-blue"
                  />
                  <Moon className="h-4 w-4 text-fitness-blue" />
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
                className="gap-4 grid grid-cols-2"
              >
                {Object.entries(languageLabels).map(([code, label]) => (
                  <div key={code} className="flex items-center space-x-2 bg-white/50 dark:bg-gray-700/50 p-3 rounded-lg border border-gray-100 dark:border-gray-600 transition-all duration-200 hover:border-fitness-green dark:hover:border-fitness-green">
                    <RadioGroupItem value={code} id={code} className="text-fitness-green" />
                    <Label htmlFor={code} className="w-full cursor-pointer">{label}</Label>
                  </div>
                ))}
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
