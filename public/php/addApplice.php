<?php
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
$sql = "INSERT INTO `jobseeker`(`name`,`prefix`,`telNumber`,`email`,`password`) VALUES ('{$name}','{$prefix}','{$telNumber}','{$email}','{$password}')";
if ($mysqli->query($sql))
{
  echo true;
}
else
{
  echo false;
}

?>