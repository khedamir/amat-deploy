const modalFilter = document.querySelector("#modal-filter");
const modalFilterClose = modalFilter.querySelector(".modal-header__button");
const filterButton = document.querySelector("#filter-button");

filterButton.addEventListener("click", () => {
  modalFilter.classList.add("is--active");
  backdrop.classList.add("is--active");
  document.body.classList.add("overflow-hidden");
});

modalFilterClose.addEventListener("click", () => {
  modalFilter.classList.remove("is--active");
  backdrop.classList.remove("is--active");
  document.body.classList.remove("overflow-hidden");
});

const productSwiper = new Swiper(".category-product__swiper.swiper", {
  loop: true,
  navigation: {
    nextEl: ".category-product__swiper .swiper-button-next",
    prevEl: ".category-product__swiper .swiper-button-prev",
  },
});

// Счетчик на товары в корзине
const counters = document.querySelectorAll("[data-counter]");

if (counters) {
  counters.forEach((counter) => {
    counter.addEventListener("click", (e) => {
      const target = e.target;

      if (target.closest(".counter__button")) {
        let value = parseInt(
          target.closest(".counter").querySelector("input").value
        );

        if (target.classList.contains("counter__button--plus")) {
          value++;
        } else {
          --value;
        }

        if (value <= 1) {
          value = 1;
        }
        target.closest(".counter").querySelector("input").value = value;
      }
    });
  });
}

// удаляем из корзины товар

// Получаем все элементы с классом "cart__product-delete"
let deleteButtons = document.querySelectorAll(".cart__product-delete");

// Добавляем обработчик клика к каждой кнопке удаления
deleteButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Получаем родительский элемент (в данном случае, блок .cart__item)
    let cartItem = this.closest(".cart__item");

    // Проверяем, что родительский элемент найден, прежде чем удалять
    if (cartItem) {
      // Удаляем родительский элемент
      cartItem.remove();
    }
  });
});
