<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_POST["Id"];
  $school = $_POST["school"];
  $education = $_POST["education"];
  $major = $_POST["major"];
  $time = $_POST["time"];
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "INSERT INTO `educate`(`owner`,`school`,`education`,`major`,`time`) VALUES ('{$Id}','{$school}','{$education}','{$major}','{$time}')";
  $result = $mysqli->query($sql);
  if ($result) {
    echo true;
  }
  else {
    echo false;
  }
?>
?>