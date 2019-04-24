<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $table = $_POST['table'];
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "SELECT * from `{$table}`";
  $res = $mysqli->query($sql);
  $data = array();
  while ($row = mysqli_fetch_assoc($res)) {
    $row['key'] = $row['Id'];
    foreach($row as $key => $value) {
      if (!$value) {
        $row[$key] = 'null';
      }
    }
    array_push($data,$row);
  }
  echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>