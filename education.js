// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loading');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// Scroll Progress Bar
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
};

createScrollProgress();

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineSchools = document.querySelectorAll('.timeline-school');

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            timelineObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// Interactive Timeline Schools
timelineSchools.forEach(school => {
    school.addEventListener('mouseenter', () => {
        school.classList.add('active');
    });

    school.addEventListener('mouseleave', () => {
        school.classList.remove('active');
    });
});

// Interactive Highlight Cards
const highlightCards = document.querySelectorAll('.highlight-card');

highlightCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('active');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    });
});

// Parallax Effect for Hero Section
const educationHero = document.querySelector('.education-hero');
if (educationHero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        educationHero.style.backgroundPositionY = `${rate}px`;
    });
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Add hover effect for timeline dots
const timelineDots = document.querySelectorAll('.timeline-dot');

timelineDots.forEach(dot => {
    dot.addEventListener('mouseenter', () => {
        dot.style.transform = 'scale(1.2) translateX(-50%)';
    });

    dot.addEventListener('mouseleave', () => {
        dot.style.transform = 'translateX(-50%)';
    });
});