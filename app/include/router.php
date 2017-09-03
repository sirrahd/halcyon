<?php

    function router()
    {
        $request = Request\Request::getInstance();
        $params  = $request->getParam();

        if ( !isset($params[1]) ) {
            $controllerName  = "\Controllers\HomeController";
        }

        else if ( $params[1] === "local" ) {
            $controllerName  = "\Controllers\LocalController";
        }

        else if ( $params[1] === "federated" ) {
            $controllerName  = "\Controllers\FederatedController";
        }

        else if ( $params[1] === "notifications" ) {
            $controllerName  = "\Controllers\NotificationsController";
        }

        else if ( $params[1] === "search" ) {
            $controllerName  = "\Controllers\SeachController";
        }

        else if ( preg_match("/^@(.+)@(.+)\.(.+)$/", $params[1]) ) {
            $controllerName = "\Controllers\ProfileController";
        }

        else if ( $params[1] === "login" ) {
            $controllerName = "\Controllers\LoginController";
        }

        else if ( $params[1] === "logout" ) {
            $controllerName = "\Controllers\LogoutController";
        }

        /* Check controller's existance */
        if ( isset($controllerName) ) {
            $controllerInstance = new $controllerName;
        }
        /* If controller doesn't exist */
        else {
            header("HTTP/1.0 404 Not Found");
            echo file_get_contents(APP_DIR."/public/errors/404.html");
            exit;
        }

        /* Set 2nd param as action in controller */
        if ( isset($params[2]) ) {
            $actionName = $params[2]."Action";

            /* Check action's existence */
            if  (method_exists($controllerInstance, $actionName)) {
                $controllerInstance->setAction($controllerName, $actionName);
            }
            /* If action doesn't exist */
            else {
                header("HTTP/1.0 404 Not Found");
                echo file_get_contents(APP_DIR."/public/errors/404.html");
                exit;
            }

        }

        /* Run */
        $controllerInstance->run();

    }
