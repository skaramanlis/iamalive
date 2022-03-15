<?php
header('Content-Type: text/html; charset=utf-8');

require_once realpath(__DIR__ . '/vendor/autoload.php');

require_once realpath(__DIR__ . '/functions.php');

$data = json_decode(file_get_contents('php://input'), false);
if(isset($_GET['report'])) {
    echo report($data);
} else if(isset($_GET['search'])) {
    echo search($data);
}
else if(isset($_GET['subscribe'])) {
    echo subscribe($data);
} else if(isset($_GET['unsubscribe'])) {
    echo unsubscribe($data);
}
 else  {
    echo "defult";
}
?>