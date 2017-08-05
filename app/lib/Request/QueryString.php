<?php
namespace Request;

require_once __DIR__."/RequestVariables.php";
use Request\RequestVariables;

class QueryString extends RequestVariables
{
    protected function setValues()
    {
        foreach ($_GET as $key => $value) {
            $this->_values[$key] = preg_replace("/\/?$/", "", $value);
        }
    }
}
