<?php
  header("Access-Control-Allow-Origin:*");
  $resumeId = $_POST['resumeId'];
  $jobseekId = $_POST['jobseekId'];
  $companyId = $_POST['companyId'];
  $resumeName = $_POST['resumeName'];
  $jobseekName = $_POST['jobseekName'];
  $jobseekSex = $_POST['jobseekSex'];
  $jobseekAge = $_POST['jobseekAge'];
  $companyName = $_POST['companyName'];
  $time = $_POST['time'];
  $mysqli = mysqli_connect('localhost','root','root','recruit') or die('连接失败');
  $sqlCheck = "SELECT Id FROM `apply` WHERE jobseekId = '{$jobseekId}' AND resumeId = '{$resumeId}'";
  $resCheck = $mysqli->query($sqlCheck);
  $resultCheck = $resCheck->fetch_row();
  if (count($resultCheck)) {
    echo 'E';
  }
  else {
    $sql = "INSERT INTO `apply`(`resumeId`,`jobseekId`,`companyId`,`resumeName`,`jobseekName`,`jobseekSex`,`jobseekAge`,`companyName`,`time`) VALUES ('{$resumeId}','{$jobseekId}','{$companyId}','{$resumeName}','{$jobseekName}','{$jobseekSex}','{$jobseekAge}','{$companyName}','{$time}')";
    if ($mysqli->query($sql))
    {
      echo 'T';
    }
    else
    {
      echo 'F';
    }
  }
?>
