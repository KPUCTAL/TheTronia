const body = document.querySelector('body')
let bodyheight = body.getBoundingClientRect().height
const footer = document.getElementById('section')
const how = document.getElementById('how')
const imgs = document.getElementById('imgs')
let wh = window.innerHeight/2
let wh2 = window.innerHeight/2.5
let wh3 = window.innerHeight/1.4

// window.onscroll = function () {
//     if (window.pageYOffset>wh2) {
//         footer.classList.add('s2')
//         document.getElementById('how').style.opacity='1'
//         console.log('asd')
//     }
//     else if (window.pageYOffset<wh2) {
//         footer.classList.remove('s2')
//         document.getElementById('how').style.opacity='0'
//     }
//     else if (window.pageYOffset>wh) {
//         footer.classList.add('s2')
//         document.getElementById('section').style.opacity='1'
//     }
//     else if (window.pageYOffset<wh) {
//         footer.classList.remove('s2')
//         document.getElementById('section').style.opacity='0'
//     }
//     else if (window.pageYOffset>wh3) {
//         footer.classList.add('s2')
//         document.getElementById('imgs').style.opacity='1'
//     }
//     else if (window.pageYOffset<wh3) {
//         footer.classList.remove('s2')
//         document.getElementById('imgs').style.opacity='0'
//     }
// }


let currentSlide = 1;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

setInterval(nextSlide, 3000); // перелистывание каждые 2 секунды