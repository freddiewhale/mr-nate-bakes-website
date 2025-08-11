document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('mobile-active');
        });
    }

    // --- Find Me Page Tabs ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tabId = link.getAttribute('data-tab');

            tabLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');

            tabPanes.forEach(pane => {
                if (pane.id === tabId) {
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                }
            });
        });
    });

});
