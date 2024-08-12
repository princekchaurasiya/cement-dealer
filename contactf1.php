<?php

if(empty($_POST['namef1'])     ||
   empty($_POST['phonef1']))
	{
    echo "No arguments Provided!";
    return false;
  }

$name = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['namef1'])));
$email = rawurlencode(strip_tags(htmlspecialchars_decode($_POST['emailf1'])));
$phone = rawurlencode(strip_tags(htmlspecialchars_decode("+91".$_POST['phonef1'])));

$formid = "HeaderForm";
$qs = strip_tags(htmlspecialchars_decode($_POST['qsf1']));

$formq = "name=".$name."&email=".$email."&phone=".$phone."&formid=".$formid."&".$qs;

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