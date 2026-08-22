import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app-root">
      <CustomCursor />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
