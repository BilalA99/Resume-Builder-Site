// Set current year dynamically
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    const yearElement = document.querySelector("#displayYear");
    if (yearElement) {
        yearElement.innerHTML = currentYear;
    }
}

// Only call getYear if we're on a page that needs it
document.addEventListener('DOMContentLoaded', function() {
    getYear();
});

// Save user input dynamically
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        input.addEventListener("input", function () {
            localStorage.setItem(this.id, this.value);
        });
    });
});

// Apply resume template selection
function applyTemplate() {
    const selectedTemplate = document.querySelector('input[name="resume_template"]:checked').value;
    localStorage.setItem("selectedTemplate", selectedTemplate);
    window.location.href = selectedTemplate + ".html";
}

// Ensure dropdown menu works on mobile
$(document).ready(function () {
    $('.navbar-nav .dropdown-toggle').click(function (e) {
        if (window.innerWidth < 992) {
            e.preventDefault();
            let nextMenu = $(this).next('.dropdown-menu');
            $('.dropdown-menu').not(nextMenu).slideUp();
            nextMenu.slideToggle();
        }
    });
});

let slideIndex = 1;
let slideInterval;

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Remove active class from all slides and dots
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].classList.add("active");
}

function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    startAutoSlide();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    startAutoSlide();
}

function startAutoSlide() {
    // Clear any existing interval
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    // Set new interval
    slideInterval = setInterval(function() {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000); // Change slide every 3 seconds
}

// Initialize slider when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Show first slide
    showSlides(slideIndex);
    
    // Start auto-sliding
    startAutoSlide();
    
    // Add error handling for images
    const slides = document.getElementsByClassName("mySlides");
    for (let slide of slides) {
        const img = slide.querySelector('img');
        if (img) {
            img.onerror = function() {
                console.error('Error loading image:', img.src);
                this.src = 'images/resume-preview.png';
            };
        }
    }

    // Pause auto-sliding when hovering over the slider
    const sliderContainer = document.querySelector('.slideshow-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', function() {
            clearInterval(slideInterval);
        });
        
        sliderContainer.addEventListener('mouseleave', function() {
            startAutoSlide();
        });
    }
});
