<?php

require_once('class/Database.php');

  try {

    $db = Database::connection();

    // sql to create table
    $clients = "CREATE TABLE IF NOT EXISTS clients (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    phone varchar(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50),
    country  VARCHAR(50) NOT NULL,
    zipCode  VARCHAR(50) NOT NULL,
    ticketcode varchar(200) NOT NULL,
    quantity INT(200) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    
    $campaigns = "CREATE TABLE IF NOT EXISTS campaigns (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    phone varchar(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50),
    country  VARCHAR(50) NOT NULL,
    zipCode  VARCHAR(50) NOT NULL,
    quantity INT(200) NOT NULL,
    payment VARCHAR(50) NOT NULL, 
    paye VARCHAR(50) NOT NULL, 
    facture VARCHAR(200) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

    $tickets = "CREATE TABLE IF NOT EXISTS tickets (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    ticketcode varchar(200) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    $tempTable = "CREATE TABLE IF NOT EXISTS tempTickets (
      id VARCHAR(50) PRIMARY KEY,
      email VARCHAR(50) NOT NULL,
      ticketcode varchar(99999) NOT NULL,
      reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )";
    // use exec() because no results are returned
    $db->exec($clients);
    $db->exec($campaigns);
    $db->exec($tickets);
    $db->exec($tempTable);

    echo "Tables created successfully";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$db = null;
?>
