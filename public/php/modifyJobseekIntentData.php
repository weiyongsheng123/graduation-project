<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_POST["Id"];
  $state = $_POST["state"];
  $area = $_POST["area"];
  $industry = $_POST["industry"];
  $occupation = $_POST["occupation"];
  $salary = $_POST["salary"];
  $nature = $_POST["nature"];
  $mysqli = mysqli_connect('w.rdc.sae.sina.com.cn','0x4xjo11y0','2yw131w34z324wiy1wjzhzzk1ii5i55ymj4ihik4','app_recruit') or die('连接失败');
  $sql = "UPDATE `intent` SET state = '{$state}' , area = '{$area}' , industry = '{$industry}' , occupation = '{$occupation}' , salary = '{$salary}' , nature = '{$nature}' WHERE owner = '{$Id}' ";
  $result = $mysqli->query($sql);
  if ($result) {
    echo true;
  }
  else {
    echo false;
  }
?>