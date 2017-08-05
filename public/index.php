<?php
#!/usr/bin/env php

# Logging errors
error_reporting(E_ALL);
ini_set("error_log", "../log/error.log");

# Run router
require_once __DIR__."/../Dispatcher.php";
$dispatcher = new Dispatcher();
$dispatcher->dispatch();