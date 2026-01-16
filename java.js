document.addEventListener("DOMContentLoaded", () => {

  /* ===== NAVBAR SCROLL ===== */
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      navbar.style.top = scrollTop > lastScrollTop ? '-80px' : '0';
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
  }

  /* ===== BOTÓN BACK TO TOP ===== */
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 200 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ===== SERVICIOS ===== */
  const servicios = {
    gasfiteria: {
      titulo: "Servicio de Gasfitería",
      descripcion: "Nuestro servicio de gasfitería cubre todas las necesidades residenciales y comerciales. Nuestro servicio de gasfitería cubre todas las necesidades residenciales y comerciales.",
      items: [
        { titulo: "Reparación de fugas", detalle: "Detección y reparación rápida de fugas." },
        { titulo: "Reparación de fugas", detalle: "Detección y reparación rápida de fugas." },
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

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();



    // 🔥 manejar activo
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    const key = link.dataset.service;
    const servicio = servicios[key];
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

// Activo inicial
if (links.length > 0) {
  links[0].classList.add("active");
  links[0].click();
}

  
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



  const boton = document.querySelector(".menu-movil .btn-menu");
  const menuMovil = document.querySelector(".menu-movil");

    boton.addEventListener("click", () => {
        menuMovil.classList.toggle("open");
    });


});

  

const menuToggle = document.getElementById("menuToggle");
const navsLinks = document.getElementById("navsLinks");
const navLinksItems = navsLinks.querySelectorAll("a");

menuToggle.addEventListener("click", () => {
  const isOpen = navsLinks.classList.toggle("active");

  menuToggle.classList.toggle("open", isOpen);
  menuToggle.textContent = isOpen ? "✖" : "☰";
});

// cerrar al hacer click en un link
navLinksItems.forEach(link => {
  link.addEventListener("click", () => {
    navsLinks.classList.remove("active");
    menuToggle.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});



const texto = "Servicios Técnicos";
  const elemento = document.getElementById("escribir");

  let i = 0;
  elemento.textContent = ""; // limpia el texto

  function escribirTexto() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(escribirTexto, 100); // velocidad
    }
  }
  escribirTexto();

/*Lo del checkbox*/ 

 const form = document.querySelector('.formulario');
  const checkbox = document.getElementById('politica');
  const error = document.getElementById('error-politica');

  // oculto el mensaje al inicio
  error.style.display = 'none';

  form.addEventListener('submit', function (e) {
    if (!checkbox.checked) {
      e.preventDefault(); // ⛔ NO envía el formulario
      error.style.display = 'flex'; // o 'block'
    } else {
      error.style.display = 'none';
    }
  }); 