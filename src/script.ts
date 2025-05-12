// Smooth scroll to top
const scrollTopBtn = document.getElementById('scrollTopBtn');
scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Collapse navbar on mobile link click
document.addEventListener('DOMContentLoaded', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.navbar-nav .nav-link');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992 && navbarCollapse) {
                // Bootstrap 5: Access the Collapse API via constructor
                new (window as any).bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
});

// Generate carousel indicators dynamically
document.addEventListener('DOMContentLoaded', () => {
    const carouselId = 'skillsCarousel';
    const indicatorContainer = document.getElementById('skillsIndicators');
    const slides = document.querySelectorAll(`#${carouselId} .carousel-item`);

    if (!indicatorContainer) return;

    // Clear any existing indicators
    indicatorContainer.innerHTML = '';

    slides.forEach((_, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('data-bs-target', `#${carouselId}`);
        button.setAttribute('data-bs-slide-to', index.toString());
        button.setAttribute('aria-label', `Slide ${index + 1}`);
        button.classList.add('bg-dark');

        if (index === 0) {
            button.classList.add('active');
            button.setAttribute('aria-current', 'true');
        }

        indicatorContainer.appendChild(button);
    });
});

