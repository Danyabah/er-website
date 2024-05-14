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
const formBtn = document.querySelector(".form__btn");
const agree = document.getElementById("agree");
const mobile = document.querySelectorAll(".header__text");
const mobileLabel = document.querySelectorAll(".header__label");

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: "power2.out",
  duration: 0.5,
});

gsap.from(".header__body > * > *", {
  opacity: 0,
  scale: 1.05,
  stagger: {
    each: 0.1,
  },
});

let solTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sol",
    start: "top 40%",
    end: "bottom bottom",
  },
});

solTl
  .from(".sol__title", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } })
  .from(".sol__about", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } });

let findTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".find",
    start: "top 40%",
    end: "bottom bottom",
  },
});

findTl
  .from(".find__title", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } })
  .from(".find__subtitle", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } })
  .from(".find__btn", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } });

let caseTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".case",
    start: "top 40%",
    end: "bottom bottom",
  },
});

caseTL.from(".case__title", { opacity: 0, scale: 1.05 });
caseTL.from(".case__item", {
  opacity: 0,
  scale: 1.05,
  stagger: { each: 0.1 },
});

let intTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".int",
    start: "top 40%",
    end: "bottom bottom",
  },
});

intTL.from(".int__text > *", {
  opacity: 0,
  scale: 1.05,
  stagger: { each: 0.1 },
});
intTL.from(".int__subtitle, .person__img, .person__name", {
  opacity: 0,
  scale: 1.05,
  stagger: { each: 0.1 },
});

intTL.from(".int__item", {
  opacity: 0,
  scale: 1.05,
  stagger: { each: 0.1 },
});

let techTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".tech",
    start: "top 40%",
    end: "bottom bottom",
  },
});

techTL
  .from(".tech__left > *", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } })
  .from(".tech__right > *", {
    opacity: 0,
    scale: 1.05,
    stagger: { each: 0.1 },
  })
  .from(".tech__card", {
    opacity: 0,
    scale: 1.05,
    stagger: { each: 0.1 },
  });

let footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    start: "top 40%",
    end: "bottom bottom",
  },
});

footerTl
  .from(".footer__title", { opacity: 0, scale: 1.05, stagger: { each: 0.1 } })
  .from(".footer__subtitle", {
    opacity: 0,
    scale: 1.05,
    stagger: { each: 0.1 },
  });

let checked = true;

agree.onchange = (e) => {
  checked = !checked;
  formBtn.disabled = checked;
};

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

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
  const chck = inp.closest(".checkbox");
  const label = chck.querySelector(".checkbox__label");
  comboInputs.forEach((inp) => {
    inp.checked = false;
  });
  inp.checked = true;
  comboValue.innerText = label.textContent;
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

  mobile[2].innerText = "1300 судебных разбирательств";
  mobileLabel[0].remove();

  mobile[3].innerText = "→ 93% выигранных процессов";
  mobileLabel[1].remove();
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
