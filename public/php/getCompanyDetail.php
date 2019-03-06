<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_POST['Id'];
  $mysqli = mysqli_connect('localhost','root','root','recruit');
  $sql = "SELECT * from `company` WHERE Id='{$Id}'";
  $res = $mysqli->query($sql);
  $result = mysqli_fetch_assoc($res);
  if ($result) {
    echo json_encode($result,JSON_UNESCAPED_UNICODE);
  }
  else {
    echo false;
  }
?>