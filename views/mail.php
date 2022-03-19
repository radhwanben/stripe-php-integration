<?php

include 'includes/header.php';

?>
    <nav class="navbar">
        <div class="navbar--container">
            <div class="navbar__logo">
                <img src="logo.png" alt="logo" id="logo">
            </div>
            <div class="navbar__items">
                <div class="dropdown">
                    <button class="dropbtn">Immobilier<i class="fa-solid fa-caret-down"></i></button>
                    <div class="dropdown-content">
                        <a href="https://the-dubai-life.com/immobilier/">Immobilier à Dubai</a>
                        <a href="https://the-dubai-life.com/nos-biens-immobiliers/">Nos biens Immobiliers</a>
                        <a href="https://the-dubai-life.com/formulaire/">Formulaire d'interet pour un bien immobilier</a>
                    </div>
                </div>
                <div class="here">
                    <a href="https://the-dubai-life.com/immobilier/">Immobilier à Dubai</a>
                    <a href="https://the-dubai-life.com/nos-biens-immobiliers/">Nos biens Immobiliers</a>
                    <a href="https://the-dubai-life.com/formulaire/">Formulaire d'interet pour un bien immobilier</a>
                </div>
                <div class="links">
                    <a href="https://the-dubai-life.com/expatriation/">S'installer à Dubai</a>
                    <a href="https://the-dubai-life.com/creer-une-entreprise/">Business</a>
                    <a href="https://the-dubai-life.com/investir/">Investir</a>
                </div>
            </div>
            <div class="navbar__contacts">
                <div class="open">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div class="close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <a href="tel:+971585823822"><i class="fa-solid fa-phone"></i></a>
                <a href="https://api.whatsapp.com/send/?phone=%2B971585823822&text&app_absent=0"><i
                        class="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    </nav>


    <div class="mainsection">
        <div class="successcard">
            <h1>Félicitation !</h1>
            <p>votre paiement est effectué avec succès</p>
            <i class="fa-solid fa-circle-check"></i>
        </div>
            <div class="details">
                <div class="detailLine">
                    <div class="title">Email</div>
                    <div id="succEmail"></div>
                </div>
                <div class="detailLine">
                    <div class="title">Nombre total de tickets</div>
                    <div id="nbrTicket"></div>
                </div>
                <div class="detailLine">
                    <div class="title">Facture</div>
                    <div id="facture"></div>
                </div>
            </div>
            <div class="sharedGif">
                <img src="../assets/images/ticketgif.gif" alt="golden_ticket" />
                <p>Partagez avec Vos Proches : </p>
                <div class="sharebuttons">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa-brands fa-whatsapp"></a>
                </div>
            </div>
    </div>

    <?php
    include './includes/footer.php';
?>