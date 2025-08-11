// --- Mobile Navigation ---
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mainNav = document.querySelector('.main-nav');

mobileNavToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// This code finds all the tab buttons and content panes on the page.
const tabLinks = document.querySelectorAll('.tab-link');
const tabPanes = document.querySelectorAll('.tab-pane');

// This code adds a 'click' event listener to each tab button.
tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        // When a button is clicked, it gets the ID of the content that should be shown.
        const tabId = link.getAttribute('data-tab');

        // It removes the 'active' class from all tab buttons to reset them.
        tabLinks.forEach(item => item.classList.remove('active'));
        // It adds the 'active' class to the button that was just clicked, highlighting it.
        link.classList.add('active');

        // It loops through all the content panes.
        tabPanes.forEach(pane => {
            // If the pane's ID matches the one we want to show, it adds the 'active' class to display it.
            if (pane.id === tabId) {
                pane.classList.add('active');
            } else {
                // Otherwise, it removes the 'active' class to hide it.
                pane.classList.remove('active');
            }
        });
    });
});
