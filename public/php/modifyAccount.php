<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $password = $_POST["password"];
  $email = $_POST["email"];
  $telNumber = $_POST["telNumber"];
  $Id = $_POST["Id"];
  $pattern = $_POST["pattern"];
  if ($pattern === '求职者端') {
    check('jobseeker',$telNumber,$email,$password,$Id);
  }
  else {
    check('company',$telNumber,$email,$password,$Id);
  }
  function check($table,$telNumber,$email,$password,$Id) {
    $mysqli = mysqli_connect('w.rdc.sae.sina.com.cn','0x4xjo11y0','2yw131w34z324wiy1wjzhzzk1ii5i55ymj4ihik4','app_recruit') or die('连接失败');
    $sqlTelnumber = "SELECT Id from `$table` WHERE telNumber = '{$telNumber}'";
    $checkTel = false;
    $result = $mysqli->query($sqlTelnumber);
    $res = $result->fetch_row();
    if (count($res)) {
    $checkTel = true;
      echo 'T';
    }
    $sqlEmail = "SELECT Id from `$table` WHERE email = '{$email}'";
    $checkEmail = false;
    $result1 = $mysqli->query($sqlEmail);
    $res1 = $result1->fetch_row();
    if (count($res1)) {
      $checkEmail = true;
      echo 'E';
    }
    if ($checkTel || $checkEmail) {
      exit();
    }
    else {
      $sql = "UPDATE `$table` SET password = '{$password}' , email = '{$email}' , telNumber = '{$telNumber}' WHERE Id = '{$Id}' ";
      $result2 = $mysqli->query($sql);
      if ($result2) {
        echo 'S';
      }
      else {
        echo 'F';
      }
    }
  }
  ?>
