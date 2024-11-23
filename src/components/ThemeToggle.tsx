import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full bg-[var(--card)] transition-colors duration-300 focus:outline-none border border-[var(--foreground)]/10"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-8 bg-[#1a1a1a]' : 'translate-x-0 bg-white'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-4 h-4 text-white" />
        ) : (
          <Sun className="w-4 h-4 text-yellow-500" />
        )}
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-between px-2">
        <span className={`text-xs ${theme === 'dark' ? 'opacity-0' : 'opacity-40'}`}>☀️</span>
        <span className={`text-xs ${theme === 'dark' ? 'opacity-40' : 'opacity-0'}`}>🌙</span>
      </div> */}
    </button>
  );
}