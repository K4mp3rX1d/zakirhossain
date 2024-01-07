// Main nav toggle button
let menuToggle = document.querySelector(".nav-toggle");

menuToggle.onclick = () => {
    let collapse = true;
    if (collapse === false) {
        menuToggle.removeAttribute('class', 'collapse')
    } else {
        menuToggle.setAttribute('class', 'collapse')
    }
}