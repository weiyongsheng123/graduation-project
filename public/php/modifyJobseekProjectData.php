<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_POST["Id"];
  $project = $_POST["project"];
  $time = $_POST["time"];
  $duty = $_POST["duty"];
  $desc = $_POST["desc"];
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "INSERT INTO `project`(`owner`,`project`,`time`,`duty`,`desc`) VALUES ('{$Id}','{$project}','{$time}','{$duty}','{$desc}')";
  $result = $mysqli->query($sql);
  if ($result) {
    echo true;
  }
  else {
    echo false;
  }
?>