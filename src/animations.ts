export const initAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
  );

  // العناصر اللي بتظهر لوحدها (ما عدا الهيدر والفوتر)
  const singleTargets = document.querySelectorAll(
    ".services-header, .projects-header, .about-grid, .contact-box"
  );

  singleTargets.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });

  // الكروت (بتظهر بتأخير متدرج وأبطأ)
  const staggerGroups = [
    ".service-item",
    ".project-showcase-card",
  ];

  staggerGroups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.classList.add("reveal");
      (el as HTMLElement).style.transitionDelay = `${index * 0.35}s`;
      observer.observe(el);
    });
  });

  // Parallax خفيف على الـ glows
  const glows = document.querySelectorAll(".hero-glow");
  if (glows.length) {
    let rafId = 0;
    window.addEventListener("mousemove", (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 15;
        const y = (e.clientY / window.innerHeight - 0.5) * 15;
        glows.forEach((g, i) => {
          const factor = i === 0 ? 1 : -1;
          (g as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        });
      });
    });
  }
};