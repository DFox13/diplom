<?php
require_once __DIR__ . "/helpers.php";
require_once __DIR__ ."/Request.php";
$routes = require 'routes/routes.php';
$request = buildURL($_SERVER['REQUEST_URI']);


$route = $routes[$request] ?? null;

if ($route) {
    $handler = function_exists($route) ? $route : 'defaultHandler';
    call_user_func($handler);
} else {
    http_response_code(404);
    echo '404 Not Found';
}

function home() {
    include "views/home.php";
}

function create() {
    include "views/create.php";
}

function delete() {
    include "views/Delete.php";
}

function defaultHandler() {
    http_response_code(404);
    echo '404 Not Found';
}


