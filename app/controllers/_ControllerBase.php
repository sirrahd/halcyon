<?php
namespace Controllers;

class _ControllerBase
{

    protected $model;
    protected $view;
    protected $controller = "index";
    protected $action     = "indexAction";
    protected $request;
    protected $locale;
    protected $config;

    public function __construct()
    {
        // $this->request
        $this->request = new \Request\Request();

        // $this->view
        $this->view = new \Smarty();
        $this->view->setTemplateDir("../app/views/templates/");
        $this->view->setCompileDir("../app/views/templates_c/");

        // $this->locale
        $this->locale = new \Locale\Locale;
        $this->locale->setLocaleDir(APP_DIR."/config/locale/");

        // $this->config
        $this->config = new \Config\Config(APP_DIR."/config/general.json");

        $this->assignLocale($this->locale->getLocale());
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
        #    echo file_get_contents(APP_DIR."/public/errors/500.html");
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
     * @param    array   $data
     * @return   null
     */
    public function assignLocale($data)
    {
        foreach ( $data as $key => $value ) {
            $this->view->assign($key, $value);
        }
    }

    /**
     * assignHtmlConfig
     *
     * @param    array   $data
     * @return   null
     */
    public function assignHtmlConfig($data)
    {
        foreach ( $data as $key => $value ) {
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
        $defualt_theme = $this->config->data["theme"]["default"];
        $known_themes  = $this->config->data["theme"]["known"];

        if ( $theme & in_array($theme, $known_themes) ) {
            $this->view->assign("theme", $theme);
        } else {
            $this->view->assign("theme", $defualt_theme);
            setcookie("theme", $defualt_theme, time()+60*60*24*30*12);
        }
    }

}