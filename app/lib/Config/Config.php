<?php
namespace Config;

class Config
{
    public $data;

    public function setConfigDir($dir)
    {
        $this->data = parse_json_file($dir, true);
    }
}