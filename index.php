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

function services() {
    include "views/Services.php";
}

function about() {
    include "views/AboutUs.php";
}
function stock() {
    include "views/Stock.php";
}
function contacts() {
    include "views/Contacts.php";
}
function dentists() {
    include "views/Dentists.php";
}
function reviews() {
    include "views/Reviews.php";
}

function defaultHandler() {
    http_response_code(404);
    echo '404 Not Found';
}


