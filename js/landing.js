// JavaScript source code

function toggleLandingMenu() {
    const menu = document.getElementById("landingMobileMenu");
    const button = document.getElementById("landingMobileMenuButton");

    const isOpen = menu.classList.toggle("active");

    button.setAttribute("aria-expanded", isOpen);
}

function closeLandingMenu() {
    const menu = document.getElementById("landingMobileMenu");
    const button = document.getElementById("landingMobileMenuButton");

    menu.classList.remove("active");
    button.setAttribute("aria-expanded", "false");
}

document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("currentYear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
