<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $mysqli = mysqli_connect('w.rdc.sae.sina.com.cn','0x4xjo11y0','2yw131w34z324wiy1wjzhzzk1ii5i55ymj4ihik4','app_recruit') or die('连接失败');
  $sql = "SELECT * FROM `recommendwork`";
  $res = $mysqli->query($sql);
  $data = array();
  $data1 =array();
  $data2 = array();
  while ($result = mysqli_fetch_assoc($res)) {
    if ($result['Id'] === '1') {
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
