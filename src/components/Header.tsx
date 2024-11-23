import React from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Bio', href: '#bio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[var(--foreground)]/10 bg-[var(--background)]/80">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="text-2xl font-bold text-primary-400">Portfolio</a>
            <ThemeToggle />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[var(--foreground)]/80 hover:text-primary-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-[var(--foreground)]/80 hover:text-primary-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-[var(--foreground)]/80 hover:text-primary-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              className="text-[var(--foreground)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--foreground)]/10 py-4">
            <div className="flex flex-col items-center gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[var(--foreground)]/80 hover:text-primary-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--foreground)]/80 hover:text-primary-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--foreground)]/80 hover:text-primary-400 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;