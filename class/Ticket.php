<?php


require 'vendor/autoload.php';
// require 'Database.php';
require_once('Database.php');




class Ticket{

    private $db;
    /**
    * @param [type] $data [description]
    */

    public function __construct()
    {
      $this->db = Database::connection();
    }

    
    public function ticketcodegenrator()
      {
        // return uniqid('dubai-');
        $factory = new RandomLib\Factory;
        $generator = $factory->getMediumStrengthGenerator();
        $ticketcode = $generator->generateString(27, 'abcdefghijklmnopqrstuvwxyz234567');
        return $ticketcode;
      }
      
      
      
      public function addticket($email,$ticketcode)
      {
        $query = $this->db->prepare('INSERT  INTO tickets (email, ticketcode) VALUES (:email, :ticketcode)');
        $query->execute(
          [
          'email' => $email,
          'ticketcode' => $ticketcode
          ]);
        return $query->rowCount();
      }


      // public function addClient($data,$ticketcode)
      // {
      //   $query = $this->db->prepare('INSERT  INTO clients (nom, prenom, email, tel, ticketcode, quantity, address) VALUES (:nom, :prenom, :email, :tel, :ticketcode, :quantity, :address)');
      //   $query->execute(
      //     [
      //     'nom' => $data->name,
      //     'prenom' => $data->prenom,
      //     'email' => $data->email,
      //     'tel' => $data->phone,
      //     'ticketcode' => $ticketcode,
      //     'quantity' => $data->quantity,
      //     'address' => $data->address,
      //     ]);
      //   return $query->rowCount();
      // }

     
}
