<?php

  $email = $_POST["email"];
  $name = $_POST["name"];
  $msg = $_POST["msg"];

  $from = "From: $name<$email>\r\nReturn-path: $email";
  $subject = $msg;
  //$success = mail("davis.kimoto@gmail.com", $subject, $msg, $from);
  $success = mail("kduncan@primesystemsinc.com", $subject, $msg, $from);

  /*$data = array( 'success' => $success, 'email' => $email, 'name' => $name, 'msg' => $msg, 'req' => $_REQUEST);

  echo json_encode($data);*/

 ?>
