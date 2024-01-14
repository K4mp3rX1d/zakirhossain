// Main nav toggle button
const btnToggle = document.querySelector(".btn-toggle");

function navToggler() {
    const navItems = document.querySelector(".nav-items");
    if (navItems.classList.contains("collapse")) {
        navItems.classList.remove("collapse");
        btnToggle.innerHTML = "CLOSE";
    } else {
        navItems.classList.add("collapse");
        btnToggle.innerHTML = "MENU";
    }
}

btnToggle.addEventListener("click", navToggler);