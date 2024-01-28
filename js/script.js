const mainHeader = document.querySelector(".main-header");

// content loaded
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", HeaderHandleScroll);

  if (mainHeader.classList.contains("animated")) {
    mainHeader.classList.add("is--active");
  }
});

function HeaderHandleScroll() {
  let scrollTop = window.scrollY;
  if (scrollTop === 0) {
    // Прокрутка вниз
    mainHeader.classList.remove("white-bg--v");
  } else {
    mainHeader.classList.add("white-bg--v");
    // Прокрутка вверх
  }
  return scrollTop;
}

// header
const menuButton = document.querySelector(".main-nav__item--mobile");
const hamburger = document.querySelector(".hamburger");
const menuMobile = document.querySelector(".mobile-menu");
const headerCollectionsItem = document.querySelector(
  ".main-nav__item--collections"
);
const headerCollectionsSubmenu = document.querySelector(
  ".main-header .submenu"
);
const menuMobileToggleItem = document.querySelector(
  ".mobile-nav__item--collection"
);
const menuMobileSubmenu = document.querySelector(".mobile-nav__item--submenu");

headerCollectionsItem.addEventListener("click", () => {
  headerCollectionsSubmenu.classList.toggle("is--active");
  mainHeader.classList.toggle("menu-active--submenu");
});

menuButton.addEventListener("click", () => {
  mainHeader.classList.toggle("menu-active");
  hamburger.classList.toggle("is--active");
  document.body.classList.toggle("scroll-disabled");
});

menuMobileToggleItem.addEventListener("click", () => {
  menuMobileSubmenu.classList.toggle("is--active");
});

// footer
const arrowUp = document.querySelector("#arrow-up");
const footerDesktopItems = document.querySelectorAll(".footer-info__item");
const footerDesktopItemsBody = document.querySelectorAll(
  ".footer-info__body--item"
);

arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

footerDesktopItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    footerDesktopItems.forEach((otherItem, i) => {
      if (otherItem !== item) {
        otherItem.classList.remove("is--active");
        footerDesktopItemsBody[i].classList.remove("is--active");
      }
    });
    item.classList.toggle("is--active");
    footerDesktopItemsBody[index].classList.toggle("is--active");
  });
});

// modals
// search
const modalSearch = document.querySelector("#modal-search");
const modalSearchClose = modalSearch.querySelector(".modal-header__button");
const searchButton = document.querySelector(
  ".main-nav__item--icon.icon-search"
);

// favorites
const modalFavorites = document.querySelector("#modal-favorites");
const modalFavoritesClose = modalFavorites.querySelector(
  ".modal-header__button"
);
const favoritesButton = document.querySelector(
  ".main-nav__item--icon.icon-favor"
);

const modalCart = document.querySelector("#modal-cart");
const modalCartClose = modalCart.querySelector(".modal-header__button");
const cartButton = document.querySelector(".main-nav__item--icon.icon-bag");

const backdrop = document.querySelector(".backdrop");

searchButton.addEventListener("click", () => {
  modalSearch.classList.add("is--active");
  backdrop.classList.add("is--active");
  document.body.classList.add("overflow-hidden");
});

favoritesButton.addEventListener("click", () => {
  modalFavorites.classList.add("is--active");
  backdrop.classList.add("is--active");
  document.body.classList.add("overflow-hidden");
});

cartButton.addEventListener("click", () => {
  modalCart.classList.add("is--active");
  backdrop.classList.add("is--active");
  document.body.classList.add("overflow-hidden");
});

modalSearchClose.addEventListener("click", () => CloseModal(modalSearch));
modalFavoritesClose.addEventListener("click", () => CloseModal(modalFavorites));
modalCartClose.addEventListener("click", () => CloseModal(modalCart));

function CloseModal(item) {
  item.classList.remove("is--active");
  backdrop.classList.remove("is--active");
  document.body.classList.remove("overflow-hidden");
}
