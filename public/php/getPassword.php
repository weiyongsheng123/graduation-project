<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $name = $_POST["name"];
  $email = $_POST["email"];
  $telNumber = $_POST["telNumber"];
  $mysqli = mysqli_connect('w.rdc.sae.sina.com.cn','0x4xjo11y0','2yw131w34z324wiy1wjzhzzk1ii5i55ymj4ihik4','app_recruit') or die('连接失败');
  $sql = "SELECT password FROM `jobseeker` WHERE name = '{$name}' AND email = '{$email}' AND telNumber = '{$telNumber}'";
  $result = $mysqli->query($sql);
  $res = $result->fetch_row();
  if ($res[0]) {
    echo $res[0];
  }
  else {
    echo 0;
  }
  ?>