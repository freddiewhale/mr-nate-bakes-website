document.addEventListener('DOMContentLoaded', () => {
    
    const nav = document.querySelector('.mobile-nav');
    const navToggle = document.querySelector('.mobile-nav-toggle');

    navToggle.addEventListener('click', () => {
        // This single line adds or removes the 'is-open' class from both elements.
        // The CSS handles all the animation based on whether the class is present.
        nav.classList.toggle('is-open');
        navToggle.classList.toggle('is-open');
    });

});