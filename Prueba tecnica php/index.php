<?php
require_once 'core.php';
function index($controller)
{
    require_once "controller/$controller" . "_controller.php";
    $controller = ucwords($controller) . '_controller';
    $controller = new $controller;
    $controller->index();
}

index("prueba");
