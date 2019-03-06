<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_POST['Id'];
  $mysqli = mysqli_connect('localhost','root','root','recruit');
  $sql = "DELETE FROM `educate` WHERE Id='{$Id}'";
  $res = $mysqli->query($sql);
  if ($res) {
    echo true;
  }
  else {
    echo false;
  }
?>