<?php
  header("Access-Control-Allow-Origin:*");
  $name = '';
  $area ='';
  $legalName = '';
  $telNumber = '';
  $email = '';
  $password = '';
  $name = $_POST["name"];
  $area = $_POST["area"];
  $legalName = $_POST["legalName"];
  $telNumber = $_POST["telNumber"];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sqlTelnumber = "SELECT Id from `company` WHERE telNumber = '{$telNumber}'";
  $checkTel = false;
  $result = $mysqli->query($sqlTelnumber);
  $res = $result->fetch_row();
  if (count($res)) {
    $checkTel = true;
    echo 'T';
  }
  $sqlEmail = "SELECT Id from `company` WHERE email = '{$email}'";
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
    $sql = "INSERT INTO `company`(`name`,`area`,`legalName`,`telNumber`,`email`,`password`) VALUES ('{$name}','{$area}','{$legalName}','{$telNumber}','{$email}','{$password}')";
    if ($mysqli->query($sql))
    {
      echo 'S';
    }
    else
    {
      echo 'F';
    }
  }
?>
