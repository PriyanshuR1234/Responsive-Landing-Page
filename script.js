
// Add  event to change navbar background color
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
    // const navbar1=this.document.getElementById("navbar");
    // if
});
