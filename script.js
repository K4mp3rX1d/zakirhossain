// Main nav toggle button
const btnToggle = document.querySelector(".btn-toggle");

function navToggler() {
    const navItems = document.querySelector(".nav-items");
    if (navItems.classList.contains("collapse")) {
        navItems.classList.remove("collapse");
    } else {
        navItems.classList.add("collapse");
    }
}

btnToggle.addEventListener("click", navToggler);