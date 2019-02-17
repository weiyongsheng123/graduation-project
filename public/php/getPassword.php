<?php
  header('content-type:text/html;charset=utf-8');
  $name = $_POST["name"];
  $email = $_POST["email"];
  $telNumber = $_POST["telNumber"];
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "SELECT password FROM `jobseeker` WHERE name = '{$name}' AND email = '{$email}' AND telNumber = '{$telNumber}'";
  $result = $mysqli->query($sql);
  $res = $result->fetch_row();
  if ($res[0]) {
    echo $res[0];
  }
  else {
    echo 0;
  }
  ?>