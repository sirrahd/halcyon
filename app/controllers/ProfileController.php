<?php
namespace Controllers;

class UserController extends _ControllerBase
{
    public function indexAction()
    {
        if ( is_logged_in() ) {
            $this->view->display("profile.tpl");
        } else {
            $this->view->display("profile_guest.tpl");
        }
    }
}
