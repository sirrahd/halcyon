<?php
namespace Controllers;

abstract class ControllerBase
{

    protected $model;
    protected $view;
    protected $controller = "index";
    protected $action     = "indexAction";

    protected $body_classes   = array();
    protected $header_classes = array();
    protected $footer_classes = array();
    /*
        こんなふうにしてあとからimplode()する系かもしれない
        普通の一次元array()をassignするとtpl側でfor文にしないといかん
    */

    public function __construct()
    {

        // Request instance
        $this->request = \Lib\Request::getInstance();

        // Locale instance
        $this->locale = \Lib\Locale::getInstance();
        $this->locale->setLocaleDir(APP_DIR."/config/locale/");

        // Config instance
        $this->config = \Lib\Config::getInstance();
        $this->config->setConfigDir(APP_DIR."/config/general.json");

        // Smarty instance
        $this->view = new \Smarty;
        $this->view->loadFilter("variable", "htmlspecialchars");
        $this->view->setTemplateDir(APP_DIR."/app/views/templates/");
        $this->view->setCompileDir(APP_DIR."/app/views/templates_c/");

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
            $method_name = $this->action;
            $this->$method_name();
        } catch (\Exception $e) {
            ini_set($e, APP_DIR."/log/error.log");
            header("HTTP/1.1 500 Internal Server Error");
            echo file_get_contents(APP_DIR."/public/errors/500.html");
        }
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
        $theme         = $this->request->getCookie("theme");
        $defualt_theme = $this->config->data["theme"]["default"];
        $known_themes  = $this->config->data["theme"]["known"];

        if ( $theme & in_array($theme, $known_themes) ) {
            $this->view->assign("theme_name", $theme);
        } else {
            $this->view->assign("theme_name", $defualt_theme);
            setcookie("theme", $defualt_theme, time()+60*60*24*30*12);
        }
    }

}
