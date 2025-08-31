// Modern Interactive Website Script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeParticles();
    initializeScrollAnimations();
    initializeNavigation();
    initializeTypingEffect();
    initializeInteractiveElements();
    initializeSmoothScrolling();
    
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }
});

// Particle System
function initializeParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 4 + 2;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 5;
    const randomX = Math.random() * 200 - 100;
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${startX}px;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        --random-x: ${randomX}px;
    `;
    
    container.appendChild(particle);
    
    // Remove and recreate particle after animation
    particle.addEventListener('animationend', () => {
        particle.remove();
        createParticle(container);
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.about-card, .download-card, .contact-card, .social-link, .goal-item'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(element);
    });
    
    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Navigation
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Navbar scroll effect
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Change navbar appearance on scroll
        if (currentScrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.1)';
            navbar.style.boxShadow = 'none';
        }
        
        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
}

// Typing Effect
function initializeTypingEffect() {
    const nameElement = document.querySelector('.hero-name');
    if (!nameElement) return;
    
    const nameParts = nameElement.querySelectorAll('.name-part');
    
    nameParts.forEach((part, index) => {
        const text = part.textContent;
        part.textContent = '';
        part.style.opacity = '1';
        
        setTimeout(() => {
            typeText(part, text, 100);
        }, index * 1000);
    });
}

function typeText(element, text, speed) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Interactive Elements
function initializeInteractiveElements() {
    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .download-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Ripple effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Card 3D tilt effect
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
    
    // Floating icons animation
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach((icon, index) => {
        icon.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform += ' scale(1.2)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = this.style.transform.replace(' scale(1.2)', '');
        });
    });
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerOffset = 80;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Download functionality
function downloadFile(filename) {
    const link = document.createElement('a');
    link.style.display = 'none';
    document.body.appendChild(link);

    if (filename === 'plan-for-success.pdf') {
        link.href = './plan-for-success.pdf';
        link.download = 'خطة-النجاح-مع-محمد-الهدوني.pdf';
    } else if (filename === 'siama-toukanin.pdf') {
        link.href = './siama-toukanin.pdf';
        link.download = 'سياما-توكانين-مع-محمد-الهدوني.pdf';
    } else {
        showNotification(`الملف ${filename} غير موجود حالياً.`, 'error');
        return;
    }

    link.click();
    document.body.removeChild(link);
    showNotification(`تم تحميل ${link.download} بنجاح!`);
}

// Notification System
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    const colors = {
        success: 'linear-gradient(135deg, #10b981, #34d399)',
        error: 'linear-gradient(135deg, #ef4444, #f87171)',
        warning: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
        info: 'linear-gradient(135deg, #3b82f6, #60a5fa)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type] || colors.success};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(120%);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        font-weight: 600;
        font-size: 0.9rem;
        max-width: 300px;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out
    setTimeout(() => {
        notification.style.transform = 'translateX(120%)';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 4000);
}

// Ripple animation keyframes
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Performance optimization
let ticking = false;

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

function updateAnimations() {
    // Update any continuous animations here
    ticking = false;
}

// Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add throttled scroll listener
window.addEventListener('scroll', throttle(() => {
    requestTick();
}, 16));

// Preload critical resources
function preloadResources() {
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource;
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadResources();

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-greeting, .hero-name, .hero-titles, .hero-description, .hero-buttons, .hero-stats');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});

// Add initial loading styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) .hero-greeting,
    body:not(.loaded) .hero-name,
    body:not(.loaded) .hero-titles,
    body:not(.loaded) .hero-description,
    body:not(.loaded) .hero-buttons,
    body:not(.loaded) .hero-stats {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
document.head.appendChild(loadingStyle);

