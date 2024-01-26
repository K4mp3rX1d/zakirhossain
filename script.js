// Generic Toggle function, primarily used for Main Nav toggle button.
function toggler(targetElememnt, keyClass, innerElement, innerElementAlt) {
    // Generic toggler function, works by adding and removing class(keyClass) to the specified elemnent (targetElement) and altering innerHTML (innerElemnt, innerElemntAlt) of the the element on which it is being bined with.

    if (targetElememnt.classList.contains(keyClass)) {
        targetElememnt.classList.remove(keyClass);
        // console.log(this)
        this.innerHTML = innerElementAlt;
    } else {
        targetElememnt.classList.add(keyClass);
        // console.log(this)
        this.innerHTML = innerElement;
    }
}



// Main nav toggler
const btnToggle = document.querySelector(".btn-toggle");
const navItems = document.querySelector(".nav-items");


btnToggle.addEventListener("click", () => toggler(navItems, "collapse", "MENU", "CLOSE"));