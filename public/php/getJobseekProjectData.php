<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_POST['Id'];
  $mysqli = mysqli_connect('w.rdc.sae.sina.com.cn','0x4xjo11y0','2yw131w34z324wiy1wjzhzzk1ii5i55ymj4ihik4','app_recruit') or die('连接失败');
  $sql = " SELECT * from `project` WHERE owner='{$Id}'";
  $res = $mysqli->query($sql);
  $data = array();
  while ($result = mysqli_fetch_assoc($res)) {
    $item =array();
    foreach ($result as $key=>$value) {
      if ($key === 'owner') {
        continue;
      }
      else {
        $item[$key] = $value;
      }
    }
    array_push($data,$item);
  }
  echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>