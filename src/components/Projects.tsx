import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((proj) => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projetos">
      <div className="section-container">
        <span className="section-label">// projetos & criações</span>
        <h2 className="section-headline">Produtos e Soluções Digitais</h2>
        <p className="section-description">
          Cada projeto abaixo representa um desafio prático solucionado com foco em arquitetura limpa, alta performance e usabilidade.
        </p>

        {/* Categories Filter */}
        <div className="category-filters">
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            Todos ({projectsData.length})
          </button>
          <button
            className={`filter-btn ${activeCategory === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveCategory('mobile')}
          >
            Mobile (Flutter / Android)
          </button>
          <button
            className={`filter-btn ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('web')}
          >
            Web & Full-Stack
          </button>
          <button
            className={`filter-btn ${activeCategory === 'tools-ai' ? 'active' : ''}`}
            onClick={() => setActiveCategory('tools-ai')}
          >
            Ferramentas & IA
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
