<?php
namespace Controllers;

class HomeController extends ControllerBase
{
    public function indexAction()
    {
        $this->view->display("home.tpl");
    }
}
