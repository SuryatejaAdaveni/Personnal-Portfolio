// src/components/Projects.jsx
const projects = [
  // { id: 1, title: "Project One", desc: "Description of project one." },
  // { id: 2, title: "Project Two", desc: "Description of project two." },
  // { id: 3, title: "Project Three", desc: "Description of project three." },
];

export default function Projects() {
  return (
    <section id="projects" style={styles.projectsSection}>
      <h2>My Projects</h2>
      <div style={styles.projectGrid}>
        {projects.map(({ id, title, desc }) => (
          <div key={id} style={styles.projectCard} className="project-card">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  projectsSection: {
    padding: "2rem 1rem",
    textAlign: "center",
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "1.5rem",
    marginTop: "1rem",
  },
  projectCard: {
    backgroundColor: "#f4f4f4",
    padding: "1rem",
    borderRadius: "8px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  },
};
// import React, { useState } from "react";
// import "./Project.css";

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState("all");

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       desc: "A full-featured online store with shopping cart and payment processing.",
//       image:
//         "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
//       technologies: ["React", "Node.js", "MongoDB"],
//       category: "web",
//     },
//     {
//       id: 2,
//       title: "Task Management App",
//       desc: "A productivity application for organizing tasks and projects with team collaboration.",
//       image:
//         "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
//       technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
//       category: "mobile",
//     },
//     {
//       id: 3,
//       title: "Weather Dashboard",
//       desc: "Real-time weather information with forecasts and interactive maps.",
//       image:
//         "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
//       technologies: ["JavaScript", "API Integration", "CSS3"],
//       category: "web",
//     },
//     {
//       id: 4,
//       title: "Fitness Tracker",
//       desc: "Track workouts, nutrition, and progress with detailed analytics.",
//       image:
//         "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
//       technologies: ["React Native", "GraphQL", "Python"],
//       category: "mobile",
//     },
//     {
//       id: 5,
//       title: "Travel Blog",
//       desc: "A responsive blog platform with content management system for travel enthusiasts.",
//       image:
//         "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
//       technologies: ["WordPress", "PHP", "MySQL"],
//       category: "web",
//     },
//     {
//       id: 6,
//       title: "Recipe Finder",
//       desc: "Discover recipes based on ingredients you have with step-by-step instructions.",
//       image:
//         "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80",
//       technologies: ["React", "Redux", "Spoonacular API"],
//       category: "web",
//     },
//   ];

//   const filters = [
//     { id: "all", name: "All Projects" },
//     { id: "web", name: "Web Applications" },
//     { id: "mobile", name: "Mobile Apps" },
//   ];

//   const filteredProjects =
//     activeFilter === "all"
//       ? projects
//       : projects.filter((project) => project.category === activeFilter);

//   return (
//     <div className="projects-container">
//       <div className="projects-header">
//         <h2>My Projects</h2>
//         <p>
//           Here are some of my recent works. Filter by category to see specific
//           projects.
//         </p>

//         <div className="filter-buttons">
//           {filters.map((filter) => (
//             <button
//               key={filter.id}
//               className={`filter-btn ${
//                 activeFilter === filter.id ? "active" : ""
//               }`}
//               onClick={() => setActiveFilter(filter.id)}
//             >
//               {filter.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="projects-grid">
//         {filteredProjects.map((project) => (
//           <div key={project.id} className="project-card">
//             <div className="project-image">
//               <img src={project.image} alt={project.title} />
//               <div className="project-overlay">
//                 <div className="project-tech">
//                   {project.technologies.map((tech, index) => (
//                     <span key={index} className="tech-tag">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <button className="view-project-btn">View Project</button>
//               </div>
//             </div>

//             <div className="project-content">
//               <h3>{project.title}</h3>
//               <p>{project.desc}</p>
//               <div className="project-actions"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
