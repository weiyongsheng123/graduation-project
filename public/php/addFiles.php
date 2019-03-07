<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_GET['Id'];
  $road = '../files/image/J'.$Id.$_FILES['file']['name'];
  $roadSql = 'https://recruit.applinzi.com/files/image/J'.$Id.$_FILES['file']['name'];
  move_uploaded_file($_FILES['file']['tmp_name'],$road);
  $mysqli = mysqli_connect('w.rdc.sae.sina.com.cn','0x4xjo11y0','2yw131w34z324wiy1wjzhzzk1ii5i55ymj4ihik4','app_recruit') or die('连接失败');
  $sql = "UPDATE `jobseeker` SET photo = '{$roadSql}' WHERE Id = '{$Id}' ";
  $result = $mysqli->query($sql);
  if ($result) {
    echo 1;
  }
  else {
    echo 2;
  }
?>