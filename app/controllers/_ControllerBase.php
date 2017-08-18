<?php
namespace Controllers;
require_once __DIR__."/../vendor/autoload.php";

class _ControllerBase
{

    protected $model;
    protected $view;
    protected $controller = "index";
    protected $action     = "indexAction";
    protected $request;
    protected $i18n;
    protected $config;

    public function __construct()
    {
        // $this->request
        $this->request = new \Request\Request();

        // $this->view
        $this->view = new \Smarty();
        $this->view->setTemplateDir("../app/views/templates/");
        $this->view->setCompileDir("../app/views/templates_c/");

        // $this->i18n
        $this->i18n = new \i18n\i18n;
        $this->i18n->setLocaleDir(__DIR__."/../../config/locale/");

        // $this->config
        $this->config = new \Config\Config(__DIR__."/../../config/general.json");

        $this->assignLocale($this->i18n->getLocale());
        $this->assignHtmlConfig($this->config->data["html"]);
        $this->assignTheme();
    }

    public function run()
    {
        #try {
            $methodName = $this->action;
            $this->$methodName();
        #} catch (\Exception $e) {
        #    header("HTTP/1.1 500 Internal Server Error");
        #    echo file_get_contents(__DIR__."/../../public/errors/500.html");
        #}
    }

    /**
     * setAction
     *
     * @param    string    $controller
     * @param    string    $action
     * @return   null
     */
    public function setAction($controller, $action)
    {
        $this->controller = $controller;
        $this->action     = $action;
    }

    /**
     * assignLocale
     *
     * @param    array   $locale
     * @return   null
     */
    public function assignLocale($locale)
    {
        foreach ( $locale as $key => $value ) {
            $this->view->assign($key, $value);
        }
    }

    /**
     * assignHtmlConfig
     *
     * @param    array   $config
     * @return   null
     */
    public function assignHtmlConfig($config)
    {
        foreach ( $config as $key => $value ) {
            $this->view->assign($key, $value);
        }
    }

    /**
     * assignTheme
     *
     * @return   null
     */
    public function assignTheme()
    {
        $theme = $this->request->getCookie("theme");
        $defualt_theme = $this->config->data["defualt"]["theme"];
        $known_themes = $this->config->data["defualt"]["known_themes"];

        if ( $theme & in_array($theme, $known_themes) ) {
            $this->view->assign("theme", $theme);
        } else {
            $this->view->assign("theme", $defualt_theme);
            setcookie("theme", $defualt_theme, time()+60*60*24*30*12);
        }
    }

}