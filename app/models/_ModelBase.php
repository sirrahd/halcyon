<?php
namespace Models;
require_once __DIR__."/../vendor/autoload.php";

class _ModelBase
{

    protected $request;
    protected $database;

    public function __construct($dbHost, $dbUser, $dbPass, $dbName)
    {
        // $this->request
        $this->request = new \Request\Request();
        // $this->database
        $this->database = new \Database\Database($dbHost, $dbUser, $dbPass, $dbName);
    }

}