<?php
    $servername='localhost';
    $username='root';
    $password='phphaslo';
    $dbname = "userskl";
    $db = new mysqli($servername, $username, $password, $dbname);
    $conn=mysqli_connect($servername,$username,$password,"$dbname");
      if(!$conn){
          die('Could not Connect MySql Server:');
        }
  // require_once 'functions.php';

  ?>
