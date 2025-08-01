// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Optional: Prevent form submission (demo purpose)
document.querySelector('form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (Demo)');
});