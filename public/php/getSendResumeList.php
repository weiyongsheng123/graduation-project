<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $jobseekId = $_POST['jobseekId'];
  $mysqli = mysqli_connect('localhost','root','root','recruit');
  $sql = " SELECT * from `apply` WHERE jobseekId='{$jobseekId}'";
  $res = $mysqli->query($sql);
  $data = array();
  while ($result = mysqli_fetch_assoc($res)) {
    $result['key'] = $result['Id'];
    array_push($data,$result);
  }
  echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>
