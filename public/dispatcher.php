<?php

class Dispatcher
{

    protected $request;
    protected $params;

    public function __construct()
    {
        $this->request = new \Request\Request();
        $this->params  = $this->request->getParam();
    }

    public function dispatch()
    {

        if ( !isset($this->params[1]) ) {
            $controllerName  = "\Controllers\HomeController";
        }

        else if ( $this->params[1] === "local" ) {
            $controllerName  = "\Controllers\LocalController";
        }

        else if ( $this->params[1] === "federated" ) {
            $controllerName  = "\Controllers\FederatedController";
        }

        else if ( $this->params[1] === "notifications" ) {
            $controllerName  = "\Controllers\NotificationsController";
        }

        else if ( $this->params[1] === "search" ) {
            $controllerName  = "\Controllers\SeachController";
        }

        else if ( preg_match("/^@(.+)@(.+)\.(.+)$/", $this->params[1]) ) {
            $controllerName = "\Controllers\ProfileController";
        }

        else if ( $this->params[1] === "login" ) {
            $controllerName = "\Controllers\LoginController";
        }

        else if ( $this->params[1] === "logout" ) {
            $controllerName = "\Controllers\LogoutController";
        }




        /* Check controller's existance */
        if ( isset($controllerName) ) {
            $controllerInstance = new $controllerName;
        }
        /* IF controller doesn't exists */
        else {
            header("HTTP/1.0 404 Not Found");
            echo file_get_contents(__DIR__."/public/errors/404.html");
            exit;
        }

        /* Set 2nd param as action in controller */
        if ( isset($this->params[2]) ) {
            $actionName = $this->params[2]."Action";

            /* Check action's existence */
            if  (method_exists($controllerInstance, $actionName)) {
                $controllerInstance->setAction($controllerName, $actionName);
            }
            /* IF action doesn't exists */
            else {
                header("HTTP/1.0 404 Not Found");
                echo file_get_contents(__DIR__."/public/errors/404.html");
                exit;
            }

        }

        /* Run */
        $controllerInstance->run();

    }

}