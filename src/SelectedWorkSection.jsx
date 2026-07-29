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

function ProjectCard({ project }) {
  const artworkClass =
    project.name === "Windows Whisper Client"
      ? "project-card-artwork project-card-artwork--icon"
      : "project-card-artwork";

  return (
    <article className="project-card">
      <figure className={artworkClass}>
        <img src={project.artwork} alt={project.artworkAlt} />
      </figure>
      <p className="project-status">{project.status}</p>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ProjectLink project={project} />
    </article>
  );
}

export default function SelectedWorkSection() {
  return (
    <section id="work" className="selected-work-section" aria-labelledby="work-heading">
      <div className="selected-work-heading">
        <p className="section-kicker">Selected projects beyond the studio</p>
        <h2 id="work-heading">Ideas, products, and experiences.</h2>
        <span aria-hidden="true" />
      </div>

      <div className="project-card-grid">
        {selectedProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
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
