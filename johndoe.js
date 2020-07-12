let hand = document.querySelector(".hand")
let img = document.querySelector(".hand img")
let clicked = false;
window.onload = function(){
    hand.addEventListener("click", function() {
    clicked = !clicked
if(clicked == true) {
    img.src = "./images/icons8-delete-30.png"
    console.log("open")
}else {
   img.src = "./images/hamburger.png"
}
})


}


AOS.init();
let navLinks = document.querySelectorAll(".nav-item")

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        link.classList.add("active")
    })
})