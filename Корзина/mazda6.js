
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}


const openPopup = document.querySelector('.testdrive'),
closePopup = document.querySelector('.pop_up-close'),
closePopupBtn = document.querySelector('.pop_up-close-btn'),
popup = document.querySelector('.pop_up');

openPopup.addEventListener('click', function(e){
  e.preventDefault();
  popup.classList.add('active');
})

closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
})
closePopupBtn.addEventListener('click', () => {
  popup.classList.remove('active');
})

const btn = document.querySelector('.pop_up-btn'),
submit = document.querySelector('.pop_up-submit'),
popUpBody = document.querySelector('.pop_up-body');

btn.onclick = () => {
  popUpBody.style.display = 'none';
  submit.style.display = 'block';
  closePopupBtn.onclick = () => {
    popUpBody.style.display = 'flex';
    submit.style.display = 'none';
  }
  return false;
}
