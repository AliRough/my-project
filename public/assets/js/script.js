/*begin :: https://bootstrap-menu.com/detail-multilevel.html*/
document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {
    // close all inner dropdowns when parent is closed
    document
      .querySelectorAll(".navbar .dropdown")
      .forEach(function (everydropdown) {
        everydropdown.addEventListener("hidden.bs.dropdown", function () {
          // after dropdown is hidden, then find all submenus
          this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
            // hide every submenu as well
            everysubmenu.style.display = "none";
          });
        });
      });

    document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
      element.addEventListener("click", function (e) {
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains("submenu")) {
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          if (nextEl.style.display == "block") {
            nextEl.style.display = "none";
          } else {
            nextEl.style.display = "block";
          }
        }
      });
    });
  }
  // end if innerWidth
});
/*end :: https://bootstrap-menu.com/detail-multilevel.html*/

/*begin::odometer */
$("#ay-counter").appear();
$("#ay-counter").on("appear", function () {
  document.querySelectorAll(".odometer").forEach(function (element) {
    let data_target = element.getAttribute("data-target");
    element.innerHTML = data_target;
  });
});
/* end::odometer */
/* begin::sliders */
const ay_comments_slider = new Swiper("#ay-comments-slider", {
  direction: "horizontal",
  spaceBetween: 100,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const ay_partners_slider = new Swiper("#ay-pratners-slider", {
  grabCursor: true,
  spaceBetween: 40,
  slidesPerView: 2,
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
  },
});
/* end::sliders */
$(document).ready(function () {
  $("nav").sticky({ topSpacing: 0 });
});
