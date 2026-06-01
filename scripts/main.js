document.addEventListener('DOMContentLoaded', () => {
    // SMOOTH SCROLL FOR ANCHOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // MOBILE NAV TOGGLE
    const navToggle = document.querySelector('.nav-toggle');
    const siteNav = document.getElementById('site-nav');
    if (navToggle && siteNav) {
        navToggle.addEventListener('click', () => {
            const open = siteNav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        // Close nav on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && siteNav.classList.contains('open')) {
                siteNav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        });
    }

    // TESTIMONIALS CAROUSEL
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');
    if (testimonialPrev && testimonialNext) {
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        let currentTestimonial = 0;

        function showTestimonial(index) {
            testimonialItems.forEach(item => item.classList.remove('active'));
            testimonialItems[index].classList.add('active');
        }

        testimonialPrev.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
            showTestimonial(currentTestimonial);
        });

        testimonialNext.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
            showTestimonial(currentTestimonial);
        });

        // Auto-scroll testimonials every 6 seconds
        setInterval(() => {
            testimonialNext.click();
        }, 6000);
    }
});
