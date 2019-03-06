<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_POST["Id"];
  $company = $_POST["company"];
  $time = $_POST["time"];
  $position = $_POST["position"];
  $salary = $_POST["salary"];
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "INSERT INTO `work`(`owner`,`company`,`time`,`position`,`salary`) VALUES ('{$Id}','{$company}','{$time}','{$position}','{$salary}')";
  $result = $mysqli->query($sql);
  if ($result) {
    echo true;
  }
  else {
    echo false;
  }
?>