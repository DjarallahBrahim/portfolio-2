import React from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import { ChatWidget } from './components/ChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <main>
        <Bio />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
      </main>
      <ChatWidget />
    </div>
  );
}

export default App;