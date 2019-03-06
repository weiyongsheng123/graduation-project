<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_POST['Id'];
  $mysqli = mysqli_connect('localhost','root','root','recruit');
  $sql = " SELECT * from `resumeitem` WHERE companyId='{$Id}'";
  $res = $mysqli->query($sql);
  $data = array();
  while ($result = mysqli_fetch_assoc($res)) {
    $item =array();
    $item['key'] = $result['Id'];
    $item['Id'] = $result['Id'];
    $item['title'] = $result['title'];
    $item['position'] = $result['position'];
    $item['companyName'] = $result['companyName'];
    $item['salary'] = $result['salary'];
    $item['education'] = $result['education'];
    $item['experience'] = $result['experience'];
    $item['area'] = $result['area'];
    $item['numbers'] = $result['numbers'];
    $item['time'] = $result['time'];
    array_push($data,$item);
  }
  echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>