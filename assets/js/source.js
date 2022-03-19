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
let ticket = document.getElementById("ticket");
let ticketPara = document.querySelector(".ticketPara");
let ticketBonus = document.querySelector(".tickets");
let pricePara = document.querySelector(".pricePara");
let prix = document.querySelector(".price");
let prixFinale = document.querySelector(".finalPrice");

ticket.addEventListener("keyup", () => {
  let promotion = 0;
  let price = 30;
  let finalPrice = price * (1 - promotion / 100);
  if (ticket.value) {
    ticketPara.style.display = "block";
  }
  let ticketNumber = Math.floor(ticket.value / 4);
  if (ticket.value < 4) {
    ticketBonus.innerText = `Si vous achetez 4 tickets vous aurez 1 ticket bonus`;
  } else {
    ticketBonus.innerText = `${ticketNumber} tickets bonus.
    Si vous achetez ${(ticketNumber + 1) * 4} tickets vous aurez ${
      ticketNumber + 1
    } ticket bonus
    `;
  }
  if (!promotion) {
    pricePara.style.display = "block";
    prix.innerText = finalPrice * ticket.value;
  } else {
    pricePara.style.display = "block";
    prix.style.color = "#94514f";
    prix.innerText = price * ticket.value;
    prix.style.textDecoration = "line-through";
    prixFinale.innerText = finalPrice * ticket.value;
  }
});
/*=======================================================================*/
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
