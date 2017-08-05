<?php
namespace Request;

require_once __DIR__."/RequestVariables.php";
use Request\RequestVariables;

class UriParameter extends RequestVariables
{
    protected function setValues()
    {
        $this->_values = explode(
            "/", preg_replace(
                "/\/?$/", "", parse_url(
                    mb_strtolower($_SERVER["REQUEST_URI"])
                )["path"]
            )
        );
    }
}
