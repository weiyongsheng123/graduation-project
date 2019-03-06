<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $Id = $_POST['Id'];
  $mysqli = mysqli_connect('localhost','root','root','recruit');
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