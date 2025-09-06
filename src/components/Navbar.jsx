import React, { useState } from "react";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleNavClick(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  }

  return (
    <header className="nav-header">
      <nav className="nav container">
        <div className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} role="button" tabIndex={0}>
          <strong>MyPortfolio</strong>
        </div>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          ☰
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <button className="link-btn" onClick={() => handleNavClick(l.id)}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
