<?php

    require 'vendor/autoload.php';
    require 'config/config.php';
    require 'class/Mail.php';
    require 'class/TempTicket.php';
    
    \Stripe\Stripe::setApiKey('sk_test_51KbQ7zELeKscvw05hR8BK7dsl7C5tWFRvTKIau7EgayTzgONsIDJPrFjKQR1qlWoBpWY3HsVCIItL4wSqRnDUBBU005o2ytVOh');

    $session = \Stripe\Checkout\Session::retrieve($_GET['session_id']);
    // sleep(2);
    $customer = \Stripe\Customer::retrieve($session->customer);
    $data = $customer->metadata;
   // echo $data->facture;
   $Tickets = new TempTicket();
    // $tickets =json_decode($data->tickets);
   $tickets = $Tickets->getAllTickets($customer->id);
    //var_dump($tickets);


    // $recieverEmail = $data->email;
    // $subject = "The Dubai Life";
    // $body = "<h1>activating soon</h1>";
    
    // $mailer = new Mail($SMTP_USER,$SMTP_PASSWORD,$SMTP_HOST,$SMTP_PORT);
    // $mailer->sendMail($recieverEmail,$subject,$body);

include 'includes/header.php';
include 'includes/navbar.php';

?>

<link rel="stylesheet" href="../assets/css/successstyle.css" />

    <div class="successnotif">
      <div class="successnotifcard">
        <img src="../assets/images/logo.png" alt="logo" />
        <i class="fa-solid fa-xmark" id="closeModel"></i>
        <div class="notifMsg">
          <?php for ($i = 0; $i < count($tickets); $i++) {  
            echo "<div class='notifLine'>
              <img src='../assets/images/ticket.png' alt='ticket'/>
              <p>Ticket N° <span>$i</span> : </p>
              <p class='ticketnumber'>$tickets[$i]</p>
            </div>";
          }
            ?>
            
        </div>
      </div>
    </div>
<div class="headers">
      <div class="columnOne">
        <div class="jjj"></div>
      </div>
      <div class="columnTwo">
        <h1>Immobilier à Dubai</h1>
      </div>
    </div>
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
            <div id="succEmail">
            <?php echo $data->email; ?>
            </div>
          </div>
          <div class="succLine">
            <div class="title">Phone Num :</div>
            <div id="succPhone">
            <?php echo $data->phone; ?>
            </div>
          </div>
          <div class="succLine">
            <div class="title">Facture :</div>
            <div id="succFacture">
                <a href="<?php  echo $data->facture;?>" target="_blank">ma facture</a>
            </div>
          </div>
          <div class="succLine" id="changed">
            <div class="title">Nombre de tickets :</div>
            <div id="succTickets">
            <?php echo $data->number_of_tickets; ?>
            </div>
            <!-- <div id="tickets">Your ticket list</div> -->
            
            <!-- <?php
            
                // foreach($tickets as $ticket)
                // {
                //     echo "<option>" . $ticket . "</option>";
                // }
            ?> -->
            
            </select>
                      <div class="succLine">
            <p id="emailPara">Consultez votre e-mail pour voir vos tickets.</p>
          </div>
          </div>
        </div>
        <div class="box3">
          <img src="../assets/images/final-2.gif" alt="gif" />
          <div class="shadowP"></div>
          <p>Partagez avec vos proches :</p>
        </div>
        <div class="box4">
          <div class="slink">
            <div class="fb-share-button" 
            
                data-href="http://dubailife3.herokuapp.com/assets/images/final-2.gif" 
                data-layout="button">
            </div>
          </div>
          <div class="slink">
            <i class="fa-brands fa-whatsapp-square"></i>
              <a href=
            "whatsapp://send?text=http://dubailife3.herokuapp.com/assets/images/final-2.gif"
                    data-action="share/whatsapp/share"
                    target="_blank">
                 <p>whatsapp</p>
              </a>
            
          </div>
          <div class="slink">
            <i class="fa-brands fa-twitter"></i>
           <a class="twitter-share-button"
              href="https://twitter.com/intent/tweet?url=http://dubailife3.herokuapp.com/assets/images/final-2.gif"
              data-size="large">
            <p>twitter</p>
           </a>
              
          </div>
        </div>
        <div class="box5">
          <p>Download your ebook from here:</p>
          <button>Download</button>
        </div>
      </div>
    </section>

    <?php
    include './includes/footer.php';
    
?>
<script src="../assets/js/success.js"></script>
