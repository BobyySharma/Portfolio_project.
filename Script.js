// Add parallax scrolling for background and glitch effect
window.addEventListener('scroll', function() {
    const heroImage = document.querySelector('.hero-image img');
    heroImage.style.transform = `translateY(${window.pageYOffset * 0.5}px)`;
});

// Optional: Add smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
