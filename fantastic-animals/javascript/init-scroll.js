export default function initScroll() {
    const internLinks = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        
        section.scrollIntoView({
            behavior: 'smooth',
            block: start,
        });
        
        /* Alternative Form
        const top = section.offsetTop();
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
        */
    }
    
    internLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
};

// initScroll();