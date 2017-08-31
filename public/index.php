<?php
require_once __DIR__."/../app/vendor/autoload.php";
error_reporting(E_ALL);
ini_set("error_log", APP_DIR."/log/error.log");
router();
