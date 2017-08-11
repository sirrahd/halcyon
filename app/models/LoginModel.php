<?php
namespace Models

# 移しただけでなにもしていない。

class LoginModel
{

    function __construct(argument)
    {
        # code...
    }

    protected function redirectToAuthLink()
    {
        $acct     = $this->request->getPost("acct");
        $host     = explode("@", $acct)[2];
        $location = "https://{$_SERVER["HTTP_HOST"]}/login?error=host&error_description=This+instance+does+not+exist.";

        if ( strlen($host) <= 253 & preg_match("/^(.+?)\.(.+?)$/", $host) ) {
            try {
                $this->register = new MastodonRegister($host, __DIR__."/../../config/register_config.json");
                $params   = $this->register->getValue();
                $location =
                    "https://$host/oauth/authorize".
                    "?client_id={$params["client_id"]}".
                    "&response_type=code".
                    "&scope=".implode("+", explode(" ", $params["scopes"])).
                    "&website=".urlencode($params["website"]).
                    "&redirect_uri=".urlencode("https://{$_SERVER["HTTP_HOST"]}/login?&host=$host");
            } finally {
                header("Location: {$location}", true, 303);
                die();
            }
        } else {
            header("Location: {$location}", true, 303);
            die();
        }
    }

    protected function fetchAuthToken()
    {
        # function...
    }

    protected function setErrorMessage()
    {
        if ( isset($this->param["error_description"]) ) {
            $errorText = h(str_replace("+", " ", $this->param["error_description"]));
            $this->view->assign("login_error_message", $errorText);

        } else {
            $this->view->assign("login_error_message", "");
        }
    }
}
