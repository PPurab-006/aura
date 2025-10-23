document.addEventListener('DOMContentLoaded', () => {

    // --- 1. tsParticles Initialization ---
    // This loads the particle animation in the hero section
    (async () => {
        await tsParticles.load({
            id: "tsparticles",
            options: {
                // Use a transparent background so the CSS background-color shows
                background: {
                    color: {
                        value: "transparent"
                    }
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push" // Click to add more particles
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse" // Mouse over to move particles
                        }
                    },
                    modes: {
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: "#ffffff" // Particle color
                    },
                    links: {
                        color: "#ffffff", // Connecting line color
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: "out",
                        random: false,
                        speed: 1, // Particle speed
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 60 // Number of particles
                    },
                    opacity: {
                        value: 0.3
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: { min: 1, max: 3 }
                    }
                },
                detectRetina: true
            }
        });
    })();

    // --- 2. Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });

    // --- 3. IntersectionObserver for Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each element
    animatedElements.forEach(el => {
        observer.observe(el);
    });

});
