const recommendationsSlider = new Swiper(".recommendations .swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,

  breakpoints: {
    1024: {
      spaceBetween: 20,
      grid: {
        rows: 1,
        fill: "rows",
      },
    },
    720: {
      spaceBetween: 24,
      grid: {
        rows: 2,
        fill: "rows",
      },
    },
  },
});

const productPhotoList = document.querySelector(".product-photos__list");
const pagination = document.getElementById("pagination");
const checkoutButton = document.querySelector(".product-checkout__button");
const checkoutAddedMessage = document.querySelector(".added-message");

for (let i = 0; i < productPhotoList.children.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("pagination-dot");
  pagination.querySelector(".pagination-dots").appendChild(dot);
}

const dots = document.querySelectorAll(".pagination-dot");

// Обработчик скролла
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Получаем индекс элемента, который виден на экране
        const index = Array.from(productPhotoList.children).indexOf(
          entry.target
        );

        // Устанавливаем активную точку в соответствии с видимым элементом
        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle("pagination-dot__active", dotIndex === index);
        });
      }
    });
  },
  { threshold: 0.7 }
);

// Наблюдаем за каждым элементом списка фото
Array.from(productPhotoList.children).forEach((photo) => {
  observer.observe(photo);
});

function productPhotosSlider() {
  const firstImg = productPhotoList.querySelectorAll(
    ".product-photos__item"
  )[0];
  let isDragStart = false,
    isDragging = false,
    prevPageX,
    prevScrollLeft,
    positionDiff;

  // докрутить слайд
  const autoSlide = () => {
    if (
      productPhotoList.scrollLeft -
        (productPhotoList.scrollWidth - productPhotoList.clientWidth) >
        -1 ||
      productPhotoList.scrollLeft <= 0
    )
      return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth;
    let valDifference = firstImgWidth - positionDiff;

    if (productPhotoList.scrollLeft > prevScrollLeft) {
      return (productPhotoList.scrollLeft +=
        positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
    }
    productPhotoList.scrollLeft -=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  };

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = productPhotoList.scrollLeft;
  };
  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    productPhotoList.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    productPhotoList.scrollLeft = prevScrollLeft - positionDiff;
  };
  const dragStop = () => {
    isDragStart = false;
    productPhotoList.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
    autoSlide();
  };

  productPhotoList.addEventListener("mousedown", dragStart);
  productPhotoList.addEventListener("touchstart", dragStart);
  document.addEventListener("mousemove", dragging);
  productPhotoList.addEventListener("touchmove", dragging);
  document.addEventListener("mouseup", dragStop);
  productPhotoList.addEventListener("touchend", dragStop);
}

productPhotosSlider();

checkoutButton.addEventListener("click", () => {
  checkoutAddedMessage.classList.add("is--active");
  setTimeout(() => {
    checkoutAddedMessage.classList.remove("is--active");
  }, 2500);
});
