// Form Validation
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = document.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email');
        return;
    }

    // Simulate form submission
    alert('Your message has been sent!');
    document.querySelector('.contact-form').reset();
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
        // Toggle the active class for both the button and the menu
        toggleButton.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});



//Close the menu after clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});


// Toggle FAQ answers
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        // Toggle the active class on the clicked question
        question.classList.toggle('active');
        
        // Get the associated answer element
        const answer = question.nextElementSibling;

        // Check if the answer is currently visible
        if (answer.style.maxHeight) {
            // If visible, hide the answer
            answer.style.maxHeight = null;
        } else {
            // If hidden, show the answer with a smooth animation
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }

        // Optional: Collapse other answers when one is opened (accordion behavior)
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer) {
                otherAnswer.style.maxHeight = null;
                otherAnswer.previousElementSibling.classList.remove('active');
            }
        });
    });
});
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    // Show or hide the Back to Top button on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to the top when the Back to Top button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// Navbar scroll effect - change background color on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Existing code...
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    const showSectionOnScroll = () => {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2; // Adjust threshold

            if (sectionPosition < screenPosition) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', showSectionOnScroll);
    showSectionOnScroll(); // Initial call to show sections on page load

    // Rest of your existing script...
});


