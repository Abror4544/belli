$(function () {
  $(".header .swiper-wrapper").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: $(".header-button-prev"),
    nextArrow: $(".header-button-next"),
    autoplay: true,
    autoplaySpeed: 2000,
  });


  var swiper = new Swiper(".teamSwiper", {
    slidesPerGroup: 1,
    spaceBetween: 60,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3.6,
      },
    },
  });

  //Navigation

  var app = (function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector("body");
      menu = document.querySelector(".menu-icon");
      menuItems = document.querySelectorAll(".nav__list-item");
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener("click", function () {
        return toggleClass(body, "nav-active");
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass))
        element.classList.remove(stringClass);
      else element.classList.add(stringClass);
    };
    init();
  })();

  let link = $(".nav__list a, .footer__menu a");

  link.on("click", function (e) {
    link.removeClass("active");
    let selector = $(this).addClass("active").attr("href");
    let target = $(selector);
    $("body").removeClass("nav-active");
    $("html, body").animate({ scrollTop: target.offset().top - 70 }, 500);
  });
});
