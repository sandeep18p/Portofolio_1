// Typed.js integration
document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed", {
      strings: ["Frontend Developer", "Fullstack Developer", "Backend Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
});

// Toggle navigation on small screens
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('nav-visible');
});


    // function randomizeBirdFlight() {
    //     const bird = document.getElementById('bird');
    //     const screenHeight = window.innerHeight;

    //     // Randomize flight duration
    //     const randomDuration = Math.random() * (15 - 8) + 8; // Random duration between 8 to 15 seconds
    //     bird.style.animationDuration = randomDuration + 's';

    //     // Randomize top starting position
    //     const randomStartTop = Math.random() * (screenHeight * 0.3); // Random starting top position within 30% of screen height
    //     bird.style.top = randomStartTop + 'px';

    //     // Repeat the function after each animation
    //     setTimeout(randomizeBirdFlight, randomDuration * 1000); // Run again after current animation completes
    // }

    // randomizeBirdFlight(); // Initial call to start the animation


document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section h2'); // Get all section headings
    const scrollPosition = window.scrollY + window.innerHeight; // Current scroll position

    sections.forEach((section) => {
        if (scrollPosition > section.offsetTop + 100) { // Trigger animation slightly before it appears
            section.classList.add('animate');
        }
    });
});
