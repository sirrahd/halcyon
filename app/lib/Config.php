<?php
namespace Lib;

class Config
{
    public $data;
    protected static $instance;

    public static function getInstance()
    {
        if ( is_null(static::$instance) ) {
            static::$instance = new static;
            $this->data = parse_json_file(APP_DIR."/config/general.json", true);
        }
        return static::$instance;
    }

    final protected function __construct()
    {
    }

    final protected function __clone()
    {
        throw new \Exception("Clone is not allowed");
    }

}
