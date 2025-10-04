document.addEventListener("DOMContentLoaded", function() {
  const yearEl = document.getElementById("year");
  yearEl.textContent = new Date().getFullYear();
});
