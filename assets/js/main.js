/*=============== SHOW MENU ===============*/


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD SHADOW HEADER ===============*/


/*=============== GSAP ANIMATION ===============*/
/* Function to start GSAP animations */
function startAnimations() {
    gsap.from('.home__img-1', {duration: 2, y: -100});

    let tl1 = gsap.timeline();
    tl1.from('.home__img-2', {duration: 1, x: -400, y: -50, rotation: 32, scale: 0.5})
       .to('.home__img-2', {duration: 1, rotation: 15, scale: 1.2})
       .to('.home__img-2', {duration: 1, rotation: 0, scale: 1});

    let tl2 = gsap.timeline();
    tl2.from('.home__img-3', {duration: 1, x: 50, y: -50, rotation: 30})
       .to('.home__img-3', {duration: 5, rotation: 360});

    gsap.from('.home__img-4', {duration: 5, y: -100, scale: 1.3});
    gsap.from('.home__img-5', {duration: 3, y: 100});
}

/* PRE LOADER */
// Wait for the entire page to load
window.addEventListener("load", () => {
    // Display the preloader for 5 seconds
    setTimeout(() => {
       // Hide the preloader
       document.querySelector(".preloader").style.display = "none";
       
       // Show the main content and start blob animations
       const mainContent = document.querySelector(".main-content");
       mainContent.style.display = "block";
       mainContent.classList.add("active"); // Triggers blob animations

       // Start GSAP animations after 5 seconds
       startAnimations();
    }, 5000); // 5000ms = 5 seconds
});


