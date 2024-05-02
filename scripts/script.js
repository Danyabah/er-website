const filters = document.querySelectorAll(".sol__filter ");
const solItems = document.querySelectorAll(`.sol__item`);
const caseBtns = document.querySelectorAll(".case__btn");
const comboxTop = document.querySelector(".combobox__top");
const combox = document.querySelector(".combobox");
const moreBTns = document.querySelectorAll(".btn-more");
const caseItems = document.querySelectorAll(".case__item");
const logo = document.querySelector(".footer__logo");
const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const headerClose = document.querySelector(".header__close");
const wrapper = document.querySelector(".header__wrapper ");
const links = document.querySelectorAll(".header__link");
const comboItems = document.querySelectorAll(".combobox__item");
const comboValue = document.querySelector(".combobox__value");
const comboInputs = document.querySelectorAll(".checkbox__inp");
const solBtns = document.querySelectorAll(".sol__btns .sol__btn:first-child");

burger.addEventListener("click", (event) => {
  burger.style.display = "none";
  wrapper.style.width = "50%";
  document.body.classList.add("burger-body");
  nav.classList.add("header__nav-active");
});
solBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const id = btn.closest(".sol__item").id;
    handleOpenCb(id);
  });
});
comboItems.forEach((cb, index) => {
  cb.addEventListener("click", () => {
    handleOpenCb(index + 1);
  });
});

function handleOpenCb(id) {
  const inp = document.getElementById("check" + id);
  const label = inp.nextElementSibling;
  comboInputs.forEach((inp) => {
    inp.checked = false;
  });
  inp.checked = true;
  comboValue.innerText = label.innerText;
  console.log(inp);
}

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    closeBurger();
  });
});

headerClose.addEventListener("click", (event) => {
  closeBurger();
});

function closeBurger() {
  burger.style.display = "block";
  wrapper.style.width = "100%";
  document.body.classList.remove("burger-body");
  console.log("ddd");
  nav.classList.remove("header__nav-active");
}

const windowInnerWidth = window.innerWidth;
if (windowInnerWidth < 758) {
  logo.src = "./img/logo-mobile.svg";
}
moreBTns.forEach((btn) => {
  btn.onclick = handleMore;
});

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

function handleMore(event) {
  const card = event.target.closest(".sol__body-info");
  const list = card.querySelector(".sol__list");
  if (event.target.innerText === "Подробнее") {
    event.target.innerText = "Скрыть";
    list.classList.add("sol__list-active");
  } else {
    event.target.innerText = "Подробнее";
    list.classList.remove("sol__list-active");
  }
}
