document.addEventListener("DOMContentLoaded", function () {
  if (window.Swiper) {
    new Swiper(".hero-slider", {
      loop: true,
      speed: 900,
      autoplay: {
        delay: 6500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function () {
      var nav = document.querySelector(".navbar-collapse.show");
      if (nav && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  var projectType = document.getElementById("projectType");
  document.querySelectorAll("[data-project-type] .service-link").forEach(function (link) {
    link.addEventListener("click", function () {
      if (projectType) {
        projectType.value = link.closest("[data-project-type]").dataset.projectType || "";
      }
    });
  });

  var filterButtons = document.querySelectorAll("[data-filter]");
  var projects = document.querySelectorAll(".project-grid article");
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.dataset.filter;
      filterButtons.forEach(function (item) {
        item.classList.toggle("active", item === button);
      });
      projects.forEach(function (project) {
        var categories = project.dataset.category || "";
        project.style.display = filter === "all" || categories.indexOf(filter) !== -1 ? "" : "none";
      });
    });
  });
});
