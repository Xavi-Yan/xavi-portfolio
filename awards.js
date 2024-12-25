// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Counter Animation
    function animateValue(id, start, end, duration) {
        if (start === end) return;
        const range = end - start;
        let current = start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        const obj = document.getElementById(id);

        const timer = setInterval(function() {
            current += increment;
            obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

// Start animation when element is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue("usaco-counter", 0, 1000, 2000);  // 2 seconds duration
                animateValue("ctf-counter", 0, 3, 1500);       // 1.5 seconds duration
                animateValue("aime-counter", 0, 11, 1500);     // 1.5 seconds duration
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

// Observe the counter section
    const counterSection = document.querySelector('.achievement-counter');
    if (counterSection) {
        observer.observe(counterSection);
    }

// Timeline Animation
    const timelineItems = document.querySelectorAll('.timeline-item');

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                timelineObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        timelineObserver.observe(item);
    });

// Award Cards Animation
    const awardCards = document.querySelectorAll('.award-card');

    awardCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

// Scroll to Top Button
    const createScrollTopButton = () => {
        const scrollButton = document.createElement('button');
        scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollButton.className = 'scroll-top';
        document.body.appendChild(scrollButton);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        });

        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    createScrollTopButton();


// Scroll Progress Bar
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalScroll) * 100;
            progressBar.style.width = `${progress}%`;
        });
    };

    createScrollProgress();
});

// Mobile menu toggle
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


// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            timelineObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    timelineObserver.observe(item);
});

// Award Cards Animation
const awardCards = document.querySelectorAll('.award-card');

awardCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Scroll to Top Button
const createScrollTopButton = () => {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-top';
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

createScrollTopButton();

// Scroll Progress Bar
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalScroll) * 100;
        progressBar.style.width = `${progress}%`;
    });
};

createScrollProgress();

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            timelineObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5,
    rootMargin: '0px'
});

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    timelineObserver.observe(item);
});

// Award Cards Animation
const awardCards = document.querySelectorAll('.award-card');

awardCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skills Progress Animation
const skillBars = document.querySelectorAll('.progress-line span');
const skillSection = document.querySelector('.skills-recognition');

const showProgress = () => {
    skillBars.forEach(progressBar => {
        const width = progressBar.parentElement.className.includes('programming') ? '100%' :
            progressBar.parentElement.className.includes('mathematics') ? '95%' : '90%';
        progressBar.style.width = width;
    });
};

const hideProgress = () => {
    skillBars.forEach(progressBar => {
        progressBar.style.width = '0';
    });
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            showProgress();
        } else {
            hideProgress();
        }
    });
}, {
    threshold: 0.5
});

skillsObserver.observe(skillSection);

// Scroll to Top Button
const createScrollTopButton = () => {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-top';
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

createScrollTopButton();

// Parallax Effect for Hero Section
const awardsHero = document.querySelector('.awards-hero');
if (awardsHero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        awardsHero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });
}

// Timeline Dot Hover Effect
const timelineDots = document.querySelectorAll('.timeline-dot');

timelineDots.forEach(dot => {
    dot.addEventListener('mouseenter', () => {
        dot.style.transform = 'scale(1.2) translateX(-50%)';
        dot.style.background = 'var(--secondary-color)';
    });

    dot.addEventListener('mouseleave', () => {
        dot.style.transform = 'scale(1) translateX(-50%)';
        dot.style.background = 'var(--primary-color)';
    });
});