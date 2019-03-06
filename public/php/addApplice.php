<?php
  header("Access-Control-Allow-Origin:*");
  $name = '';
  $prefix = '';
  $telNumber ='';
  $email = '';
  $password = '';
  $name = $_POST["name"];
  $prefix = $_POST["prefix"];
  $telNumber = $_POST["telNumber"];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sqlTelnumber = "SELECT Id from `jobseeker` WHERE telNumber = '{$telNumber}'";
  $checkTel = false;
  $result = $mysqli->query($sqlTelnumber);
  $res = $result->fetch_row();
  if (count($res)) {
    $checkTel = true;
    echo 'T';
  }
  $sqlEmail = "SELECT Id from `jobseeker` WHERE email = '{$email}'";
  $checkEmail = false;
  $result1 = $mysqli->query($sqlEmail);
  $res1 = $result1->fetch_row();
  if (count($res1)) {
    $checkEmail = true;
    echo 'E';
  }
  if ($checkTel || $checkEmail) {
    exit();
  }
  else {
    $sql = "INSERT INTO `jobseeker`(`name`,`prefix`,`telNumber`,`email`,`password`) VALUES ('{$name}','{$prefix}','{$telNumber}','{$email}','{$password}')";
    if ($mysqli->query($sql))
    {
      echo 'S';
      $sql1 = "SELECT Id from `jobseeker` WHERE telNumber = '{$telNumber}' AND email ='{$email}'";
      $res = $mysqli->query($sql1);
      $result = $res -> fetch_row();
      $owner = $result[0];
      $sql2 = "INSERT INTO `intent`(`owner`) VALUES ('{$owner}')";
    }
    else
    {
      echo 'F';
    }
  }
?>
