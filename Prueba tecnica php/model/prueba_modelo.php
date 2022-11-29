<?php


class prueba_modelo
{
    private $DB;
    private $user;

    public function __construct()
    {
        $this->data = array();
    }

    /*/////////////////////////////////////aqui consulta la api rest///////////////////////////////////*/
    public function api(){
        $response = file_get_contents("https://rickandmortyapi.com/api/character");
		$this->data = $response;   
        return $this->data;
    }

    public function buscar_array_id($string_id){
        $response = file_get_contents("https://rickandmortyapi.com/api/character/".$string_id);
		$this->data = $response;   
        return $this->data;
    }
}