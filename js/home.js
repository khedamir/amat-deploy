const mainVideoBlock = document.querySelector(".home-video");
const body = document.querySelector("body");

const animatedMainPageSections = document.querySelectorAll(".animated-section");

const mapLink = document.querySelector("#map-link");
const map = document.querySelector(".about-amat__map");

mapLink.addEventListener("click", () => {
  mapLink.classList.add("map--active");
  map.classList.add("is--active");
});

const favoriteSwiperOptionsMobile = {
  effect: "coverflow",
  slidesPerView: "auto",
  loop: true,
  speed: 1000,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3.5,
    slideShadows: false,
  },
  pagination: {
    el: ".favorite-shawls__list .swiper-pagination",
  },
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: true,
  },
};

const favoriteSwiperOptionsDesktop = {
  slidesPerView: "auto",
  loop: true,
  speed: 1000,
  spaceBetween: 8,
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: true,
  },
};

let favoritesSwiper;
let perSwiperEffect;

function favoritesSwiperMode() {
  let screenWidth = window.innerWidth;
  let swiperEffect = screenWidth < 768 ? "coverflow" : "slide";
  let options =
    screenWidth < 768
      ? favoriteSwiperOptionsMobile
      : favoriteSwiperOptionsDesktop;

  if (!perSwiperEffect && !favoritesSwiper) {
    perSwiperEffect = swiperEffect;
    favoritesSwiper = new Swiper(".favorite-shawls__list .swiper", options);
    return;
  }

  if (perSwiperEffect !== swiperEffect) {
    perSwiperEffect = swiperEffect;
    if (favoritesSwiper && favoritesSwiper.destroy) {
      favoritesSwiper.destroy(true, true);
    }
    favoritesSwiper = new Swiper(".favorite-shawls__list .swiper", options);
  }
}

window.addEventListener("resize", () => {
  favoritesSwiperMode();
});

document.addEventListener("DOMContentLoaded", () => {
  favoritesSwiperMode();
  setTimeout(() => {
    MainPageHeaderAnimationOn();
  }, 600);
});

function MainPageHeaderAnimationOn() {
  mainVideoBlock.classList.add("is--active");
  mainHeader.classList.add("is--active");
}

window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  animatedMainPageSections.forEach((block) => {
    const blockPosition = block.getBoundingClientRect().top;
    if (blockPosition <= 0.4 * windowHeight) {
      const transfromAnimatedItems = block.querySelectorAll(
        ".transform-text__animated"
      );
      const blockAnimatedItems = block.querySelectorAll(".block__animated");

      transfromAnimatedItems.forEach((item) => {
        item.classList.add("is--active");
      });
      blockAnimatedItems.forEach((item) => {
        item.classList.add("is--active");
      });
    }
  });
});
