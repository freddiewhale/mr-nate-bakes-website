document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    // Check if the toggle button exists on the page
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            // Toggles the .active class on the nav menu
            mainNav.classList.toggle('active');
        });
    }

    // --- Find Me Page Tabs ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Check if tab links exist on the page
    if (tabLinks.length > 0) {
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
    }

});
