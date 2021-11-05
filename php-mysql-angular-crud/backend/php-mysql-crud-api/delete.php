<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, 
        Access-Control-Allow-Headers, Authorization, X-Requested-With");
   
      
    include_once 'config/database.php';
    include_once 'class/user.php';
    
    $database = new DB();
    $db = $database->getConnection();
    
    $item = new User($db);
    
    $data = json_decode(file_get_contents("php://input"));
    
    $item->id = isset($_GET['id']) ? $_GET['id'] : die();
    
    if($item->deleteUser()){
        echo json_encode("User deleted.");
    } else{
        echo json_encode("Not deleted");
    }
?>