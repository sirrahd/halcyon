<?php
namespace Request;

require_once __DIR__."/QueryString.php";
require_once __DIR__."/Post.php";
require_once __DIR__."/Cookie.php";
require_once __DIR__."/UriParameter.php";

use Request\QueryString;
use Request\Post;
use Request\Cookie;
use Request\UriParameter;

class Request
{
    private $post;
    private $query;
    private $cookie;
    private $param;

    public function __construct()
    {
        $this->post   = new Post();
        $this->query  = new QueryString();
        $this->cookie = new Cookie();
        $this->param  = new UriParameter();
    }

    public function getPost($key = null)
    {
        if (null == $key) {
            return $this->post->get();
        }
        if (false == $this->post->has($key)) {
            return null;
        }
        return $this->post->get($key);
    }

    public function getQuery($key = null)
    {
        if (null == $key) {
            return $this->query->get();
        }
        if (false == $this->query->has($key)) {
            return null;
        }
        return $this->query->get($key);
    }

    public function getCookie($key = null)
    {
        if (null == $key) {
            return $this->cookie->get();
        }
        if (false == $this->cookie->has($key)) {
            return null;
        }
        return $this->cookie->get($key);
    }

    public function getParam($key = null)
    {
        if (null == $key) {
            return $this->param->get();
        }
        if (false == $this->param->has($key)) {
            return null;
        }
        return $this->param->get($key);
    }

}
