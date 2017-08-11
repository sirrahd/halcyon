<?php
namespace Config;

class Config
{
    protected $config;

    public function __construct($dir)
    {
        $this->config = parse_json_file($dir, true);
    }

    public function get()
    {
        return $this->$config;
    }
}