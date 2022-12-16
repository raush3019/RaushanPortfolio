gsap.from(".one .box h1",{
    duration:2,
    opacity:0,
    onStart:function(){
        $('.one .box h1').textillate({ in: { effect: 'fadeIn' } });
    },
    scrollTrigger:{
        trigger:".one .box h1",
        scroller:".main",
        // markers:true,
        start:"top 60%"
    }
})



var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay:{
      delay:1500,
      disableOnInteraction:false,


    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



