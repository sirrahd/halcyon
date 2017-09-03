<?php
namespace Lib;

class Config
{
    public $data;
    protected static $instance;

    public static function getInstance() {
        if ( is_null(static::$instance) ) {
            static::$instance = new static;
        }
        return static::$instance;
    }

    /**
     * setConfigDir
     * Set path to config file
     *
     * @param   string   $dir   path to config file
     * @return  null
     */
    public function setConfigDir($dir)
    {
        $this->data = parse_json_file($dir, true);
    }
}
