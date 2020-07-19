let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene, {
  relativeInput: true
});
parallaxInstance.friction(0.2, 0.2);
let swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween:1300,
  slidesPerGroup: 1,
  
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
 
});