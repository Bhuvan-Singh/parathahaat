<?php

//Including the requird config file for making database connections 
include 'INCLUDES/config.php';

// Storing the details eneterd by the user into variables
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = nl2br($_POST['message']);

// Setting the mail parameters
$body = nl2br("Name:.$name.\n subject:$number.\n Message: .$message");//Body of the message
$headers =  'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'From: Bhuvan_Singh' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 


 //To check if any field is empty
if(empty($name) or empty($email) or empty($number) or empty($message)){
      echo 'There are errors in your form. Please check.';
}else{
      //Queries to store the uer data into database 

      $sql = "INSERT INTO contactusdata (c_name,c_email,c_number,c_message) VALUES ('$name','$email','$number','$message')";
      $result = mysqli_query($con,$sql);      

      //To check if the query and connection were successful or not

      if($result){
            //Callin the mail function and checking if the mail is succefully sent or not
            if(!mail("bhuvansingh206@gmail.com","New query received",$body,$headers)){
                  echo 'The messgae was not send. Please try again.';
            }else {
                  echo "success";
            }           
      }else {
             echo 'The messgae was not send. Please try again.';
      }
}