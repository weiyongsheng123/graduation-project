<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_POST['Id'];
  if ($_FILES['file']) {
    $road = '../files/word/J'.$Id.$_FILES['file']['name'];
    $roadSql = 'https://recruit.applinzi.com/files/word/J'.$Id.$_FILES['file']['name'];
    move_uploaded_file($_FILES['file']['tmp_name'],$road);
    $mysqli = mysqli_connect('w.rdc.sae.sina.com.cn','0x4xjo11y0','2yw131w34z324wiy1wjzhzzk1ii5i55ymj4ihik4','app_recruit') or die('连接失败');
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