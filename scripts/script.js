const filters = document.querySelectorAll(".sol__filter ");
const solItems = document.querySelectorAll(`.sol__item`);
const caseBtns = document.querySelectorAll(".case__btn");
const comboxTop = document.querySelector(".combobox__top");
const combox = document.querySelector(".combobox");

comboxTop.addEventListener("click", () => {
  combox.classList.toggle("combobox-active");
});
handleCategory(filters[0]);

filters.forEach((item) => {
  item.onclick = function () {
    filters.forEach((item) => {
      item.classList.remove("active");
    });
    handleCategory(item);
  };
});

caseBtns.forEach((item) => {
  item.onclick = handleCaseActive;
});

function handleCategory(item) {
  item.classList.add("active");
  let value = item.dataset.value;

  solItems.forEach((item) => {
    if (item.classList.contains(value)) {
      item.classList.add("sol__item-active");
    } else {
      item.classList.remove("sol__item-active");
    }
  });
}

function handleCaseActive(event) {
  const item = event.target.closest(".case__item");
  item.classList.toggle("case__item-active");
}
