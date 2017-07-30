<?php

    #!/usr/bin/env php
    ini_set("display_errors", On);
    error_reporting(E_ALL);

    require_once __DIR__ . "/../Dispatcher.php";
    $dispatcher = new Dispatcher();
    $dispatcher->dispatch();

?>