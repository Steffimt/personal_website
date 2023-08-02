window.addEventListener('load', function () {
    // Find the element with the "title" class
    var titleElement = document.querySelector('.title');
    // var textWrapperElement = document.querySelector('.text-wrapper');
    // var thumbnailElement = document.querySelector('.thumbnail');
    // Add the "show" class to reveal the element with a fade-in effect
    setTimeout(function () {
        titleElement.classList.add('show');
    }, 50)
    // setTimeout(function () {
    //     textWrapperElement.classList.add('show');
    // }, 800);
    // setTimeout(function () {
    //     thumbnailElement.classList.add('show');
    // }, 1000);
});


// window.addEventListener('scroll', reveal);

//   function reveal() {
//     var reveals = document.querySelectorAll('.reveal, .reveal2');
//     var windowheight = window.innerHeight;
//     var revealpoint = 100; // Adjust this value to change when the animation triggers

//     for (var i = 0; i < reveals.length; i++) {
//       var revealtop = reveals[i].getBoundingClientRect().top;
//       var revealDelay = parseInt(reveals[i].dataset.delay); // Get the delay from the data-delay attribute

//       if (revealtop < windowheight - revealpoint) {
//         // Use setTimeout to add the "active" class after the specified delay
//         setTimeout(function (element) {
//           element.classList.add('active');
//         }, revealDelay, reveals[i]);
//       } else {
//         reveals[i].classList.remove('active');
//       }
//     }
//   }

function revealElements() {
    var reveals = document.querySelectorAll('.reveal, .reveal2');
    var windowheight = window.innerHeight;
    var revealpoint = 100; // Adjust this value to change when the animation triggers

    for (var i = 0; i < reveals.length; i++) {
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealDelay = parseInt(reveals[i].dataset.delay); // Get the delay from the data-delay attribute

      if (revealtop < windowheight - revealpoint) {
        // Use setTimeout to add the "active" class after the specified delay
        setTimeout(function (element) {
          element.classList.add('active');
        }, revealDelay, reveals[i]);
      }
    }
  }

// Call the revealElements function when the page loads
window.addEventListener('load', revealElements);

// Call the revealElements function when scrolling
window.addEventListener('scroll', revealElements);

// const menuHamburger = document.querySelector('.menu-hamburger');
// const navLinks = document.querySelector('.nav-links');


// menuHamburger.addEventListener('click', () => {
  
//   navLinks.classList.toggle('mobile-menu-active');
// });
