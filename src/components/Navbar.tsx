import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo" onClick={handleLinkClick}>
        <span className="nav-logo-dot" />
        EvandroMqs
      </a>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li><a href="#hero">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      {/* Desktop CTA */}
      <div className="nav-actions">
        <a
          href="https://github.com/EvandroMarquesPF"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          <GithubIcon size={15} />
          <span>GitHub</span>
          <ArrowUpRight size={14} />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className={`nav-mobile-toggle ${isMobileOpen ? 'open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Abrir menu de navegação"
          aria-expanded={isMobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`nav-mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <a href="#hero" onClick={handleLinkClick}>
          <span>Início</span>
          <span>→</span>
        </a>
        <a href="#sobre" onClick={handleLinkClick}>
          <span>Sobre & Trajetória</span>
          <span>→</span>
        </a>
        <a href="#projetos" onClick={handleLinkClick}>
          <span>Projetos & Portfólio</span>
          <span>→</span>
        </a>
        <a href="#contato" onClick={handleLinkClick}>
          <span>Contato</span>
          <span>→</span>
        </a>
        <a
          href="https://github.com/EvandroMarquesPF"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          style={{ color: 'var(--neon-cyan)', marginTop: '1rem' }}
        >
          <span>GitHub Profile</span>
          <ArrowUpRight size={20} />
        </a>
      </div>
    </nav>
  );
};
