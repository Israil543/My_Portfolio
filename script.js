const menu = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");

menu?.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menu.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => {
    links.classList.remove("open");
    menu?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: .08});

document.querySelectorAll(".section, .project, .experience-card, .skill-card, .cert").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
