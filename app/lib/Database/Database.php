<?php
namespace Database;

use PDO;

class Database
{

    protected static $instance;

    public static function getInstance() {
        if ( is_null(static::$instance) ) {
            static::$instance = new static;
            static::$instance->setValue();
        }
        return static::$instance;
    }

    public function setValue()
    {
        $this->connecting = false;
    }

    public function setDatabaseInfo($dbhost, $dbuser, $dbpass, $dbname)
    {
        if ( !$this->connecting ) {
            $this->dbhost     = $dbhost;
            $this->dbuser     = $dbuser;
            $this->dbpass     = $dbpass;
            $this->dbname     = $dbname;
            $this->dsn        = "mysql:dbname=".$this->dbname.";host=".$this->dbhost.";charset=utf8";
            $this->dbConnect();
        }
    }

    public function dbConnect($commit=True)
    {
        try {
            $dbh = new PDO($this->dsn, $this->dbuser, $this->dbpass);
            $dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
            if(!$commit) {
                $dbh->beginTransaction();
            }
        } catch (PDOException $e) {
            throw new \Exception($e);
        }
        $this->dbh = $dbh;
        $this->connecting = true;
        return $dbh;
    }

    public function dbClose()
    {
        $this->dbh = null;
        $this->connecting = false;
    }

    public function dbExecute($sql, $attr = null)
    {
        if ($attr === null) {
          $attr = array();
        }
        if (!$this->connecting) {
            $this->dbConnect();
        }
        $stmt = $this->dbh->prepare($sql);
        $stmt->execute($attr);
        return $stmt;
    }

}
