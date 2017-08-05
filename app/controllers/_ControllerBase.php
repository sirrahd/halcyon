<?php
namespace Controllers;
require_once __DIR__."/../vendor/autoload.php";

class _ControllerBase
{

    protected $request;
    protected $view;
    protected $controller = "index";
    protected $action     = "indexAction";

    public function __construct()
    {
        $this->request = new \Request\Request();
        $this->view    = new \Smarty();
        $this->view->setTemplateDir("../app/views/templates/");
        $this->view->setCompileDir("../app/views/templates_c/");
    }

    public function setAction($controller, $action)
    {
        $this->controller = $controller;
        $this->action     = $action;
    }

    public function run()
    {
        try {
            $methodName = $this->action;
            $this->$methodName();
        } catch (Exception $e) {
            header("HTTP/1.1 500 Internal Server Error");
            echo file_get_contents(__DIR__."/../public/errors/500.html");
        }
    }

}