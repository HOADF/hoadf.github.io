document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("portfolio");
  const yearEl = document.getElementById("year");
  yearEl.textContent = new Date().getFullYear();

  try {
    const response = await fetch("projects.json");
    const projects = await response.json();

    projects.forEach(proj => {
      const card = document.createElement("section");
      card.className = "project-card";
      card.style.background = proj.backgroundImage 
        ? `${proj.backgroundImage}, linear-gradient(135deg, ${proj.colors[0]}, ${proj.colors[1]})`
        : `linear-gradient(135deg, ${proj.colors[0]}, ${proj.colors[1]})`;

      card.innerHTML = `
        <img src="${proj.preview}" alt="${proj.title} превью">
        <h2>${proj.title}</h2>
        <p>${proj.description}</p>
        <div class="buttons">
          <a href="${proj.demo}" target="_blank">Посмотреть демо</a>
          <a href="${proj.code}" target="_blank">Исходный код</a>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error("Ошибка загрузки projects.json:", err);
  }
});
