<?php


require 'vendor/autoload.php';
// require 'Database.php';
require_once('Database.php');




class TempTicket{

    private $db;
    /**
    * @param [type] $data [description]
    */

    public function __construct()
    {
      $this->db = Database::connection();
    }
      
      public function addTempTickets($customer_id, $email,$ticketcode)
      {
        $query = $this->db->prepare('INSERT  INTO tempTickets (id ,email, ticketcode) VALUES (:id, :email, :ticketcode)');
        $query->execute(
          [
          'id'=>$customer_id,
          'email' => $email,
          'ticketcode' => $ticketcode
          ]);
        return $query->rowCount();
      }
      public function getAllTickets($customer_id)
      {
        $query = $this->db->prepare('SELECT ticketcode FROM tempTickets WHERE id=:id');
        $query->execute(
          [
          'id'=>$customer_id,
          ]);
        // return mysqli_fetch_array($query->fetch());
        return json_decode($query->fetch()['ticketcode']);
      }

}