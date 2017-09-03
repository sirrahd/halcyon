<?php
namespace Lib;

class Request
{

    protected static $instance;

    public static function getInstance() {
        if ( is_null(static::$instance) ) {
            static::$instance = new static;
        }
        return static::$instance;
    }

    /**
     * getQuery
     * Get HTTP query string
     *
     * @param   string        $key
     * @return  string|array  $return
     */
    public function getQuery($key=null)
    {
        if ( is_null($key) ) {
            $return = $_GET;
        } else if ( array_key_exists($key, $_GET) ) {
            $return = $_GET[$key];
        } else {
            $return = null;
        }
        return $return;
    }

    /**
     * getPost
     * Get HTTP post
     *
     * @param   string        $key
     * @return  string|array  $return
     */
    public function getPost($key=null)
    {
        if ( is_null($key) ) {
            $return = $_POST;
        } else if ( array_key_exists($key, $_POST) ) {
            $return = $_POST[$key];
        } else {
            $return = null;
        }
        return $return;
    }

    /**
     * getCookie
     * Get brower cookie
     *
     * @param   string        $key
     * @return  string|array  $return
     */
    public function getCookie($key=null)
    {
        if ( is_null($key) ) {
            $return = $_COOKIE;
        } else if ( array_key_exists($key, $_COOKIE) ) {
            $return = $_COOKIE[$key];
        } else {
            $return = null;
        }
        return $return;
    }

    /**
     * getParam
     * Get URL paramerters
     *
     * @param   null
     * @return  string|array  $return
     */
    public function getParam()
    {
        $return = explode(
            "/", preg_replace(
                "/\/?$/", "", parse_url(
                    mb_strtolower($_SERVER["REQUEST_URI"])
                )["path"]
            )
        );
        return $return;
    }

    final protected function __construct()
    {
    }

    final protected function __clone()
    {
        throw new \Exception("Clone is not allowed");
    }

}
