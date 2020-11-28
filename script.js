var viewportHeader = document.querySelector(".viewport-header");

document.body.addEventListener("scroll", function(event) {
  var opacity = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  var scale = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  document.documentElement.style.setProperty('--headerOpacity', opacity);
  document.documentElement.style.setProperty('--headerScale', scale);
});

$(document).ready(function(){
    
    var mySwiper = new Swiper('.swiper-container', {
  
  
  loop: true,
  effect:'fade',
  speed: 1500,

  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
})
  });