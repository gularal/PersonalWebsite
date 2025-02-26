import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "NASA",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    image: "src/assets/nasa.jpg", 
    tags: ["react", "redux", "axios"],
    github: "#",
    viewSite: "#",
  },
  {
    title: "APOLLO-11",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    image: "src/assets/apollo.jpg", 
    tags: ["react", "redux", "axios"],
    github: "#",
    viewSite: "#",
  },
  {
    title: "HAMİLTON TECNOLOGY",
    description:
      "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    image: "src/assets/hmltn.png", 
    tags: ["react", "redux", "axios"],
    github: "#",
    viewSite: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} className="link">Github</a>
              <a href={project.viewSite} className="link">View Site</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
