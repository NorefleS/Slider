const images = [
  {img: './images/img1.png'}, {img: './images/img2.png'}, {img: './images/img3.png'}
]

let currentIndex = 0;

const img = document.querySelector('.slider')
const dots = document.querySelectorAll('.switching__dot')
const text = document.querySelectorAll('.container1__item')
const prev = document.querySelector('.arrowPrevious')
const next = document.querySelector('.arrowNext')

const setImages = () => {
  img.style.backgroundImage = `url(${images[currentIndex].img})`;
}

const dotSwitch = () => {
  dots.forEach(item => item.classList.remove('active-dot'));
  dots[currentIndex].classList.add('active-dot');
}

const textSwitch = () => {
  text.forEach(item => item.classList.remove('active-item'));
  text[currentIndex].classList.add('active-item');
}

prev.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = 2;
  } else {
    currentIndex -= 1;
  }
  setImages();
  dotSwitch();
  textSwitch();
})

next.addEventListener('click', () => {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  setImages();
  dotSwitch();
  textSwitch();
})

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    setImages();
    dotSwitch();
    textSwitch();
  })
})

text.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    setImages();
    dotSwitch();
    textSwitch();
  })
})