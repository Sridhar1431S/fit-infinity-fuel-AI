
import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-fitness-green via-fitness-blue to-fitness-orange rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg shadow-fitness-green/20 animate-pulse-soft">
              <span className="text-white font-bold text-lg z-10">FF</span>
              <Zap size={24} className="text-white/30 absolute -bottom-1 -right-1 transform rotate-12" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-fitness-green via-fitness-blue to-fitness-orange bg-clip-text text-transparent">
              FitInfinityFuel AI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-fitness-green dark:hover:text-fitness-green-light transition-colors">Home</Link>
            <Link to="/diet-plan" className="text-gray-700 dark:text-gray-300 hover:text-fitness-green dark:hover:text-fitness-green-light transition-colors">My Diet Plan</Link>
            <Link to="/goals" className="text-gray-700 dark:text-gray-300 hover:text-fitness-green dark:hover:text-fitness-green-light transition-colors">Fitness Goals</Link>
            <Link to="/recipes" className="text-gray-700 dark:text-gray-300 hover:text-fitness-green dark:hover:text-fitness-green-light transition-colors">Recipes</Link>
            <Link to="/progress" className="text-gray-700 dark:text-gray-300 hover:text-fitness-green dark:hover:text-fitness-green-light transition-colors">Progress</Link>
            <Link to="/settings" className="text-gray-700 dark:text-gray-300 hover:text-fitness-green dark:hover:text-fitness-green-light transition-colors">Settings</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-fitness-green dark:hover:text-fitness-green-light"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-fitness-green dark:hover:text-fitness-green-light transition-colors py-2">Home</Link>
              <Link to="/diet-plan" className="text-gray-700 dark:text-gray-300 hover:text-fitness-green dark:hover:text-fitness-green-light transition-colors py-2">My Diet Plan</Link>
              <Link to="/goals" className="text-gray-700 dark:text-gray-300 hover:text-fitness-green dark:hover:text-fitness-green-light transition-colors py-2">Fitness Goals</Link>
              <Link to="/recipes" className="text-gray-700 dark:text-gray-300 hover:text-fitness-green dark:hover:text-fitness-green-light transition-colors py-2">Recipes</Link>
              <Link to="/progress" className="text-gray-700 dark:text-gray-300 hover:text-fitness-green dark:hover:text-fitness-green-light transition-colors py-2">Progress</Link>
              <Link to="/settings" className="text-gray-700 dark:text-gray-300 hover:text-fitness-green dark:hover:text-fitness-green-light transition-colors py-2">Settings</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
