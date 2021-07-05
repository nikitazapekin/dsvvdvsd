let slideIndex = 1;
showSlides(slideIndex);
function nextSlide() {
    showSlides(slideIndex +=1);
}
function previousSlide(){
    showSlides(slideIndex -=1);
}
/*function currentSlide() {
    showSlides( slideIndex=n);
} */
function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    if ( n > slides.length) {
        slideIndex = 1;
    }
    if (n<1) {
        slideIndex = slides.length //это чтобы назад шагать
    }
    for (let slide of slides) {  //соединение всех фото в одно
        slide.style.display = "none";
        slides[slideIndex-1].style.display = "block";
    }
}