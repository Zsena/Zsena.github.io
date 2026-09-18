(() => {
  const root = document.documentElement;
  const toggle = document.querySelector(".theme-toggle");
  const year = document.getElementById("year");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (year) year.textContent = String(new Date().getFullYear());

  const setTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem("zsena-theme", theme);
    toggle?.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    if (toggle) toggle.textContent = theme === "dark" ? "☀" : "◐";
  };

  setTheme(localStorage.getItem("zsena-theme") || "light");
  toggle?.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

  const setMenu = (open) => {
    nav?.classList.toggle("is-open", open);
    menuToggle?.classList.toggle("is-open", open);
    menuToggle?.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  };
  menuToggle?.addEventListener("click", () => setMenu(!nav?.classList.contains("is-open")));
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

  const revealTargets = document.querySelectorAll(".section-grid, .value-card, .quote-panel, .stack-heading, .skill-card, .work-section .section-heading, .project-card, .experience-grid, .contact-grid");
  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.transitionDelay = String(Math.min((index % 4) * 70, 210)) + "ms";
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13 });
    revealTargets.forEach((element) => observer.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
  }
})();