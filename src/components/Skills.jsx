import React from "react";

export default function Skills({ skills = [] }) {
  return (
    <div className="container">
      <h3>Skills</h3>
      <p className="muted">A selection of tools and technologies I use.</p>

      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-card" key={s}>
            <div className="skill-icon" aria-hidden>✓</div>
            <div className="skill-name">{s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
