<?php
namespace Request;

abstract class RequestVariables
{
    protected $_values;

    public function __construct()
    {
        $this->setValues();
    }

    abstract protected function setValues();

    public function get($key = null)
    {

        // IF dont have any args
        if (!$key) {
            $return = $this->_values;

        // IF arg's key exists
        } else if ( $this->has($key) ) {
            $return = $this->_values[$key];

        // ELSE
        } else {
            $return = null;
        }

        return $return;
    }

    public function has($key)
    {

        if ( $this->_values ) {
            if ( array_key_exists($key, $this->_values) ) {
                return true;
            }
        }

        return false;
    }
}
