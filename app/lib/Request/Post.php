<?php
namespace Request;

require_once __DIR__."/RequestVariables.php";
use Request\RequestVariables;

class Post extends RequestVariables
{
    protected function setValues()
    {
        foreach ($_POST as $key => $value) {
            $this->_values[$key] = $value;
        }
    }
}
