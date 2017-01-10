<?php

class GetLink {
    
    public function link(){
     @$link = new mysqli("localhost", "root", "", "idealist");
     return $link;
    }
}

?>