import * as React from "react";
import { selectedProjects } from "./portfolioData";

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
  const cardClass = project.artwork
    ? "project-card"
    : "project-card project-card--text";

  return (
    <article className={cardClass}>
      {project.artwork ? (
        <figure className="project-card-artwork">
          <img src={project.artwork} alt={project.artworkAlt} />
        </figure>
      ) : null}
      <p className="project-status">{project.status}</p>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ProjectLink project={project} />
    </article>
  );
}

export default function SelectedWorkSection() {
  const illustratedProjects = selectedProjects.filter(
    (project) => project.artwork
  );
  const textProjects = selectedProjects.filter((project) => !project.artwork);

  return (
    <section id="work" className="selected-work-section" aria-labelledby="work-heading">
      <div className="selected-work-heading">
        <p className="section-kicker">Selected projects beyond the studio</p>
        <h2 id="work-heading">Ideas, products, and experiences.</h2>
        <span aria-hidden="true" />
      </div>

      <div className="project-card-grid project-card-grid--illustrated">
        {illustratedProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <div className="project-card-grid project-card-grid--text">
        {textProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
