<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $name = $_GET["name"];
  $legalName = $_GET["legalName"];
  $area = $_GET["area"];
  $direction = $_GET["direction"];
  $beginTime = $_GET["beginTime"];
  $scale = $_GET["scale"];
  $desc = $_GET["desc"];
  $Id = $_GET["Id"];
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "UPDATE `company` SET name = '{$name}' , legalName = '{$legalName}', area = '{$area}' , direction = '{$direction}' , beginTime = '{$beginTime}' , scale = '{$scale}' , `desc` = '{$desc}' WHERE Id = '{$Id}' ";
  if($_FILES['file']) {
    $file_tmp = iconv("UTF-8","gb2312", $_FILES['file']['name']);
    $road = './files/image/C'.$Id.$file_tmp;
    $roadSql = 'http://127.0.0.1:85/files/image/C'.$Id.$_FILES['file']['name'];
    move_uploaded_file($_FILES['file']['tmp_name'],$road);
    $sql = "UPDATE `company` SET name = '{$name}' , area = '{$area}' , direction = '{$direction}' , beginTime = '{$beginTime}' , scale = '{$scale}' , `desc` = '{$desc}' , logoUrl = '{$roadSql}' WHERE Id = '{$Id}' ";
  }
  $result = $mysqli->query($sql);
  if ($result) {
    echo true;
  }
  else {
    echo false;
  }
?>