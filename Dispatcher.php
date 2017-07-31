<?php

require_once __DIR__ . "/app/vendor/autoload.php";

class Dispatcher
{
    public function dispatch()
    {

        $requestURI = explode("/", mb_strtolower(parse_url($_SERVER["REQUEST_URI"])["path"]));
        $requestURILength = count($requestURI);

        if ( $requestURILength === 2 )
        {
            switch ($requestURI[1])
            {

                case "":
                    $controllerInstance = new Controllers\HomeController();
                    break;

                case "local":
                    $controllerInstance = new Controllers\LocalController();
                    break;

                case "federated":
                    $controllerInstance = new Controllers\FederatedController();
                    break;

                case "notifications":
                    $controllerInstance = new Controllers\NotificationsController();
                    break;

                case "login":
                    $controllerInstance = new Controllers\LoginController();
                    break;

                case "logout":
                    $controllerInstance = new Controllers\LogoutController();
                    break;

                case "terms":
                    $controllerInstance = new Controllers\TermsController();
                    break;

                case "search":
                    $controllerInstance = new Controllers\SearchController();
                    break;

                case preg_match("/^@(.+)@(.+)\.([a-z]+)$/", $requestURI[1], $matches) === 1:
                    $controllerInstance = new Controllers\UserController();
                    break;

            }

        }

        else if  ( $requestURILength === 3 )
        {
            switch ($requestURI[1]) {

                case "search":
                    switch ($requestURI[2]) {

                        case "users":
                            $controllerInstance = new Controllers\SearchUsersController();
                            break;

                    }

                case preg_match("/^@(.+)@(.+)\.([a-z]+)$/", $requestURI[1], $matches) === 1:
                    switch ($requestURI[2]) {

                        case "status":
                            $controllerInstance = new Controllers\UserStatusController();
                            break;

                        case "following":
                            $controllerInstance = new Controllers\UserFollowingController();
                            break;

                        case "followers":
                            $controllerInstance = new Controllers\UserFollowersController();
                            break;

                        case "favourites":
                            $controllerInstance = new Controllers\UserFavouritesController();
                            break;

                        case "media":
                            $controllerInstance = new Controllers\UserMediaContorller();
                            break;

                        case "with_replies":
                            $controllerInstance = new Controllers\UserWithRepliesController();
                            break;

                    }

            }
        }

        if ( !isset($controllerInstance) )
        {
            header("HTTP/1.0 404 Not Found");
            $controllerInstance = new Controllers\ErrorController();
            exit;
        }

    }
}

?>