console.clear();

const buttonModal = document.querySelector(`#button-js`);

const modalWindow = document.querySelector(`#modal-js`);

const buttonBurger = document.querySelector(`#navbar-burger-js`);

const navbarMobile = document.querySelector("#navbar-mobile-js");

buttonModal.addEventListener("click", function () {
  modalWindow.classList.add("show");
});

modalWindow.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("modal") ||
    event.target.classList.contains("modal__wrap") ||
    event.target.tagName === "svg"
  ) {
     modalWindow.classList.remove("show");
  }
});

buttonBurger.addEventListener("click", function () {
    buttonBurger.classList.toggle("active");
    navbarMobile.classList.toggle("hidden");
    document.body.classList.add("no-scroll")
})

window.addEventListener("resize", function (){
    buttonBurger.classList.remove("active");
    navbarMobile.classList.add("hidden");
    document.body.classList.remove("no-scroll")
})