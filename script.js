// ================================
// MOBILE NAVIGATION
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu when a navigation link is clicked

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ================================
// PROPERTY SEARCH
// ================================

const searchButton = document.querySelector(".search-button");

const locationSelect = document.querySelector("#location");
const propertyType = document.querySelector("#property-type");
const budget = document.querySelector("#budget");

searchButton.addEventListener("click", () => {

    const location = locationSelect.value;
    const type = propertyType.value;
    const price = budget.value;

    if (!location && !type && !price) {
        alert("Please select at least one search option.");
        return;
    }

    let message = "Searching for properties";

    if (location) {
        message += ` in ${location}`;
    }

    if (type) {
        message += ` — ${type}`;
    }

    if (price) {
        message += ` — ${price}`;
    }

    alert(message);
});


// ================================
// PROPERTY BUTTONS
// ================================

const propertyLinks = document.querySelectorAll(".property-bottom a");

propertyLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log("Property inquiry started.");

    });

});


// ================================
// SIMPLE SCROLL EFFECT
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});