import React from 'react';
import { Sparkles } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Hero: React.FC = () => {
  return (
    <section id="hero">
      {/* Background Cyber Effects */}
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-scanline" />

      <div className="hero-content">
        <div className="hero-brand-badge">
          <img
            src="/favicon.svg"
            alt="EvandroMqs Logo"
            className="hero-brand-logo"
          />
        </div>

        <h1 id="hero-title">EvandroMqs</h1>
        
        <h2 className="hero-subtitle">
          Ideias que viram tecnologia
        </h2>

        <p className="hero-description">
          Sou criador de aplicativos, sistemas e experiências digitais inovadoras. Transformo ideias em produtos funcionais combinando tecnologia moderna, automação e inteligência.
        </p>

        <div className="hero-cta-group">
          <a href="#projetos" className="btn-primary">
            <Sparkles size={16} />
            <span>Ver Projetos</span>
          </a>
          <a
            href="https://github.com/EvandroMarquesPF"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <GithubIcon size={16} />
            <span>GitHub Profile</span>
          </a>
        </div>

        <div className="hero-tech-strip">
          <span className="hero-tech-item">Flutter</span>
          <span className="hero-tech-item">Android Nativo</span>
          <span className="hero-tech-item">React & TypeScript</span>
          <span className="hero-tech-item">Node.js</span>
          <span className="hero-tech-item">Python</span>
          <span className="hero-tech-item">Three.js</span>
          <span className="hero-tech-item">IA & Automação</span>
        </div>
      </div>
    </section>
  );
};
