const body = document.querySelector("body");
const animatedMainPageSections = document.querySelectorAll(".animated-section");

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
  centeredSlides: true,
  slidesPerView: "auto",
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
