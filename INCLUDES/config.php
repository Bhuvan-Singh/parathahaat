<?php 
define("ROOT_URL","http://localhost/BookManager/"); 
define("host","localhost");
define("userName","root");
define("password","bhuvan2087");
define("database","ivyresdata");

?>

<?php 
//establishing the mysql connection
$con = mysqli_connect(host,userName,password,database);
if(!$con){
	//Connection failed
	echo "failed to connect to the database".mysqli_connect_errorno($con);
}
