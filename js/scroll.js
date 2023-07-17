
    // const movingElement = document.querySelector('.circle');
    
    // function updateElementPosition() {
    //   // Calculate the new position based on the scrollY (vertical scroll position)
    //   const scrollPosition = window.scrollY;
    //   const newPosition = scrollPosition * 0.5; // Adjust the factor to control the speed of movement
      
    //   // Apply the transform to move the element
    //   movingElement.style.transform = `translateY(${newPosition}px)`;
    // }
    
    // Listen for the scroll event and call the updateElementPosition function


    // window.addEventListener('scroll', updateElementPosition);

    // const movingElement = document.querySelector('.circle');
    // function updateElementPosition() {
    //     const scrolled = window.scrollY;
    //     const val = scrolled * 0.5;
    //     movingElement.style.transform = `translateY(${0.5 * val}em)`;
    // }
    window.addEventListener('scroll', reveal);
    function reveal(){
        var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++){
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 50;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else{
                reveals[i].classList.remove('active');
            }
        }
    }

    