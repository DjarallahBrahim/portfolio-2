import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Bio = () => {
  return (
    <section id="bio" className="py-32 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src="./profile-pic.png"
            alt="Profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary-200 flex-shrink-0"
          />
          <div className="flex flex-col items-start text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-primary-200 text-transparent bg-clip-text">
              Brahim djarallah
            </h1>
            <h2 className="text-2xl md:text-4xl text-foreground/80 mb-4">
              Ingénieur DevOps & Backend
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 mb-6 leading-relaxed">
              5 ans d'expérience en DevOps et développement Backend
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="https://github.com/DjarallahBrahim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-foreground/10 text-foreground rounded-lg hover:bg-foreground/20 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/djarallah-brahim/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-foreground/10 text-foreground rounded-lg hover:bg-foreground/20 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a
                href="mailto:djarallah.brahim@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-foreground/10 text-foreground rounded-lg hover:bg-foreground/20 transition-colors"
              >
                <Mail size={20} />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
