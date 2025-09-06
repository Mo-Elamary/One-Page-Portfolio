import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const skillList = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git"
];

const projects = [
  {
    id: 1,
    title: "Portfolio Site",
    img: "https://via.placeholder.com/600x350?text=Project+1",
    desc: "Single-page portfolio built with React and responsive CSS.",
    github: "#"
  },
  {
    id: 2,
    title: "To-do App",
    img: "https://via.placeholder.com/600x350?text=Project+2",
    desc: "A simple to-do app demonstrating component state and localStorage.",
    github: "#"
  },
  {
    id: 3,
    title: "Data Visualizer",
    img: "https://via.placeholder.com/600x350?text=Project+3",
    desc: "Charts and filters to explore datasets (sample project).",
    github: "#"
  }
];

export default function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <section id="about" className="section">
          <About
             name="Mohamed Elamary"
             role="Full-Stack Developer"
             bio="Passionate developer specializing in React, Node.js, and AWS. I love creating clean, responsive web applications."
          />

        </section>

        <section id="skills" className="section">
          <Skills skills={skillList} />
        </section>

        <section id="projects" className="section">
          <Projects projects={projects} />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name — Built with React + Vite</p>
      </footer>
    </>
  );
}
