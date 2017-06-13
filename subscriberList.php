<?php

//Including the requird config file for making database connections 
include 'INCLUDES/config.php';

// Storing the details eneterd by the user into variables
$subscriber_email = $_POST['subscriber_email'];

// Setting the mail parameters
$body = nl2br("Message: .$subscriber_email");//Body of the message
$headers =  'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'From: Bhuvan_Singh' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 


 //To check if any field is empty
if(empty($subscriber_email)){
      echo 'Please enter valid email address.';
}else{
      //Queries to store the uer data into database 

      $sql = "INSERT INTO sublist (sub_email_id) VALUES ('$subscriber_email')";
      $result = mysqli_query($con,$sql);      

      //To check if the query and connection were successful or not

      if($result){
            //Callin the mail function and checking if the mail is succefully sent or not
            if(!mail("bhuvansingh206@gmail.com","New Subscription",$body,$headers)){
                  echo 'The messgae was not send. Please try again.';
            }else {
                  echo "success";
            }           
      }else {
             echo 'The messgae was not send. Please try again.';
      }
}