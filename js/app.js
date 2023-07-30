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

// Get the mobile menu element and the hamburger menu button
const mobileMenu = document.querySelector(".nav-links");
const hamburgerMenuBtn = document.querySelector(".menu-hamburger");

// Function to toggle the mobile menu
function toggleMobileMenu() {
  mobileMenu.classList.toggle("mobile-menu");
}

// Add a click event listener to the hamburger menu button
hamburgerMenuBtn.addEventListener("click", toggleMobileMenu);



const handleOnMouseMove = e => {
    const{ currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;
    
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for (const card of document.querySelectorAll(".text-card1, .text-card2, .text-card3")){
    card.onmousemove = e => handleOnMouseMove(e);
}

document.getElementById("cards").onmousemove = e => {
    for (const card of document.getElementsByClassName("text-card1, .text-card2, .text-card3")){
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }
}
function redirectToFrontEndPage(){
    window.location.href="front-end.html";
}
function redirectToDesignPage() {
    window.location.href = "design.html";
}