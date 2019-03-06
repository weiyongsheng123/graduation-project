<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "SELECT * FROM `resumeitem`";
  $res = $mysqli->query($sql);
  $data = array();
  while ($result = mysqli_fetch_assoc($res)) {
    array_push($data,$result);
  }
  echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>
