<?php
namespace Controllers;
require_once __DIR__."/../vendor/autoload.php";

class _ControllerBase
{

    protected $config;
    protected $request;
    protected $i18n;
    protected $view;
    protected $controller = "index";
    protected $action     = "indexAction";

    public function __construct()
    {

        $this->request = new \Request\Request();

        $this->view = new \Smarty();
        $this->view->setTemplateDir("../app/views/templates/");
        $this->view->setCompileDir("../app/views/templates_c/");

        $this->i18n = new \i18n\i18n;
        $this->i18n->setLocaleDir(__DIR__."/../../config/locale/");
        $this->setLocale($this->i18n->getLocale());

        $this->config = new \Config\Config(__DIR__."/../../config/general.json");
        $this->view->assign("public_dir", $this->config->conf["defualt"]["public_dir"]);
        $this->setTheme();

    }

    public function setAction($controller, $action)
    {
        $this->controller = $controller;
        $this->action     = $action;
    }

    public function setTheme() {

        $theme = $this->request->getCookie("theme");
        $defualt_theme = $this->config->conf["defualt"]["theme"];

        if ( $theme ) {
            $this->view->assign("theme", $theme);
        } else {
            $this->view->assign("theme", $defualt_theme);
            setcookie("theme", $defualt_theme, time()+60*60*24*30);
        }

    }

    public function setLocale($locale)
    {
        foreach ( $locale as $key => $value ) {
            $this->view->assign($key, $value);
        }
    }

    public function setStyleDir($path)
    {
        $theme = $this->request->getCookie("theme");

        if ( $theme ) {
            $this->view->assign("style_dir", $path);
        } else {

        }

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