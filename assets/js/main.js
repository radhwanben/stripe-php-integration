//===NAVBAR=====================================================================================================/
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
//===Video=====================================================================================================/
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
//===Phone Input=====================================================================================================/
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  preferredCountries: ["fr"],
});

/*===========================*/
//===Form Validation=====================================================================================================/
/*===================================*/
let submitBtn = document.getElementById("submitBtn");
let notif = document.querySelector(".notification");
let notifMsg = document.querySelector(".notifMsg");
let spinner = document.querySelector(".spinnercard");
let closeModel = document.getElementById("closeModel");
let form = document.forms["myForm"];
let mail_format = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let phone_format = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
let error = "";

submitBtn.addEventListener("click", (e) => {
  if (form.name.value === "") {
    e.preventDefault();
    error = "Vous devez entrer un nom.";
  } else if (form.email.value === "" || !form.email.value.match(mail_format)) {
    e.preventDefault();
    error = "Vous devez entrer un email valid.";
  } else if (form.phone.value === "" || !form.phone.value.match(phone_format)) {
    error = "Vous devez entrer un numéro de téléphone valid.";
    e.preventDefault();
  } else if (form.street.value === "") {
    e.preventDefault();
    error = "Vous devez entrer une addresse de Rue.";
  } else if (form.city.value === "") {
    e.preventDefault();
    error = "Vous devez entrer votre cité.";
  } else if (form.zipCode.value === "") {
    e.preventDefault();
    error = "Vous devez entrer votre code postal";
  } else if (form.quantity.value < 1) {
    error = "Vous devez entrer un nombre de tickets supérieure à 0.";
    e.preventDefault();
  }
  if (error !== "") {
    notif.style.visibility = "visible";
    notifMsg.innerText = error;
  } else {
    spinner.style.visibility = "visible";
  }
});

closeModel.addEventListener("click", () => {
  error = "";
  notif.style.visibility = "hidden";
});
/*=====================================================*/
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let nbrTicket = document.getElementById("quantity");
let priceInput = document.getElementById("priceT");
let oldP = document.querySelector(".oldP");
let showed = document.getElementById("showPresent");
let totalTickets = document.getElementById("listTick");
let message = document.querySelector(".message");
let popover = document.getElementById("popover__title");
let content = document.querySelector(".popover__content");
let price = 29.9;
let clicked = 0;
var timerID = setTimeout(() => {
  content.style.visibility = "hidden";
  content.style.opacity = "0";
}, 5000);

priceInput.value = price + "€";
nbrTicket.addEventListener("keyup", () => {
  clearTimeout(timerID);
  let ggwp = Number(nbrTicket.value);
  showMessagePrice(ggwp, price);
  timerID = setTimeout(() => {
    content.style.visibility = "hidden";
    content.style.opacity = "0";
  }, 5000);
});

minus.addEventListener("click", () => {
  if (nbrTicket.value > 1) {
    nbrTicket.value--;
  }
  clearTimeout(timerID);
  let ggwp = Number(nbrTicket.value);
  showMessagePrice(ggwp, price);
  clicked = 1;
  timerID = setTimeout(() => {
    content.style.visibility = "hidden";
    content.style.opacity = "0";
  }, 5000);
});

plus.addEventListener("click", () => {
  clearTimeout(timerID);
  nbrTicket.value++;
  clicked = 1;
  let ggwp = Number(nbrTicket.value);
  showMessagePrice(ggwp, price);
  timerID = setTimeout(() => {
    content.style.visibility = "hidden";
    content.style.opacity = "0";
  }, 5000);
});
///////////////////////////////////////////////////////////////////////////////////////////////////
popover.addEventListener("click", () => {
  if (clicked === 0) {
    content.style.visibility = "visible";
    content.style.opacity = "1";
    content.style.transform = "translate(0, -20px)";
    clicked = 1;
  } else {
    content.style.visibility = "hidden";
    content.style.opacity = "0";
    clicked = 0;
  }
});
//All about Price logic (bonus,price,total,text etc ....) :
const showMessagePrice = (quantity, unitPrice) => {
  let bonus = 0;
  let finalPrice = 0;
  let oldPrice = 0;
  let text = "";

  if (quantity < 4) {
    finalPrice = (unitPrice * quantity).toFixed(2);
    bonus = 0;
    text = `achetez <span>${
      4 - quantity
    } </span> autres tickets pour avoir <span>1</span> ticket bonus et économisez <span>${unitPrice.toFixed(
      2
    )}&euro; </span>.`;
    oldP.innerHTML = "";
    totalTickets.innerHTML = `${quantity} tickets.`;
  } else if (quantity < 8) {
    bonus = 1;
    oldPrice = (unitPrice * (quantity + bonus)).toFixed(2);
    finalPrice = (unitPrice * quantity).toFixed(2);
    text = `achetez <span>${
      8 - quantity
    } </span> autres tickets pour avoir <span>3</span> tickets bonus et économisez <span>${(
      3 * unitPrice
    ).toFixed(2)} &euro;</span>.`;
    oldP.innerHTML = `${oldPrice} &euro;`;
    totalTickets.innerHTML = `${quantity} tickets <span>+ ${bonus} ticket offert.</span>`;
  } else {
    bonus = 3 * (Math.floor(quantity / 4) - 1);
    oldPrice = (unitPrice * (quantity + bonus)).toFixed(2);
    finalPrice = (unitPrice * quantity).toFixed(2);
    text = `achetez <span>${
      (Math.floor(quantity / 4) + 1) * 4 - quantity
    }</span> autres tickets pour avoir <span>${
      bonus + 3
    } </span> tickets bonus et économisez <span>${(
      (bonus + 3) *
      unitPrice
    ).toFixed(2)} &euro; </span>.`;
    oldP.innerHTML = `${oldPrice} &euro;`;
    totalTickets.innerHTML = `${quantity} tickets <span>+ ${bonus} tickets offerts.</span>`;
  }
  priceInput.value = finalPrice + "€";
  message.innerHTML = text;
  popover.style.visibility = "visible";
  content.style.visibility = "visible";
  content.style.opacity = "1";
  content.style.transform = "translate(0, -20px)";
  showed.style.display = "block";
};
///////////////////////////////////////////////////////////////////////////////////////////////////////
