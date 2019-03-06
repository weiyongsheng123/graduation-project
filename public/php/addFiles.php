<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_GET['Id'];
  $file_tmp = iconv("UTF-8","gb2312", $_FILES['file']['name']);
  $road = './files/image/J'.$Id.$file_tmp;
  $roadSql = 'http://127.0.0.1:85/files/image/J'.$Id.$_FILES['file']['name'];
  move_uploaded_file($_FILES['file']['tmp_name'],$road);
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "UPDATE `jobseeker` SET photo = '{$roadSql}' WHERE Id = '{$Id}' ";
  $result = $mysqli->query($sql);
  if ($result) {
    echo 1;
  }
  else {
    echo 2;
  }
?>