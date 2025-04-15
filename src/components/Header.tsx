
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
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-fitness-green via-fitness-blue to-fitness-orange rounded-lg flex items-center justify-center relative overflow-hidden">
              <span className="text-white font-bold text-lg z-10">FF</span>
              <Zap size={24} className="text-white/30 absolute -bottom-1 -right-1 transform rotate-12" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-fitness-green via-fitness-blue to-fitness-orange bg-clip-text text-transparent">
              FitInfinityFuel AI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-fitness-green transition-colors">Home</Link>
            <Link to="/diet-plan" className="text-gray-700 hover:text-fitness-green transition-colors">My Diet Plan</Link>
            <Link to="/goals" className="text-gray-700 hover:text-fitness-green transition-colors">Fitness Goals</Link>
            <Link to="/recipes" className="text-gray-700 hover:text-fitness-green transition-colors">Recipes</Link>
            <Link to="/progress" className="text-gray-700 hover:text-fitness-green transition-colors">Progress</Link>
            <Link to="/settings" className="text-gray-700 hover:text-fitness-green transition-colors">Settings</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-fitness-green transition-colors py-2">Home</Link>
              <Link to="/diet-plan" className="text-gray-700 hover:text-fitness-green transition-colors py-2">My Diet Plan</Link>
              <Link to="/goals" className="text-gray-700 hover:text-fitness-green transition-colors py-2">Fitness Goals</Link>
              <Link to="/recipes" className="text-gray-700 hover:text-fitness-green transition-colors py-2">Recipes</Link>
              <Link to="/progress" className="text-gray-700 hover:text-fitness-green transition-colors py-2">Progress</Link>
              <Link to="/settings" className="text-gray-700 hover:text-fitness-green transition-colors py-2">Settings</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
