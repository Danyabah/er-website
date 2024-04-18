const filters = document.querySelectorAll(".sol__filter ");
const solItems = document.querySelectorAll(`.sol__item`);
handleCategory(filters[0]);

filters.forEach((item) => {
  item.onclick = function () {
    filters.forEach((item) => {
      item.classList.remove("active");
    });
    handleCategory(item);
  };
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
