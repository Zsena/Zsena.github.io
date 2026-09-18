(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const savedTheme = localStorage.getItem("zsena-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    root.dataset.theme = savedTheme;
  }

  toggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("zsena-theme", next);
  });
})();
