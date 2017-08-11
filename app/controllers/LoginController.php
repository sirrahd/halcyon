<?php
namespace Controllers;
use HalcyonSuite\MastodonRegister\MastodonRegister;

class LoginController extends _ControllerBase
{
    protected $param;

    public function indexAction()
    {
        $this->param = $this->request->getQuery();

        if ( isset($this->param["auth"]) ) {
            $this->redirectToAuthLink();

        } else if ( isset($this->param["code"]) ) {
            $this->set();

        } else {
            $this->setErrorMessage();
            $this->view->display("Login.tpl");
        }
    }

}