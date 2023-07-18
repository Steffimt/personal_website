window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`

})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})
// var menu = document.getElementById("menu");
// menu.onclick = function(){
//     menu.classList.toggle("openmenu");
// }
// const menuIcon = document.querySelector(".menu-icon");
// const navLinks = document.querySelector(".nav-links");
 
// menuIcon.addEventListener('click',()=>{
//     navLinks.classList.toggle('mobile-menu')
// })

