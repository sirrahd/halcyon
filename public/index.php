<?php
    #!/usr/bin/env php
    error_reporting(E_ALL);
    ini_set("error_log", "../log/error.log");

    require_once __DIR__ . "/../Dispatcher.php";
    $dispatcher = new Dispatcher();
    $dispatcher->dispatch();

?>