<?php

function search($json){
    $sql = "SELECT id, date, mobile, ip, country, comment, seen, location FROM reports where mobile = :mobile";
    $pdo = database();
    $sth = $pdo->prepare($sql);
    $sth->bindParam('mobile', $json->mobile, PDO::PARAM_STR);
    $data =  $sth->execute();
    $data = $sth->fetchAll();
    return json_encode($data);
}

function report($json){
    $sql = "insert into reports (mobile, ip, country, comment, seen, location) VALUES(:mobile, :ip, :country, :comment, :seen, :location);";
    $pdo = database();
    $sth = $pdo->prepare($sql);
    $json->ip = get_client_ip();
    $sth->bindParam('mobile', $json->mobile, PDO::PARAM_STR);
    $sth->bindParam('ip', $json->ip , PDO::PARAM_STR);
    $sth->bindParam('country', $json->country, PDO::PARAM_STR);
    $sth->bindParam('comment', $json->comment, PDO::PARAM_STR);
    $sth->bindParam('seen', $json->seen, PDO::PARAM_STR);
    $sth->bindParam('location', $json->location, PDO::PARAM_STR);
    $data =  $sth->execute();
    $data = $sth->fetchAll();
    return json_encode($data);
}

function subscribe($json){
    $sql = "insert into notifications (mobile, email, ip, country) VALUES(:mobile, :email, :ip, :country);";
    $pdo = database();
    $sth = $pdo->prepare($sql);
    $json->ip = get_client_ip();
    $sth->bindParam('mobile', $json->mobile, PDO::PARAM_STR);
    $sth->bindParam('email', $json->email , PDO::PARAM_STR);
    $sth->bindParam('ip', $json->ip , PDO::PARAM_STR);
    $sth->bindParam('country', $json->country, PDO::PARAM_STR);
    $data =  $sth->execute();
    $data = $sth->fetchAll();
    return json_encode($data);
}

function unsubscribe($json){
    $sql = "DELETE from notifications WHERE email = :hashedEmail;";
    $pdo = database();
    $sth = $pdo->prepare($sql);
    $sth->bindParam('hashedEmail', $json->hashedEmail , PDO::PARAM_STR);
    $data =  $sth->execute();
    $data = $sth->fetchAll();
    return json_encode($data);
}

function database(){
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();

    $servername = $_ENV["DBHOST"];
    $username = $_ENV["DBUSER"];
    $password = $_ENV["DBPASS"];
    $database = $_ENV["DBNAME"];

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

    $dsn = "mysql:host=$servername;dbname=$database;charset=UTF8";
    try {
        $pdo = new PDO($dsn, $username, $password);
        if ($pdo) {
            return $pdo;
        }
        die("Not connect to db");
    } catch (PDOException $e) {
        die($e->getMessage());
    }
}


function get_client_ip() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
       $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

function getLocationInfoByIp(){
    $result  = array('country'=>'', 'city'=>'');
    $ip_data = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=".get_client_ip()));    
    if($ip_data && $ip_data->geoplugin_countryName != null){
        $result['country'] = $ip_data->geoplugin_countryCode;
        $result['city'] = $ip_data->geoplugin_city;
    }
    return $result['country'].$result['city'];
}