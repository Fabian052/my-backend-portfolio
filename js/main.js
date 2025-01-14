// Datos de habilidades y proyectos
const skills = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "API RESTful",
  "Docker",
];

const projects = [
  {
    name: "API de Gestión de Usuarios",
    description: "Una API RESTful construida con Node.js, Express y MongoDB.",
    link: "https://github.com/tuusuario/api-gestion-usuarios",
  },
  {
    name: "Sistema de Autenticación",
    description: "Servicio de autenticación con JWT y OAuth 2.0.",
    link: "https://github.com/tuusuario/sistema-autenticacion",
  },
];

// Función que carga las habilidades
function loadSkills() {
  const skillsList = document.getElementById("skills-list");

  // const skillsDuplicate = [...skills, ...skills];
  // Uso las habilidades para un efecto de animación
  skills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

// Con esta función se cargan los proyectos
function loadProjects() {
  const projectsContainer = document.getElementById("projects-container");
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">Ver en GitHub</a>
      `;
    projectsContainer.appendChild(projectDiv);
  });
}

// Sección de código para inicializar el contenido
document.addEventListener("DOMContentLoaded", () => {
  loadSkills();
  loadProjects();
});
