let menuBtn = document.querySelector(".open");
let items = document.querySelector(".navbar__items");
let closeBtn = document.querySelector(".close");
let dropBtn = document.querySelector(".dropbtn");
let menuItems = document.querySelector(".dropdown-content");
let here = document.querySelector(".here");
let shown = document.querySelector(".shown");
let logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  window.location = "https://the-dubai-life.com";
});

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    items.classList.add("show");
    closeBtn.style.display = "block";
    menuBtn.style.display = "none";
  });
}
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    items.classList.remove("show");
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
  });
}
let a = 0;
dropBtn.addEventListener("click", () => {
  if (a == 0) {
    here.classList.add("shown");
    a = 1;
  } else {
    here.classList.remove("shown");
    a = 0;
  }
});

/*===========================================================*/

let btn = document.getElementById("pausePlay");
let video = document.getElementById("myVideo");

video.addEventListener("click", () => {
  video.paused ? video.play() : video.pause();
  if (video.paused) {
    btn.classList.remove("fa-circle-pause");
    btn.classList.add("fa-circle-play");
  } else {
    btn.classList.remove("fa-circle-play");
    btn.classList.add("fa-circle-pause");
  }
});
/*===============*/
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

let btn2 = document.getElementById("pausePlay2");
let video2 = document.getElementById("mobileVideo");

video2.addEventListener("click", () => {
  video2.paused ? video2.play() : video2.pause();
  if (video2.paused) {
    btn2.classList.remove("fa-circle-pause");
    btn2.classList.add("fa-circle-play");
  } else {
    btn2.classList.remove("fa-circle-play");
    btn2.classList.add("fa-circle-pause");
  }
});
/*===========================*/

/*===================================*/
let submitBtn = document.getElementById("submitBtn");
let notif = document.querySelector(".notification");
let notifMsg = document.querySelector(".notifMsg");
let closeModel = document.getElementById("closeModel");
let form = document.forms["myForm"];
let mail_format = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let phone_format = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
let error = "";

submitBtn.addEventListener("click", (e) => {
  if (form.email.value === "" || !form.email.value.match(mail_format)) {
    e.preventDefault();
    error = "Vous devez entrer un email valid.";
  } else if (form.phone.value === "" || !form.phone.value.match(phone_format)) {
    error = "Vous devez entrer un numéro de téléphone valid.";
    e.preventDefault();
  } else if (form.ticket.value < 1) {
    error = "Vous devez entrer un nombre de tickets supérieure à 0.";
    e.preventDefault();
  }

  if (error !== "") {
    notif.style.visibility = "visible";
    notifMsg.innerText = error;
  }
});

closeModel.addEventListener("click", () => {
  error = "";
  notif.style.visibility = "hidden";
});
/*=====================================================*/
let bonusPara = document.querySelector(".ticketsBonus");
let secondMsg = document.querySelector(".secondMsg");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let nbrTicket = document.getElementById("quantity");
let priceInput = document.getElementById("priceT");
let price = 15;

priceInput.value = price;
nbrTicket.addEventListener("keyup", () => {
  let ticketNumber = Math.floor(nbrTicket.value / 4);
  if (nbrTicket.value < 4) {
    bonusPara.innerHTML = `Si vous achetez 4 vous aurez 1 ticket bonus`;
    priceInput.value = price * nbrTicket.value;
  } else {
    bonusPara.innerHTML = `<span>${ticketNumber}</span> ticket bonus.
    Si vous achetez ${(ticketNumber + 1) * 4} tickets vous aurez <span>${
      ticketNumber + 1
    }</span> tickets bonus
    `;
    priceInput.value = price * nbrTicket.value;
  }
});

minus.addEventListener("click", () => {
  if (nbrTicket.value > 1) {
    nbrTicket.value--;
  }
  priceInput.value = price * nbrTicket.value;
});

plus.addEventListener("click", () => {
  nbrTicket.value++;
  priceInput.value = price * nbrTicket.value;
});
