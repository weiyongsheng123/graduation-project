<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $title = $_POST["title"];
  $content = $_POST["content"];
  $time = $_POST["time"];
  $name = $_POST["name"];
  $mysqli = mysqli_connect('w.rdc.sae.sina.com.cn','0x4xjo11y0','2yw131w34z324wiy1wjzhzzk1ii5i55ymj4ihik4','app_recruit') or die('连接失败');
  $sql = "INSERT INTO `feedback`(`submitPerson`,`title`,`content`,`time`) VALUES ('{$name}','{$title}','{$content}','{$time}')";
  if ($mysqli->query($sql)) {
    echo true;
  }
  else {
    echo false;
  }
  ?>