<?php
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
$sql = "INSERT INTO `company`(`name`,`area`,`legalName`,`telNumber`,`email`,`password`) VALUES ('{$name}','{$area}','{$legalName}','{$telNumber}','{$email}','{$password}')";
if ($mysqli->query($sql))
{
  echo true;
}
else
{
  echo false;
}

?>