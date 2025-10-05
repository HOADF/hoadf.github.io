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

      // Фон карточки
      if (proj.background) {
        if (proj.background.startsWith("http") || proj.background.startsWith("images/")) {
          section.style.backgroundImage = `url(${proj.background})`;
          section.style.backgroundSize = "cover";
          section.style.backgroundPosition = "center";
        } else {
          section.style.background = proj.background;
        }
      } else if (proj.colors && proj.colors.length > 1) {
        section.style.background = `linear-gradient(135deg, ${proj.colors[0]}, ${proj.colors[1]})`;
      }
      const themes = ["light", "dark", "creamy"];
let currentThemeIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme);
  currentThemeIndex = themes.indexOf(savedTheme);

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.remove(...themes);
      currentThemeIndex = (currentThemeIndex + 1) % themes.length;
      const newTheme = themes[currentThemeIndex];
      document.body.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
      toggle.textContent = newTheme === "light" ? "🌤 Светлая" :
                           newTheme === "dark" ? "🌙 Тёмная" : "🕯 Кремовая";

      section.innerHTML = `
        <img src="${proj.preview}" alt="${proj.title} превью">
        <h2>${proj.title}</h2>
        <p>${proj.description}</p>
        <div class="buttons">
          <a href="${proj.demo}" target="_blank" style="background-color:${proj.colors ? proj.colors[0] : '#3498db'};">Посмотреть демо</a>
          <a href="${proj.code}" target="_blank" style="background-color:${proj.colors ? proj.colors[0] : '#3498db'};">Исходный код</a>
        </div>
      `;

      container.appendChild(section);
    });
  } catch (err) {
    console.error("Ошибка загрузки projects.json:", err);
  }
});
