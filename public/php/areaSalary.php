<?php
  header('content-type:text/html;charset=utf-8');
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "SELECT * from `data` WHERE chooices = '地区'";
  $res = $mysqli->query($sql);
  $area = $res->fetch_row();
  $sql1 = "SELECT * from `data` WHERE chooices = '月薪'";
  $res1 = $mysqli->query($sql1);
  $salary = $res1->fetch_row();
  $salaryLast = array();
  $areaLast = array();
  for ($i=2;$i<count($salary);$i++) {
    if ( $salary[$i] ) {
      array_push($salaryLast,$salary[$i]);
    }
    else {
      break;
    }
  }
  for ($i=2;$i<count($area);$i++) {
    if ( $area[$i] ) {
      array_push($areaLast,$area[$i]);
    }
    else {
      break;
    }
  }
  $data = array();
  $data[] = $salaryLast;
  $data[] = $areaLast;
  echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>