/* ==========================
   NAVBAR
========================== */
function initNavbar() {
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  if (!navbar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    navbar.style.top = scrollTop > lastScrollTop ? '-80px' : '0';
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

/* ==========================
   BACK TO TOP
========================== */
function initBackToTop() {
  const backToTop = document.getElementById("backToTop");
  if (!backToTop) return;

  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================
   SERVICIOS
========================== */
function initServicios() {
  const servicios = { /* tu objeto igual */ };

  const links = document.querySelectorAll(".Menu-servicios nav a");
  const titulo = document.getElementById("titulo-servicio");
  const descripcion = document.getElementById("descripcion-servicio");
  const lista = document.getElementById("lista-servicios");

  if (!links.length) return;

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const servicio = servicios[link.dataset.service];
      if (!servicio) return;

      titulo.textContent = servicio.titulo;
      descripcion.textContent = servicio.descripcion;
      lista.innerHTML = "";

      servicio.items.forEach(item => {
        lista.innerHTML += `
          <section>
            <div class="separador">
              <h4>${item.titulo}</h4>
              <p>${item.detalle}</p>
            </div>
          </section>
        `;
      });
    });
  });

  links[0].click();
}

/* ==========================
   NAV LINKS ACTIVO
========================== */
function initNavLinks() {
  const navLinks = document.querySelectorAll(".navbar a");
  const activeLink = localStorage.getItem("activeNav");

  if (activeLink) {
    navLinks.forEach(link => {
      if (link.getAttribute("href") === activeLink) {
        link.classList.add("active");
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      localStorage.setItem("activeNav", link.getAttribute("href"));
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

/* ==========================
   MENÚ MÓVIL
========================== */
function initMenuMovil() {
  const menuToggle = document.getElementById("menuToggle");
  const navsLinks = document.getElementById("navsLinks");
  if (!menuToggle || !navsLinks) return;

  const navLinksItems = navsLinks.querySelectorAll("a");

  menuToggle.addEventListener("click", () => {
    const isOpen = navsLinks.classList.toggle("active");
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.textContent = isOpen ? "✖" : "☰";
  });

  navLinksItems.forEach(link => {
    link.addEventListener("click", () => {
      navsLinks.classList.remove("active");
      menuToggle.textContent = "☰";
    });
  });
}

/* ==========================
   FORMULARIO
========================== */
function initFormulario() {
  const form = document.querySelector(".formulario");
  const checkbox = document.getElementById("politica");
  const errorPolitica = document.getElementById("error-politica");

  if (!form || !checkbox || !errorPolitica) return;

  form.addEventListener("submit", e => {
    if (!checkbox.checked) {
      e.preventDefault();
      errorPolitica.style.display = "flex";
    }
  });

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      errorPolitica.style.display = "none";
    }
  });
}

/* ==========================
   TEXTO ANIMADO
========================== */
function initTextoAnimado() {
  const texto = "Servicios Técnicos";
  const elemento = document.getElementById("escribir");
  if (!elemento) return;

  let i = 0;
  elemento.textContent = "";

  function escribirTexto() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escribirTexto, 100);
    }
  }
  escribirTexto();
}

/* ==========================
   INICIALIZACIÓN
========================== */
initNavbar();
initBackToTop();
initServicios();
initNavLinks();
initMenuMovil();
initFormulario();
initTextoAnimado();
