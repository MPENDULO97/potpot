
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Enhanced smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Handle home link
        if (targetId === '#' || targetId === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        // Handle other section links
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 100; // Account for fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Prevent redirect to Formspree and show thank you message
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const thankyouMessage = document.getElementById('thankyou-message');
    if (contactForm && thankyouMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            fetch('https://formspree.io/f/xdklblqo', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            })
            .then(function(response) {
                if (response.ok) {
                    contactForm.style.display = 'none';
                    thankyouMessage.style.display = 'block';
                } else {
                    response.json().then(function(data) {
                        alert(data.error || 'There was a problem sending your message.');
                    });
                }
            })
            .catch(function(error) {
                alert('There was a problem sending your message.');
            });
        });
    }
});
// ...existing code...

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.skill-item, .project-card, .certificate-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .certificate-card');
    animatedElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Initial check on page load
    animateOnScroll();
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);