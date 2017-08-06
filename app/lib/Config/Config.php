<?php
namespace Config;

class Config
{
    public $conf;

    public function __construct($conf_dir)
    {
        $this->conf = parse_json_file($conf_dir);
    }

    public function getConf()
    {
        return $this->conf;
    }

}