<?php

use FastRoute\Dispatcher;

require "vendor/autoload.php";

$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) {
    $r->addRoute('GET', '/', 'views/payment.php');
    $r->addRoute('GET', '/cancel', 'views/cancel.php');
    // $r->addRoute('GET', '/success', 'views//success.php?session_id={CHECKOUT_SESSION_ID}');
    $r->addRoute('GET', '/success', 'views/success.php');
    $r->addRoute('GET', '/mail', 'views/email.html');
    $r->addRoute('POST', '/checkout', 'class/checking.php');
    $r->addRoute('POST', '/webhook', 'config/webhook.php');
});

// Fetch method and URI from somewhere
$httpMethod = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

// Strip query string (?foo=bar) and decode URI
if (false !== $pos = strpos($uri, '?')) {
    $uri = substr($uri, 0, $pos);
}
$uri = rawurldecode($uri);

$routeInfo = $dispatcher->dispatch($httpMethod, $uri);
switch ($routeInfo[0]) {
    case FastRoute\Dispatcher::NOT_FOUND:
        require 'views/404.php';
        // ... 404 Not Found
        break;
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        $allowedMethods = $routeInfo[1];
        // ... 405 Method Not Allowed
        break;
    case FastRoute\Dispatcher::FOUND:
        $handler = $routeInfo[1];
        $vars = $routeInfo[2];
        // ... call $handler with $vars
        require $handler;
        break;
}
