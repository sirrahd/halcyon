<?php
namespace Request;

require_once __DIR__."/RequestVariables.php";
use Request\RequestVariables;

class Cookie extends RequestVariables
{
    protected function setValues()
    {
        foreach ($_COOKIE as $key => $value) {
            $this->_values[$key] = $value;
        }
    }
}
