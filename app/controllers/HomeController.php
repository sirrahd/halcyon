<?php
namespace Controllers;

class HomeController extends _ControllerBase
{
    public function indexAction()
    {
        $this->view->display("home.tpl");
    }
}