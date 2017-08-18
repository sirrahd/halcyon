<?php
namespace Config;

class Config
{
    public $data;

    public function __construct($dir)
    {
        $this->data = parse_json_file($dir, true);
    }
}