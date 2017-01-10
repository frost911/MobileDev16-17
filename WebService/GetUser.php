<?php

class GetUser {

    public function getUser() {
        $user = $_SERVER['PHP_AUTH_USER'];
        return $user;
    }

}

$getUser = new GetUser();
$user = $getUser->getUser();
$userArr = array("User" => $user);
$jsonstring = json_encode($userArr);
echo $jsonstring;
?>
