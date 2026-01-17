

  /* ==========================
     NAVBAR OCULTA / MUESTRA
  ========================== */
  function initNavbar() {
    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      navbar.style.top = scrollTop > lastScrollTop ? "-80px" : "0";
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
    const servicios = {
      gasfiteria: {
        titulo: "Servicio de Gasfitería",
        descripcion: "Nuestro servicio de gasfitería cubre todas las necesidades residenciales y comerciales.",
        items: [
          { titulo: "Reparación de fugas", detalle: "Detección y reparación rápida de fugas." },
          { titulo: "Instalaciones", detalle: "Instalación de redes de agua y desagüe." }
        ]
      },
      electricidad: {
        titulo: "Servicio de Electricidad",
        descripcion: "Soluciones eléctricas seguras para hogares y empresas.",
        items: [
          { titulo: "Cableado", detalle: "Instalación y renovación de cableado." },
          { titulo: "Tableros", detalle: "Mantenimiento de tableros eléctricos." }
        ]
      },
      bombas: {
        titulo: "Bombas de Agua",
        descripcion: "Instalación y mantenimiento de bombas de agua.",
        items: [
          { titulo: "Instalación", detalle: "Montaje de bombas domésticas e industriales." }
        ]
      },
      termas: {
        titulo: "Servicio de Termas",
        descripcion: "Instalación y mantenimiento de termas eléctricas y a gas.",
        items: [
          { titulo: "Instalación de termas", detalle: "Colocación profesional y segura." }
        ]
      }
    };

    const links = document.querySelectorAll(".Menu-servicios nav a");
    const titulo = document.getElementById("titulo-servicio");
    const descripcion = document.getElementById("descripcion-servicio");
    const lista = document.getElementById("lista-servicios");
    
    if (!links.length || !titulo || !descripcion || !lista) return;

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
    const hashService = window.location.hash.replace("#", "");
    const initialLink = document.querySelector(
      `.Menu-servicios nav a[data-service="${hashService}"]`
    );
    
    if (initialLink) {
      initialLink.click();
    } else {
      links[0].click(); // fallback
    }
  }
  /* ==========================
     REDIRECCION DE SERVICIOS
  ========================== */
  function initLinksServ(){
    document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const service = card.dataset.service;
    window.location.href = `servicios.html#${service}`;
  });
});

  }
  /* ==========================
     NAV LINKS ACTIVO
  ========================== */
  function initNavLinks() {
    const navLinks = document.querySelectorAll(".navbar a");
    const activeLink = localStorage.getItem("activeNav");

    navLinks.forEach(link => {
      if (link.getAttribute("href") === activeLink) {
        link.classList.add("active");
      }

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
        menuToggle.classList.remove("open");
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
  initLinksServ();
  initBackToTop();
  initServicios();
  initNavLinks();
  initMenuMovil();
  initFormulario();
  initTextoAnimado();