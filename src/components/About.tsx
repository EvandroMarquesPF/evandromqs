import React from 'react';
import { skillsData, coreHighlights } from '../data/skills';
import { timelineData } from '../data/timeline';

export const About: React.FC = () => {
  return (
    <section id="sobre">
      <div className="section-container">
        <span className="section-label">// quem sou</span>

        {/* Highlights Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '4rem',
          }}
        >
          {coreHighlights.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--void-card)',
                border: '1px solid var(--void-line)',
                padding: '1.5rem',
                borderRadius: 'var(--r-md)',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  color: 'var(--neon-cyan)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: 'var(--ink-pure)',
                }}
              >
                {item.count}
              </div>
            </div>
          ))}
        </div>

        <div className="about-grid">
          {/* Bio & Skills */}
          <div className="about-text">
            <p>
              Sou <strong>desenvolvedor full-stack e mobile</strong> com forte foco em conceber produtos funcionais do zero e levá-los até a produção.
            </p>
            <p>
              Minha experiência abrange desde o ecossistema <em>Mobile</em> (Flutter e Android nativo) até aplicações <em>Web reativas</em> com React, Node.js e computação gráfica 3D (Three.js).
            </p>
            <p>
              Mais do que apenas escrever código, meu objetivo primordial é <em>resolver problemas reais</em> e transformar conceitos em ferramentas acessíveis e intuitivas para pessoas e empresas.
            </p>

            <span className="about-subtitle">Stack Técnico & Especialidades</span>
            <div className="about-tech-grid">
              {skillsData.map((skill) => (
                <div key={skill} className="tech-pill">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Timeline & Milestones */}
          <div>
            <span className="about-subtitle" style={{ marginTop: 0 }}>
              Jornada & Evolução
            </span>
            <div className="timeline">
              {timelineData.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-phase">{item.period} — {item.phase}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
