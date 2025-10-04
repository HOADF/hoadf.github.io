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
      section.style.background = proj.background || "#333";

      section.innerHTML = `
        <img src="${proj.preview}" alt="${proj.name} превью">
        <h2>${proj.name}</h2>
        <p>${proj.desc}</p>
        <a href="${proj.url}" target="_blank">Посмотреть демо</a>
        <a href="${proj.repo}" target="_blank">Исходный код</a>
      `;
      container.appendChild(section);
    });
  } catch (err) {
    console.error("Ошибка загрузки projects.json:", err);
  }
});
