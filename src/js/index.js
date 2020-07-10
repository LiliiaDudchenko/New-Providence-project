var swiper = new Swiper(".interface-swiper-container", {
  slidesPerView: 5,
  spaceBetween: 10,
  grabCursor: true,
  slideToClickedSlide: true,
  loop: true,
  // effect: 'fade',

  breakpoints: {


    640: {
      slidesPerView: 4,
      spaceBetween: 20,

    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

// var fSwiper = new Swiper(".f-swiper-container", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


$('.navigation').on('click', '.mobile_menu', function () {
  $(".navigation ul").slideToggle(400);
});

jQuery(window).resize(function () {
  const windowWidth = $(window).width();

  if (windowWidth > 900) {
    $('.navigation ul').css({
      display: 'flex'
    })
  } else {
    $('.navigation ul').css({
      display: 'none'
    })
  }
});