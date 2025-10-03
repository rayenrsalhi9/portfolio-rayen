import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/theme-context';
import { cn } from '../lib/utils';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-4 right-4 z-50",
        "p-2.5 sm:p-3 rounded-full",
        "bg-card border border-border",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-300 ease-in-out",
        "hover:scale-110 active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
        "backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-5 h-5 sm:w-6 sm:h-6">
        <Sun
          className={cn(
            "absolute inset-0 w-5 h-5 sm:w-6 sm:h-6",
            "transition-all duration-300 ease-in-out",
            "text-yellow-500 drop-shadow-sm",
            isDarkMode 
              ? "opacity-0 rotate-90 scale-0" 
              : "opacity-100 rotate-0 scale-100"
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 w-5 h-5 sm:w-6 sm:h-6",
            "transition-all duration-300 ease-in-out",
            "text-blue-400 drop-shadow-sm",
            isDarkMode 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 -rotate-90 scale-0"
          )}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;