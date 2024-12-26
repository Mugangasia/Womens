document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your application. We will review your submission and contact you shortly.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});