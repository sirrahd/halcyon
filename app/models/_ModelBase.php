<?php
namespace Models;

class _ModelBase
{
    protected $database;

    public function __construct($dbHost, $dbUser, $dbPass, $dbName)
    {
        // $this->database
        $this->database = new \Database\Database($dbHost, $dbUser, $dbPass, $dbName);
    }

}