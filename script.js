// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

    var typed = new Typed('#typed', {
        strings: ["Frontend Developer", "Fullstack Developer", "Backend Developer"],
        typeSpeed: 30,  // Speed of typing (50ms per character)
        backSpeed: 30,  // Speed of erasing
        backDelay: 1000,  // Delay before backspacing starts
        loop: true  // Loop the animation
    });

   
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Toggle the navigation menu on hamburger click
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('nav-visible');
    });

    
