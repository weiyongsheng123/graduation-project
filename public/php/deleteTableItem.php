<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_POST['Id'];
  $table = $_POST['table'];
  $mysqli = mysqli_connect('localhost','root','root','recruit');
  $sql = "DELETE FROM `{$table}` WHERE Id='{$Id}'";
  $res = $mysqli->query($sql);
  if ($res) {
    echo true;
  }
  else {
    echo false;
  }
?>