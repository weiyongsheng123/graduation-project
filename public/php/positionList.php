<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "SELECT * from `position`";
  $data = array();
  $res = $mysqli->query($sql);
  while ($row = mysqli_fetch_row($res)) {
    $grandPa = array();
    $grandPa['value'] = $row[1];
    $grandPa['label'] = $row[1];
    $grandPa['children'] = array();
    for ($i=2;$i<10;$i++) {
      if ($row[$i]) {
        $parent = array();
        $parent['value'] = $row[$i];
        $parent['label'] = $row[$i];
        $parent['children'] = array();
        $children = array();
        $children = explode('*',$row[$i+8]);
        for ($j=0;$j<count($children);$j++) {
          $son = array();
          $son['value'] = $children[$j];
          $son['label'] = $children[$j];
          array_push($parent['children'],$son);
        }
      }
      else {
        break;
      }
      array_push($grandPa['children'],$parent);
    }
    array_push($data,$grandPa);
  }
  echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>