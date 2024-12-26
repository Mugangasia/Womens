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

function selectTier(tierName) {
    const selectedTier = document.createElement('input');
    selectedTier.type = 'hidden';
    selectedTier.name = 'selectedTier';
    selectedTier.value = tierName;
    
    document.getElementById('applicationForm').appendChild(selectedTier);
    document.querySelector('#apply').scrollIntoView({ behavior: 'smooth' });
}

function registerEvent(eventName) {
    // Check if user is logged in (this would need to be implemented)
    const isLoggedIn = false; // This would be determined by your authentication system
    
    if (isLoggedIn) {
        alert(`Thank you for registering for ${eventName}. You will receive a confirmation email shortly.`);
    } else {
        alert('Please become a member to register for events. Redirecting to application form...');
        document.querySelector('#apply').scrollIntoView({ behavior: 'smooth' });
    }
}

// JavaScript for language selector 

document.getElementById('language').addEventListener('change', function(e) {
    // Here you would typically implement language switching functionality
    alert('Language changed to: ' + e.target.value);
});


// Enhanced scroll behavior
let lastScroll = 0;
const headerWrapper = document.querySelector('.header-wrapper');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class when scrolling down
    if (currentScroll > 10) {
        headerWrapper.classList.add('scrolled');
    } else {
        headerWrapper.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});