<?php

error_reporting(E_ALL);
ini_set("error_log", __DIR__."/../log/error.log");

require_once __DIR__."/../app/vendor/autoload.php";
require_once "dispatcher.php";
$dispatcher = new Dispatcher();
$dispatcher->dispatch();
