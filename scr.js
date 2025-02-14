// const swiper = new Swiper('.swiper', {
//    slidesPerView: 3,
//    spaceBetween: 30,
//    direction: 'horizontal',
//    loop: true,
//    pagination: {
//      el: '.swiper-pagination',
//      type: "fraction",
//    },
//    navigation: {
//      nextEl: '.swiper-button-next',
//      prevEl: '.swiper-button-prev',
//    },
// });

const swiper = new Swiper('.swiper', {
   slidesPerView: 3,
   spaceBetween: 30,
   direction: 'horizontal',
   loop: true,
   breakpoints: {
     // when window width is >= 0px
     0: {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: "fraction",
        },
       navigation: false,
     },
     // when window width is > 768px
     768: {
        navigation: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: false,
     },
     // when window width is > 1280px
     1280: {
       pagination: false,
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     },
   },
});