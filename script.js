// Main nav toggle button
const btnToggle = document.querySelector(".btn-toggle");
const navItems = document.querySelector(".nav-items");

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

btnToggle.addEventListener("click", () => toggler(navItems, "collapse", "MENU", "CLOSE"));