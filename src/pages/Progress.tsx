
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { toast } from '@/components/ui/use-toast';
import { Save, TrendingUp } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'fitness-progress-data';

const Progress = () => {
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');
  const [progressData, setProgressData] = useState(() => {
    // Try to load saved data from localStorage
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch (e) {
        console.error("Failed to parse saved progress data", e);
      }
    }
    
    // Default data if nothing saved
    return [
      { date: '2024-01', weight: 75 },
      { date: '2024-02', weight: 73 },
      { date: '2024-03', weight: 71 },
      { date: '2024-04', weight: 70 },
    ];
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progressData));
  }, [progressData]);

  const handleSaveProgress = () => {
    if (!weight || !date) {
      toast({
        title: "Missing Information",
        description: "Please enter both weight and date to save your progress.",
        variant: "destructive",
      });
      return;
    }

    // Format date to match chart format
    const formattedDate = date.substring(0, 7); // Get YYYY-MM format
    
    // Check if we're updating an existing entry
    const existingIndex = progressData.findIndex(entry => entry.date === formattedDate);
    let newProgressData;
    
    if (existingIndex >= 0) {
      // Update existing entry
      newProgressData = [...progressData];
      newProgressData[existingIndex] = { date: formattedDate, weight: parseFloat(weight) };
      
      toast({
        title: "Progress Updated",
        description: `Your weight for ${formattedDate} has been updated to ${weight}kg.`,
      });
    } else {
      // Add new progress data
      newProgressData = [
        ...progressData,
        { date: formattedDate, weight: parseFloat(weight) }
      ].sort((a, b) => a.date.localeCompare(b.date)); // Sort by date
      
      toast({
        title: "Progress Saved",
        description: `Your weight of ${weight}kg on ${formattedDate} has been recorded.`,
      });
    }
    
    setProgressData(newProgressData);
    
    // Clear form
    setWeight('');
    setDate('');
  };

  const handleExportData = () => {
    const dataStr = JSON.stringify(progressData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'fitness-progress-data.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    toast({
      title: "Data Exported",
      description: "Your progress data has been exported successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fitness-green/5 via-fitness-blue/5 to-fitness-orange/5 animate-gradient-shift"></div>
        <div className="relative z-10 container mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Track Your Progress</h1>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle>Update Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Current Weight (kg)</label>
                    <Input 
                      type="number" 
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="Enter your current weight"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Date</label>
                    <Input 
                      type="date" 
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={handleSaveProgress}
                    className="w-full bg-gradient-to-r from-fitness-green to-fitness-blue text-white flex items-center justify-center gap-2">
                    <Save className="h-4 w-4" /> Save Progress
                  </Button>
                  
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      onClick={handleExportData}
                      className="w-full"
                    >
                      <TrendingUp className="h-4 w-4 mr-2" /> Export Progress Data
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Weight Progress</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="weight" 
                      stroke="#16a34a" 
                      strokeWidth={2}
                      dot={{ fill: '#16a34a' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Progress;
