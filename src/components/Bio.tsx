import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Bio = () => {
  return (
    <section id="bio" className="py-32 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="relative fade-in">
            <img
              src="./profile-pic.png"
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary-200 flex-shrink-0"
            />
            <span className="absolute bottom-5 right-5 text-4xl">👋</span>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-primary-400">
              Brahim djarallah
            </h1>
            <h2 className="text-2xl md:text-4xl text-[var(--foreground)] opacity-80 mb-4">
              Ingénieur DevOps & Backend
            </h2>
            <p className="text-lg md:text-xl text-[var(--foreground)] opacity-70 mb-6 leading-relaxed">
              5 ans d'expérience en DevOps et développement Backend
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="https://github.com/DjarallahBrahim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-[var(--card)] hover:bg-[var(--card)]/80 text-[var(--card-foreground)] rounded-full border border-primary-400/20 shadow-lg hover:shadow-primary-400/20 transition-all duration-300 group"
              >
                <Github 
                  size={20} 
                  className="text-primary-400 group-hover:rotate-12 transition-transform duration-300" 
                />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/djarallah-brahim/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-[var(--card)] hover:bg-[var(--card)]/80 text-[var(--card-foreground)] rounded-full border border-primary-400/20 shadow-lg hover:shadow-primary-400/20 transition-all duration-300 group"
              >
                <Linkedin 
                  size={20} 
                  className="text-primary-400 group-hover:rotate-12 transition-transform duration-300" 
                />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:djarallah.brahim@gmail.com"
                className="flex items-center gap-2 px-6 py-2.5 bg-[var(--card)] hover:bg-[var(--card)]/80 text-[var(--card-foreground)] rounded-full border border-primary-400/20 shadow-lg hover:shadow-primary-400/20 transition-all duration-300 group"
              >
                <Mail 
                  size={20} 
                  className="text-primary-400 group-hover:rotate-12 transition-transform duration-300" 
                />
                <span className="font-medium">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;