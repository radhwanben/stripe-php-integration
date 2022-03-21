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

let successEmail = document.getElementById("succEmail");
let successPhone = document.getElementById("succPhone");
let successFacture = document.getElementById("succFacture");
let nbrTickets = document.getElementById("succTickets");
// let ticketBtn = document.getElementById("tickets");
let notif = document.querySelector(".successnotif");
let notifMsg = document.querySelector(".notifMsg");
let closeModel = document.getElementById("closeModel");

// let responseData = {
//   email: "example@example.com",
//   phone: "21635226887",
//   facture: "https://google.com",
//   number_of_tickets: "5",
//   tickets: [
//     "123 456 789",
//     "123 456 789",
//     "123 456 789",
//     "123 456 789",
//     "123 456 789",
//   ],
// };

// let showTickets = `<option value="" disabled selected>Your tickets list</option>`;

// responseData.tickets.map((e, index) => {
//   showTickets += `<div class="notifLine">
//             <img src="../assets/images/ticket.png" alt="ticket" />
//             <p>Ticket N° <span>${index + 1}</span> :</p>
//             <p class="ticketnumber">${e}</p>
//           </div>`;
// });

// successEmail.innerText = responseData.email;
// successPhone.innerText = responseData.phone;
// successFacture.innerHTML = `<a href="${responseData.facture}" target="_blank">ma facture</a>`;
// nbrTickets.innerText = responseData.number_of_tickets;
// notifMsg.innerHTML = showTickets;

// ticketBtn.addEventListener("click", () => {
//   notif.style.visibility = "visible";
// });

closeModel.addEventListener("click", () => {
  notif.style.visibility = "hidden";
});
