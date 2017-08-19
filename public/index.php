<?php
error_reporting(E_ALL);
ini_set("error_log", "../log/error.log");
require_once "dispatcher.php";
$dispatcher = new Dispatcher();
$dispatcher->dispatch();
