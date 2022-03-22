<?php

include 'includes/header.php';

?>
<link rel="stylesheet" href="../assets/css/mail.css" />

    <section class="success">
      <div class="successCard">
        <div class="box1">
          <i class="fa-solid fa-circle-check"></i>
          <h1>Félicitation !</h1>
          <p>Votre Paiement est effectué avec succes.</p>
        </div>
        <div class="box2">
          <div class="succLine">
            <div class="title">Email :</div>
            <div id="succEmail">example@example.com</div>
          </div>
          <div class="succLine">
            <div class="title">Phone Num :</div>
            <div id="succPhone">+216 12 345 678</div>
          </div>
          <div class="succLine">
            <div class="title">Facture :</div>
            <div id="succFacture"><a href="#">ma facture</a></div>
          </div>
          <div class="succLine" id="changed">
            <div class="title">Nombre de tickets :</div>
            <div id="succTickets">5</div>
          </div>
        </div>
        <div class="notifMsg">
          <div class="notifLine">
            <img src="../assets/images/ticket.png" alt="ticket" />
            <p>Ticket N° <span>1</span> :</p>
            <p class="ticketnumber">123456789</p>
          </div>
          <div class="notifLine">
            <img src="../assets/images/ticket.png" alt="ticket" />
            <p>Ticket N° <span>2</span> :</p>
            <p class="ticketnumber">123456789</p>
          </div>
          <div class="notifLine">
            <img src="../assets/images/ticket.png" alt="ticket" />
            <p>Ticket N° <span>3</span> :</p>
            <p class="ticketnumber">123456789</p>
          </div>
          <div class="notifLine">
            <img src="../assets/images/ticket.png" alt="ticket" />
            <p>Ticket N° <span>4</span> :</p>
            <p class="ticketnumber">123456789</p>
          </div>
        </div>
        <div class="box3">
          <img src="../assets/images/final-2.gif" alt="gif" />
          <div class="shadowP"></div>
          <p>Partagez avec vos proches :</p>
        </div>
        <div class="box4">
          <div class="slink">
            <i class="fa-brands fa-facebook"></i>
            <p>facebook</p>
          </div>
          <div class="slink">
            <i class="fa-brands fa-whatsapp-square"></i>
            <p>whatsapp</p>
          </div>
          <div class="slink">
            <i class="fa-brands fa-twitter"></i>
            <p>twitter</p>
          </div>
        </div>
        <div class="box5">
          <p>Download your ebook from here:</p>
          <button>Download</button>
        </div>
      </div>
    </section>
  </body>
</html>
