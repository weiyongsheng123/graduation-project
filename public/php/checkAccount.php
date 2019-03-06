<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $account = $_POST['account'];
  $password = $_POST['password'];
  $type = $_POST['type'];
  $pattern = $_POST['pattern'];
  $mysqli = mysqli_connect('localhost','root','root','recruit');
  if ($pattern === '企业端') {
    if ($type === 'email') {
      $sql = "SELECT * from `company` WHERE email='{$account}'";
    }
    else {
      $sql = " SELECT * from `company` WHERE telNumber='{$account}'";
    }
  }
  else {
    if ($type === 'email') {
      $sql = "SELECT * from `jobseeker` WHERE email='{$account}'";
    }
    else {
      $sql = " SELECT * from `jobseeker` WHERE telNumber='{$account}'";
    }
  }
  $res = $mysqli->query($sql);
  if ($result = mysqli_fetch_assoc($res)) {
    if ($result['password'] === $password) {
      echo json_encode($result,JSON_UNESCAPED_UNICODE);
    }
    else {
      echo '1';
    }
  }
  else {
    echo '2';
  }
?>