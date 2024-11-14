import React from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <main>
        <Bio />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
      </main>
    </div>
  );
}

export default App;
