// Variables para elementos del DOM y estado del menú
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
let isOpen = false;

// Función para alternar el menú y cambiar el ícono
menu.onclick = () => {
  navbar.classList.toggle("open");
  isOpen = !isOpen;

  if (isOpen) {
    menu.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    menu.innerHTML = '<i class="fas fa-bars"></i>';
  }
};

// Función para mostrar el contenido de la sección seleccionada
function mostrarContenido(seccion) {
  // Ocultar todos los contenidos
  const contenidos = document.getElementsByClassName("contenido");
  for (let i = 0; i < contenidos.length; i++) {
    contenidos[i].style.display = "none";
  }

  // Mostrar el contenido de la sección seleccionada
  document.getElementById("contenido-" + seccion).style.display = "block";

  // Agregar la clase "active" al enlace que se hizo clic
  const enlaces = document.querySelectorAll(".nav-link");
  enlaces.forEach((enlace) => {
    enlace.classList.remove("active");
  });

  event.target.classList.add("active");
}

// Funciones para cambiar el modo oscuro
const modoOscuroToggle = document.getElementById('modo-oscuro-toggle');
const iconoModo = document.getElementById('icono-modo');
iconoModo.classList.add('fa-moon'); // Agregar la clase 'fa-moon' al icono de forma inicial

modoOscuroToggle.addEventListener('click', () => {
  // Alternar la clase 'modo-oscuro' en el cuerpo del documento
  document.body.classList.toggle('modo-oscuro');

  // Obtener el estado actual del modo oscuro
  const modoOscuroActivo = document.body.classList.contains('modo-oscuro');

  // Cambiar el ícono entre luna y sol según el estado del modo oscuro
  if (modoOscuroActivo) {
    iconoModo.classList.remove('fa-moon');
    iconoModo.classList.add('fa-sun');
  } else {
    iconoModo.classList.remove('fa-sun');
    iconoModo.classList.add('fa-moon');
  }
});
