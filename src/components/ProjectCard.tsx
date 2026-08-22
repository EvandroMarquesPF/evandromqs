import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="project-card" onClick={() => onSelect(project)}>
      <span className="card-tagline">{project.tagline}</span>
      <h3 className="card-name">{project.name}</h3>
      <p className="card-description">{project.description}</p>

      <div className="card-tech">
        {project.technologies.slice(0, 3).map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="card-footer-info">
        <div className="card-status">
          <span className={`status-dot ${project.status === 'active' ? 'active' : 'dev'}`} />
          <span>{project.status === 'active' ? 'Ativo' : 'Em Desenvolvimento'}</span>
        </div>

        <div className="card-arrow">
          <span>Detalhes</span>
          <ArrowUpRight size={14} />
        </div>
      </div>
    </div>
  );
};
