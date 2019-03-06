<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "SELECT * FROM `advertisement`";
  $res = $mysqli->query($sql);
  $data = array();
  $data1 =array();
  $data2 = array();
  while ($result = mysqli_fetch_assoc($res)) {
    if ($result['type'] === 'center') {
      array_push($data1,$result);
    }
    else {
      array_push($data2,$result);
    }
  }
  array_push($data,$data1);
  array_push($data,$data2);
  echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>
