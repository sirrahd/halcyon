<?php
namespace Controllers;

class LoginController extends _ControllerBase
{

    public function indexAction()
    {
        $this->view->display("Login.tpl");
    }

    public function authAction()
    {
    }


}