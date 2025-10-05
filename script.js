document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("portfolio");
  const yearEl = document.getElementById("year");
  yearEl.textContent = new Date().getFullYear();

  try {
    const response = await fetch("projects.json");
    const projects = await response.json();

    projects.forEach(proj => {
      const section = document.createElement("section");
      section.className = "project";

      // фон карточки
      if (proj.background) {
        section.style.backgroundImage = `url(${proj.background})`;
      }

      section.innerHTML = `
        <img src="${proj.preview}" alt="${proj.title} превью">
        <h2>${proj.title}</h2>
        <p>${proj.description}</p>
        <div class="buttons">
          <a href="${proj.demo}" target="_blank">Посмотреть демо</a>
          <a href="${proj.code}" target="_blank">Исходный код</a>
        </div>
      `;

      // индивидуальный цвет кнопок
      const buttons = section.querySelectorAll(".buttons a");
      if (proj.colors && proj.colors.length > 0) {
        buttons.forEach(btn => {
          btn.style.backgroundColor = proj.colors[0];
        });
      }

      container.appendChild(section);
    });
  } catch (err) {
    console.error("Ошибка загрузки projects.json:", err);
  }
});
