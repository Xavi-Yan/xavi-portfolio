// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Timeline Animation
const timelineBlocks = document.querySelectorAll('.timeline-block');

const observerOptions = {
    threshold: 0.2,
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

timelineBlocks.forEach(block => {
    timelineObserver.observe(block);
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

// Tech Tags Animation
const techTags = document.querySelectorAll('.tech-tag');

techTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateY(-5px)';
    });

    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateY(0)';
    });
});

// Timeline Block Interaction
timelineBlocks.forEach(block => {
    block.addEventListener('mouseenter', () => {
        block.classList.add('active');
    });

    block.addEventListener('mouseleave', () => {
        block.classList.remove('active');
    });
});

// Parallax Effect for Hero Section
const experienceHero = document.querySelector('.experience-hero');
if (experienceHero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        experienceHero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
}

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