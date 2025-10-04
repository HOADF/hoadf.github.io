document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("portfolio");
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  try {
    const response = await fetch("projects.json");
    const projects = await response.json();

    projects.forEach(project => {
      const section = document.createElement("section");
      section.className = "project";
      section.style.background = `linear-gradient(135deg, ${project.colors[0]}, ${project.colors[1]})`;

      section.innerHTML = `
        <img src="${project.preview}" alt="${project.title}">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="buttons">
          <a href="${project.demo}" target="_blank">Посмотреть демо</a>
          <a href="${project.code}" target="_blank">Исходный код</a>
        </div>
      `;

      container.appendChild(section);
    });
  } catch (err) {
    console.error("Ошибка загрузки projects.json:", err);
  }
});
