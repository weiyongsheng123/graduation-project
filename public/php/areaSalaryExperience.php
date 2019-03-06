<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "SELECT * from `data`";
  $res = $mysqli->query($sql);
  $data = array();
  while ($row = mysqli_fetch_row($res)) {
    $list = array();
    for ($i=2;$i<count($row);$i++) {
      if ( $row[$i] ) {
        array_push($list,$row[$i]);
      }
      else {
        break;
      }
    }
    array_push($data,$list);
  }
  echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>