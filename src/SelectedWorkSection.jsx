import * as React from "react";
import { additionalProjects, selectedProjects } from "./portfolioData";

function ProjectLink({ project }) {
  if (!project.href || !project.linkLabel) {
    return null;
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="editorial-link"
    >
      {project.linkLabel}
    </a>
  );
}

function TextProject({ project }) {
  return (
    <article className="text-project">
      <p className="project-status">{project.status}</p>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ProjectLink project={project} />
    </article>
  );
}

export default function SelectedWorkSection() {
  const [familyHistory, ...textProjects] = selectedProjects;

  return (
    <section id="work" className="selected-work-section" aria-labelledby="work-heading">
      <div className="selected-work-heading">
        <p className="section-kicker">Selected work beyond the studio</p>
        <h2 id="work-heading">Ideas, products, and experiences.</h2>
      </div>

      <article className="featured-project">
        <figure className="featured-project-image">
          <img src={familyHistory.artwork} alt={familyHistory.artworkAlt} />
        </figure>
        <div className="featured-project-copy">
          <p className="project-status">{familyHistory.status}</p>
          <h3>{familyHistory.name}</h3>
          <p>{familyHistory.description}</p>
          <ProjectLink project={familyHistory} />
        </div>
      </article>

      <div className="text-project-grid">
        {textProjects.map((project) => (
          <TextProject key={project.name} project={project} />
        ))}
      </div>

      <div className="additional-projects">
        <div>
          <p className="section-kicker">Additional projects</p>
          <h3>Small tools. Specific problems.</h3>
        </div>
        <div className="additional-project-list">
          {additionalProjects.map((project) => (
            <article key={project.name}>
              <div>
                <p className="project-status">{project.status}</p>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
              </div>
              <ProjectLink project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
