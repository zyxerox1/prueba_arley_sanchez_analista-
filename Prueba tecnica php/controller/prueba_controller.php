<?php

require_once 'model/prueba_modelo.php';


class prueba_controller
{
    private $prueba;

    public function __construct()
    {
      //se crea el objeto de modelo prueba
        $this->prueba  = new prueba_modelo();
    }

    public function index()
    {
      //se consulta la api con el modelo prueba
      $data=$this->prueba->api();

      //se decodifica como json para obtener valores
      $data= json_decode($data, true);

      //se crea un array para consultar todos los personaje
      $array_id=[];
      $string_id=[];
      for ($i=0; $i < $data["info"]["count"]; $i++) { 
        $array_id[]=$i+1;
      }
      
      $string_id=implode(",", $array_id);

      //buscamos todos los personaje con un array de todos los id
      $data=$this->prueba->buscar_array_id($string_id);

      //se decodifica como json para obtener valores
      $data= json_decode($data, true);
      
      //insertamos los archivo de la lista
      require_once HTML_DIR . 'overall/header.php';;
      require_once HTML_DIR . 'prueba_api/prueba.php';
      require_once HTML_DIR . 'overall/footer.php';

    }
}
