<?php
  header("Access-Control-Allow-Origin:*");
  header('content-type:text/html;charset=utf-8');
  $title = $_POST["title"];
  $position = $_POST['position'];
  $companyId = $_POST['companyId'];
  $companyName = $_POST['companyName'];
  $salary = $_POST['salary'];
  $education = $_POST['education'];
  $experience = $_POST['experience'];
  $area = $_POST['area'];
  $numbers = $_POST['numbers'];
  $infomation = $_POST['infomation'];
  $request = $_POST['request'];
  $benefits = $_POST['benefits'];
  $detailArea = $_POST['detailArea'];
  $time = $_POST['time'];
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sql = "INSERT INTO `resumeitem`(`title`,`position`,`companyId`,`companyName`,`salary`,`education`,`experience`,`area`,`numbers`,`infomation`,`request`,`benefits`,`detailArea`,`time`) VALUES ('{$title}','{$position}','{$companyId}','{$companyName}','{$salary}','{$education}','{$experience}','{$area}','{$numbers}','{$infomation}','{$request}','{$benefits}','{$detailArea}','{$time}')";
  if ($mysqli->query($sql))
  {
    echo true;
  }
  else
  {
    echo false;
  }
?>
