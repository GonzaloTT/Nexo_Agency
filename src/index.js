// Small JS: mobile menu + form handling + dynamic year
(function () {
  const menuToggle = document.getElementById("mobileToggle");
  const menuOverlay = document.getElementById("menuOverlay");
  const menuClose = document.getElementById("menuClose");
  const yearEl = document.getElementById("year");
  yearEl.textContent = new Date().getFullYear();

  function openMenu() {
    menuOverlay.classList.add("menu-overlay--open");
    menuOverlay.setAttribute("aria-hidden", "false");
  }
  function closeMenu() {
    menuOverlay.classList.remove("menu-overlay--open");
    menuOverlay.setAttribute("aria-hidden", "true");
  }

  menuToggle.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);
  menuOverlay.addEventListener("click", function (e) {
    if (e.target === menuOverlay) closeMenu();
  });

  // Simple form validation and UX
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "";
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      status.textContent = "Por favor completa todos los campos.";
      return;
    }
    // Basic email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      status.textContent = "Ingresa un correo válido.";
      return;
    }

    // Simulate send (replace with actual submission to backend)
    const submitBtn = form.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Enviar";
      form.reset();
      status.textContent = "¡Gracias! Te contactamos pronto.";
    }, 900);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target)
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        closeMenu();
      }
    });
  });
})();
