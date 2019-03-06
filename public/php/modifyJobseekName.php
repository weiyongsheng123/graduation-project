<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $name = $_POST["name"];
  $sex = $_POST["sex"];
  $age = $_POST["age"];
  $area = $_POST["area"];
  $experience = $_POST["experience"];
  $telNumber = $_POST["telNumber"];
  $email = $_POST["email"];
  $Id = $_POST["Id"];
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "UPDATE `jobseeker` SET name = '{$name}' , email = '{$email}' , telNumber = '{$telNumber}' , sex = '{$sex}' , age = '{$age}' , experience = '{$experience}' , area = '{$area}' WHERE Id = '{$Id}' ";
  $result = $mysqli->query($sql);
  if ($result) {
    echo true;
  }
  else {
    echo false;
  }
?>