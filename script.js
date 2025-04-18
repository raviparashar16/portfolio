// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Update active tab
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Update active tab based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add retro typing effect to the hero section
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    typeWriter();
}

// Add scroll-based animations
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Handle folder item clicks
document.querySelectorAll('.folder-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling

        // Remove active class from all items
        document.querySelectorAll('.folder-item').forEach(i => {
            i.classList.remove('active');
        });

        // Add active class to clicked item
        this.classList.add('active');

        // Get the content id from the span text
        const contentId = this.querySelector('span').textContent;

        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show the corresponding content section if it exists
        const contentSection = document.getElementById(contentId);
        if (contentSection) {
            contentSection.classList.add('active');
        }

        // Handle special links
        if (contentId === 'resume') {
            window.open('#', '_blank');
        } else if (contentId === 'email') {
            window.location.href = 'mailto:raviparashar16@gmail.com';
        } else if (contentId === 'linkedin') {
            window.open('https://linkedin.com/in/rparashar1', '_blank');
        } else if (contentId === 'github') {
            window.open('https://github.com/raviparashar16', '_blank');
        }
    });
});

// Add hover effect for folder items
document.querySelectorAll('.folder-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#e8e8e8';
    });

    item.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.backgroundColor = '';
        }
    });
});

// Add home icon click handler
document.querySelector('.home-icon').addEventListener('click', function() {
    // Remove active class from all folder items
    document.querySelectorAll('.folder-item').forEach(item => {
        item.classList.remove('active');
    });

    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.classList.add('active');
    }
}); 