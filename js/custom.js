// Set current year dynamically
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

// Nice select dropdown
$(document).ready(function () {
    $('select').niceSelect();
});

// Date picker setup
$(function () {
    $("#inputDate").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});

// Owl carousel slider
$('.team_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: { items: 1, margin: 0 },
        576: { items: 2 },
        992: { items: 3 }
    }
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
