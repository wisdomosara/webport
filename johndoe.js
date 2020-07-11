
AOS.init();
let navLinks = document.querySelectorAll(".nav-item")

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        link.classList.add("active")
    })
})