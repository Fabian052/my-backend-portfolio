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
    name: "Aplicación web para reserva de hoteles",
    description:
      "Una API RESTful construida con Node.js y Express para la reserva de hoteles. La aplicación web fue construida con React.js",
    link: "https://hotels-react-app.netlify.app",
  },
  {
    name: "API de películas",
    description:
      "API útil para la búsqueda películas(Géneros, actores...), construida con Node.js y Express.",
    link: "https://github.com/Fabian052/movies-app",
  },
  {
    name: "Carrito de compras",
    description:
      "Usando js vanilla y local storage. para el inventario de productos.",
    link: "https://my-first-cart.netlify.app/",
  },
  {
    name: "Landing page para empresa de fachadas",
    description:
      "Una landing page para una empresa de fachadas, construida con HTML y CSS.",
    link: "https://fachadasjr2sas.netlify.app",
  },
];

// Función que carga las habilidades
function loadSkills() {
  const skillsList = document.getElementById("skills-list");

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
        <a href="${project.link}" target="_blank">Ir al sitio</a>
      `;
    projectsContainer.appendChild(projectDiv);
  });
}

// Sección de código para inicializar el contenido
document.addEventListener("DOMContentLoaded", () => {
  loadSkills();
  loadProjects();
});
