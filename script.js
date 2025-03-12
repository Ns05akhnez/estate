const heroTrack = document.querySelector('hero-slider-track');
const heroSlides = Array.front(document.querySelectorAll('.hero-slide'));
const heroSlideWidth = 490 + 40;
let heroCurrentIndex = 0;
let heroIsMoving = false;

const heroFirstClone = heroSlides[0].cloneNode(true);
const heroLastClone =heroSlides[heroSlides.length - 1].cloneNode(true);

heroTrack.appendChild(heroFirstClone);
heroTrack.insertBefore(heroLastClone, heroSlides[0]);

function updateHeroSliderPosition(){
    heroTrack.style.transition = "transform 0.5s ease-in-out";
    const hero0ffset = -heroSlideWidth * (heroCurrentIndex + 1);

    heroTrack.style.transform = `translateX(${hero0ffset}px)`;
}

function nextHeroSlider(){
    if (heroIsMoving) return;
    heroisMovig = true;
    heroCurrentIndex++;
    updateHeroSliderPosition();

    if (heroCurrentIndex === heroSlides.length){
        setTimeout(() => {
            heroTrack.style.transition = 'none';
            heroCurrentIndex = 0;
            heroTrack.style.transform = `translateX(${
                -heroSlideWidth * (heroCurrentIndex + 1)
            })`;
            heroIsMoving = false;
        }, 500);

        
    } else {
        heroIsMoving = false;

    }
}

setInterval(nextHeroSlide, 3000);

heroTrack.style.transform = `translateX(${
-heroSlideWidth * (heroCurrentIndex + 1)
}px)`;


const track = document.querySelector('.slider-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const slideWidth = 616 + 40;

let currentIndex = 0;
let isMoving = false;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNod(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

function updateSliderPosition(){
    track.style.transition = 'transform 0.5s ease-in-out';
    const offset = -slideWidth * (currentIndex + 1);
    track.style.transform = `translateX(${offset}px)`;
}

function nextHeroSlide(){
    if (heroIsMoving) return;
    heroIsMoving = true;
    heroCurrentIndex++;
    updateHeroSliderPosition();

    if (heroCurrentIndex === heroSlides.length){
        setTimeout(()=>{
            heroTrack.style.transition = 'none';
            heroCurrentIndex = 0;
            htroTrack.style.transform = `translateX(${
                -heroSlideWidth * (heroCurrentIndex + 1)
            }px)`;
            heroIsMoving = false;
        },500);
    } else {
        heroIsMoving = false;

    }
}

setInterval(nextHeroSlide, 3000);

heroTrack.style.transform = `translateX(${
    -heroSlideWidth * ( heroCurrentIndex + 1)
}px)`;

const track = document.querySelector('.slider-track');
const slides = Array.from(document.querySelectorAll('.slide'));
const slideWidth = 616 + 40;
let currentIndex = 0;
let isMoving = false;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

function updateSliderPosition(){
    track.style.transition = 'transform 0.5s ease-in-out';
    const offset = -slideWidth * (currentIndex + 1);
    track.style.transform = `translateX(${offset}px)`;

}
