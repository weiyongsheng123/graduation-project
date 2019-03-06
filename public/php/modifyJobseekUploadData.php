<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_POST['Id'];
  if ($_FILES['file']) {
    $file_tmp = iconv("UTF-8","gb2312", $_FILES['file']['name']);
    $road = './files/word/J'.$Id.$file_tmp;
    $roadSql = 'http://127.0.0.1:85/files/word/J'.$Id.$_FILES['file']['name'];
    move_uploaded_file($_FILES['file']['tmp_name'],$road);
    $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
    $sql = "INSERT INTO `upload`(`owner`,`href`,`title`) VALUES ('{$Id}','{$roadSql}','{$_FILES['file']['name']}')";
    $result = $mysqli->query($sql);
    if ($result) {
      echo 1;
    }
    else {
      echo 2;
    }
  }
  else {
    echo 0;
  }
?>