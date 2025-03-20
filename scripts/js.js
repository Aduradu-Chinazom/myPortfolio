if (!localStorage.getItem("projects")) {
  const predefinedProjects = [
      {
        id: "1",
        name: "Vuna Cares",
        githublink: "https://aduradu-chinazom.github.io/vuna-cares/",
        image: "image/blockB.jpeg",
      },
      {
        id: "2",
        name: "Azkoe",
        githublink: "https://aduradu-chinazom.github.io/azkoe/",
        image: "image/oil_site.jpg",
      },
      {
          id: "3",
          name: "Easy Store",
          githublink: "https://aduradu-chinazom.github.io/ECommerce/",
          image: "image/qwer.jpg",
      },
      {
        id: "4",
        name: "Task Manager",
        githublink: "https://aduradu-chinazom.github.io/ECommerce/",
        image: "image/landing_1.jpg",
    },
  ];

  localStorage.setItem("projects", JSON.stringify(predefinedProjects));
}

function renderProjects() {
  const projectsContainer = document.querySelector(".projects-container");
  projectsContainer.innerHTML = "";

  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  projects.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.className = "project hidden"; 

      projectItem.innerHTML = `
          <img src="${project.image}" alt="${project.name}">
          <div class="project-info">
              <h2>${project.name}</h2>
              <a href="${project.githublink}" target="_blank">View Project</a>
          </div>
      `;

      projectsContainer.appendChild(projectItem);
  });

  applyScrollAnimation();
}

function applyScrollAnimation() {
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.2 });

  hiddenElements.forEach(element => observer.observe(element));
}

renderProjects();
