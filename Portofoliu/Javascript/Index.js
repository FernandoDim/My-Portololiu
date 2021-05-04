

// Fixed Nav
window.addEventListener("scroll", function(){
  var navbar1=document.querySelector(".navbar");
  navbar1.classList.toggle("sticky", window.scrollY)
});
const menu1=document.querySelector(".menu1")
const menu2=document.querySelector(".menu2")
const menu3=document.querySelector(".menu3")
const menu4=document.querySelector(".menu4")
const menu5=document.querySelector(".menu5")
const btn=document.querySelector(".menu-btn")
const nav=document.querySelector(".menu")
btn.addEventListener("click", function(){
  nav.classList.toggle("active")
})
menu1.addEventListener("click", function(){
  nav.classList.toggle("active")
})
menu2.addEventListener("click", function(){
  nav.classList.toggle("active")
})
menu3.addEventListener("click", function(){
  nav.classList.toggle("active")
})
menu4.addEventListener("click", function(){
  nav.classList.toggle("active")
})
menu5.addEventListener("click", function(){
  nav.classList.toggle("active")
})
AOS.init();


new TypeIt("#typing", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Designer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

new TypeIt("#type2", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Designer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".menu-btn", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".menu", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".text-1", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".text-2", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".text-3", { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from(".home a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2,
});
gsap.from(".icons span", {
  opacity: 0,
  duration: 1,
  delay: 4,
  x: -30,
  stagger: 0.2,
});



mybutton = document.querySelector(".scroll-up-btn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

$(document).ready(function(){
  $(".imagi-skills").tilt({
    glare: true,
    maxGlare: .5
  })
})

