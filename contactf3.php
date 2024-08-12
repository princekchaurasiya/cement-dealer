<?php

if(empty($_POST['namef3'])     ||
   empty($_POST['phonef3']))
	{
    echo "No arguments Provided!";
    return false;
  }

$name = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['namef3'])));

$phone = rawurlencode(strip_tags(htmlspecialchars_decode("+91".$_POST['phonef3'])));

$formid = "AutoPopUpForm";
$qs = strip_tags(htmlspecialchars_decode($_POST['qsf3']));

$formq = "name=".$name."&phone=".$phone."&formid=".$formid."&".$qs;

$link = "https://hook.eu2.make.com/1dtgt82jsbjqpqrqg3u1okcyhed3d26g?";

$flowq = $link.$formq;

function flowtrig($flowq)
{
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $flowq);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_POST, 1);
  $response = curl_exec($ch);
  curl_close($ch);

  if(strpos( $response, "Accepted" ) !== false)
  {
    header('Location: ./thank-you.php');
    exit();
  }
  else
  {
    header('Location: ./form-submit-failed.php');
    exit();
  }
}
flowtrig($flowq);

?>