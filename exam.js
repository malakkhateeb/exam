// add the counter of cart when click the button buy 
var cart = document.querySelector('.cart-num');
function addTocart() {
    let oldCart = +cart.innerHTML;
    const newCart = oldCart + 1;
    cart.innerHTML = newCart;

}
// alert when click on linux pic
function alertMe(element) {
    alert('This game supposed to be linux');
}
// slider section 
let slideIndex = 1;
showSlides(slideIndex);

// Control the previous and next buttons
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Control the lines in the middle
function currentSlide(n) {
    showSlides(slideIndex = n);

}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}