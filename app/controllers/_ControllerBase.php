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
        $this->request = new \Request\Request;

        // $this->view
        $this->view = new \Smarty;
        $this->view->setTemplateDir(APP_DIR."/app/views/templates/");
        $this->view->setCompileDir(APP_DIR."/app/views/templates_c/");

        // $this->locale
        $this->locale = new \Locale\Locale;
        $this->locale->setLocaleDir(APP_DIR."/config/locale/");

        // $this->config
        $this->config = new \Config\Config;
        $this->config->setConfigDir(APP_DIR."/config/general.json");

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
     * run
     *
     * @return  null
     */
    public function run()
    {
        try {
            $this->setValues();
            $methodName = $this->action;
            $this->$methodName();
        } catch (\Exception $e) {
            ini_set($e, APP_DIR."/log/error.log");
            header("HTTP/1.1 500 Internal Server Error");
            echo file_get_contents(APP_DIR."/public/errors/500.html");
        }
    }

    /**
     * setValues
     *
     * @return  null
     */
    protected function setValues()
    {
        $this->view->assign($this->locale->getLocale());
        $this->view->assign($this->config->data["html"]);
        $this->applytTheme();
    }

    /**
     * applytTheme
     * apply the configured CSS theme to the HTML <link> element
     *
     * @return   null
     */
    protected function applytTheme()
    {
        $theme        = $this->request->getCookie("theme");
        $defualtTheme = $this->config->data["theme"]["default"];
        $knownThemes  = $this->config->data["theme"]["known"];

        if ( $theme & in_array($theme, $knownThemes) ) {
            $this->view->assign("theme_name", $theme);
        } else {
            $this->view->assign("theme_name", $defualtTheme);
            setcookie("theme", $defualtTheme, time()+60*60*24*30*12);
        }
    }

}