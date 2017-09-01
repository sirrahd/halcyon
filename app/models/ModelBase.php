<?php
namespace Models;

abstract class ModelBase
{
    protected $database;

    public function __construct()
    {
        $this->database = \Database\Database::getInstance();
        $this->database->setDatabaseInfo(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    }

}
