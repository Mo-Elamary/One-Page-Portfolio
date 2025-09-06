import React from "react";

export default function Projects({ projects = [] }) {
  return (
    <div className="container">
      <h3>Projects</h3>
      <p className="muted">Some projects I worked on. Click "View" to go to repo or live demo.</p>

      <div className="projects-grid">
        {projects.map((p) => (
          <article className="project-card" key={p.id}>
            <div className="project-media">
              <img src={p.img} alt={p.title} />
            </div>
            <div className="project-body">
              <h4>{p.title}</h4>
              <p className="muted small">{p.desc}</p>
              <div className="project-actions">
                <a className="btn small" href={p.github} onClick={(e)=>p.github === "#" && e.preventDefault()}>View repo</a>
                <a className="btn small ghost" href="#" onClick={(e)=>e.preventDefault()}>Live</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
