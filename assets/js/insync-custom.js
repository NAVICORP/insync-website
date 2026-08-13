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

  /* ---- Enquiry form: submit in place and confirm in a popup ---- */
  var form = document.querySelector(".enquiry-form");
  var modal = document.getElementById("formModal");

  function t(text) {
    return window.insyncI18n ? window.insyncI18n.t(text) : text;
  }

  function openModal(state, title, body) {
    if (!modal) return;
    modal.querySelector(".form-modal-card").dataset.state = state;
    modal.querySelector(".form-modal-title").textContent = title;
    modal.querySelector(".form-modal-text").textContent = body;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-locked");
    var close = modal.querySelector(".form-modal-close");
    if (close) close.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-locked");
  }

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal || event.target.closest(".form-modal-close, .form-modal-dismiss")) {
        closeModal();
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
  }

  if (form && modal) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var button = form.querySelector('button[type="submit"]');
      var restore = button ? button.textContent : "";
      if (button) {
        button.disabled = true;
        button.textContent = t("Sending...");
      }

      var payload = {};
      new FormData(form).forEach(function (value, key) {
        payload[key] = value;
      });

      // Web3Forms has hCaptcha enabled for this access key, so a solved token
      // is mandatory. Stop here with a clear message rather than a generic error.
      if (form.querySelector(".h-captcha") && !payload["h-captcha-response"]) {
        if (button) {
          button.disabled = false;
          button.textContent = restore;
        }
        openModal(
          "error",
          t("One more step"),
          t("Please tick the \u201cI am human\u201d box below the form, then send your enquiry again.")
        );
        return;
      }

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then(function (response) {
          return response.json().catch(function () {
            return { success: response.ok };
          });
        })
        .then(function (result) {
          if (result && result.success) {
            form.reset();
            if (window.hcaptcha) {
              try { window.hcaptcha.reset(); } catch (err) { /* widget not ready */ }
            }
            openModal(
              "success",
              t("Thank you!"),
              t("Your enquiry has been sent. Our team will review it and get back to you shortly.")
            );
          } else {
            throw new Error("web3forms rejected the submission");
          }
        })
        .catch(function () {
          if (window.hcaptcha) {
            try { window.hcaptcha.reset(); } catch (err) { /* widget not ready */ }
          }
          openModal(
            "error",
            t("Something went wrong"),
            t("Your enquiry could not be sent. Please try again, or email us directly at info@insyncbuilders.com.")
          );
        })
        .then(function () {
          if (button) {
            button.disabled = false;
            button.textContent = restore;
          }
        });
    });
  }

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
