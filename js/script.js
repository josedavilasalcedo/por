const navToggle = document.querySelector(".navbar-toggle");
navToggle.addEventListener("click", function () {
  document.querySelector(".portfolio-navbar").classList.toggle("show");
});

// Tab Interface For Resume

const resumeHeading = document.querySelector(".resume-heading");
const resumeTabs = document.querySelectorAll(".resume-tab");

resumeHeading.onclick = (event) => {
  event.preventDefault();
  const clickedItemId = event.target.dataset.id;
  if (clickedItemId) {
    resumeHeading.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    resumeTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    const correspondingTab = document.getElementById(clickedItemId);
    correspondingTab.classList.add("active");
  }
};

// proyectos

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".portfolio-filter-nav button");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach(button => {
      button.addEventListener("click", function () {
          // Remover la clase activa de todos los botones
          filterButtons.forEach(btn => btn.classList.remove("active"));
          // Agregar la clase activa al botón clickeado
          this.classList.add("active");

          const targetId = this.getAttribute("data-id");

          portfolioItems.forEach(item => {
              const categoryId = item.getAttribute("data-category");

              if (targetId === "all" || targetId === categoryId) {
                  item.style.display = "block";
              } else {
                  item.style.display = "none";
              }
          });
      });
  });
});
