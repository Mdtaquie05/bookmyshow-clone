const cityBtn = document.getElementById("cityBtn");
const cityMenu = document.getElementById("cityMenu");
const selectedCity = document.getElementById("selectedCity");
const cities = document.querySelectorAll(".city");


// Dropdown open / close
cityBtn.addEventListener("click", function () {

    cityMenu.classList.toggle("active");

});


// City select
cities.forEach(function(city) {

    city.addEventListener("click", function() {

        selectedCity.textContent = city.textContent;

        cityMenu.classList.remove("active");

    });

});

// Slider Section

let currentSlide = 0;

const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {

    currentSlide = index;

    slides.style.transform = `translateX(-${index * 33.333}%)`;

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[index].classList.add("active");
}


// Next button

document.querySelector(".next").addEventListener("click", () => {

    currentSlide++;

    if (currentSlide > 2) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});


// Previous button

document.querySelector(".prev").addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = 2;
    }

    showSlide(currentSlide);
});


// Dots

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        showSlide(index);
    });

});

// Automatic slider ke liye

setInterval(() => {

    currentSlide++;

    if (currentSlide > 2) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 3000);

//    MOVIE CARD CAROUSEL

const movieContainer = document.querySelector(".movie-container");
const movieCards = document.querySelectorAll(".movie-card");
const nextButton = document.querySelector(".movie-next");
const prevButton = document.querySelector(".movie-prev");

let currentIndex = 0;

function visibleCards() {
    if (window.innerWidth <= 450) {
        return 1;
    } else if (window.innerWidth <= 700) {
        return 2;
    } else if (window.innerWidth <= 1000) {
        return 3;
    } else {
        return 5;
    }
}

function updateMovieSlider() {
    const cardsToShow = visibleCards();
    const maxIndex = Math.max(0, movieCards.length - cardsToShow);

    /* Screen resize hone par index valid rakho */
    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    const firstCard = movieCards[0];
    const cardWidth = firstCard.offsetWidth;

    const containerStyle = window.getComputedStyle(movieContainer);
    const gap = parseFloat(containerStyle.gap) || 0;

    const moveDistance = currentIndex * (cardWidth + gap);

    movieContainer.style.transform = `translateX(-${moveDistance}px)`;

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex >= maxIndex;
}

/* Right arrow */
nextButton.addEventListener("click", () => {
    const cardsToShow = visibleCards();
    const maxIndex = movieCards.length - cardsToShow;

    currentIndex = Math.min(currentIndex + cardsToShow, maxIndex);
    updateMovieSlider();
});

/* Left arrow */
prevButton.addEventListener("click", () => {
    const cardsToShow = visibleCards();

    currentIndex = Math.max(currentIndex - cardsToShow, 0);
    updateMovieSlider();
});

/* Mobile/tablet/Desktop resize handle */
window.addEventListener("resize", updateMovieSlider);

/* Page load par first 5 cards dikhao */
updateMovieSlider();



/* =========================
   EVENT CARD CAROUSEL
========================= */

const eventContainer = document.querySelector(".eventContainer");
const eventCards = document.querySelectorAll(".eventCard");
const eventNextButton = document.querySelector(".eventNext");
const eventPrevButton = document.querySelector(".eventPrev");

let eventCurrentIndex = 0;

function visibleEventCards() {
    if (window.innerWidth <= 450) {
        return 1;
    } else if (window.innerWidth <= 700) {
        return 2;
    } else if (window.innerWidth <= 1000) {
        return 3;
    } else {
        return 5;
    }
}

function updateEventSlider() {
    const cardsToShow = visibleEventCards();
    const maxIndex = Math.max(0, eventCards.length - cardsToShow);

    if (eventCurrentIndex > maxIndex) {
        eventCurrentIndex = maxIndex;
    }

    const firstEventCard = eventCards[0];
    const cardWidth = firstEventCard.offsetWidth;

    const eventStyle = window.getComputedStyle(eventContainer);
    const gap = parseFloat(eventStyle.gap) || 0;

    const moveDistance = eventCurrentIndex * (cardWidth + gap);

    eventContainer.style.transform = `translateX(-${moveDistance}px)`;

    eventPrevButton.disabled = eventCurrentIndex === 0;
    eventNextButton.disabled = eventCurrentIndex >= maxIndex;
}

/* Right arrow */
eventNextButton.addEventListener("click", () => {
    const cardsToShow = visibleEventCards();
    const maxIndex = eventCards.length - cardsToShow;

    eventCurrentIndex = Math.min(eventCurrentIndex + cardsToShow, maxIndex);

    updateEventSlider();
});

/* Left arrow */
eventPrevButton.addEventListener("click", () => {
    const cardsToShow = visibleEventCards();

    eventCurrentIndex = Math.max(eventCurrentIndex - cardsToShow, 0);

    updateEventSlider();
});

/* Responsive screen resize */
window.addEventListener("resize", updateEventSlider);

/* Starting position */
updateEventSlider();