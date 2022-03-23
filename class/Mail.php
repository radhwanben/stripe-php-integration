<?php

require('vendor/autoload.php');

use PHPMailer\PHPMailer\PHPMailer;
    

    class Mail{
        private $senderName;
        private $senderEmail;
        private $password;
        private $SMTPhost;
        private $SMTP_PORT;

        public function __construct($senderEmail,$password,$SMTPhost,$SMTP_PORT)
        {
          
            $this->senderEmail = $senderEmail;
            $this->password = $password;
            $this->SMTPhost = $SMTPhost;
            $this->SMTP_PORT = $SMTP_PORT;
        }
        public function sendMail($reciever,$subject, $body){
            try{
            $mail = new PHPMailer(true);
            $mail->CharSet = "UTF-8";
            $mail->SMTPDebug = 0;                               // Enable verbose debug output
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host =  $this->SMTPhost;                            // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = $this->senderEmail;                 // SMTP username
            $mail->Password = $this->password;                           // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = $this->SMTP_PORT;                                    // TCP port to connect to

            $mail->setFrom('admin@the-dubai-life.com', "The Dubai Life");
            $mail->addAddress($reciever);                     // Add a recipient

        
            $mail->isHTML(true);                                  // Set email format to HTML

            $mail->Subject = $subject;
            $mail->Body    = $body;
            $mail->AltBody = $body;
            $mail->send();
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
}
?>