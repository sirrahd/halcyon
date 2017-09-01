<?php
namespace Controllers;

class LoginController extends ControllerBase
{

    protected $host;
    protected $token;
    protected $location;

    public function __construct()
    {
        parent::__construct();
        $this->model    = new \Models\LoginModel();
        $this->location = "https://".APP_HOST."login".
        "?error=host&error_description=This+instance+does+not+exist.";
    }

    public function indexAction()
    {
        if ( $this->request->getPost("acct") ) {
            $this->host = explode("@", $this->request->getPost("acct"))[2];
            if ( is_url("https://".$this->host) ) {
                try {
                    $this->model->setValue(
                        $this->host,
                        $this->config->data["app"]["client_name"],
                        $this->config->data["app"]["redirect_uris"],
                        $this->config->data["app"]["website"],
                        $this->config->data["app"]["scopes"]
                    );
                    $this->location =
                    "https://{$this->host}/oauth/authorize".
                    "?client_id={$this->model->client_id}".
                    "&response_type=code".
                    "&scope=".explode("+", $this->model->scopes).
                    "&website=".urlencode($this->model->website).
                    "&redirect_uri=".urlencode("https://".APP_HOST."/login?&host={$this->host}");
                } finally {
                    header("Location: {$this->location}", true, 303);
                    die();
                }
            } else {
                header("Location: {$this->location}", true, 303);
                die();
            }
        } else if ( $this->request->getQuery("code") & $this->request->getQuery("host") ) {
            $this->host = $this->request->getQuery("host");
            if ( is_url("https://".$this->host) ) {
                $this->model->setValue(
                    $this->host,
                    $this->config->data["app"]["client_name"],
                    $this->config->data["app"]["redirect_uris"],
                    $this->config->data["app"]["website"],
                    $this->config->data["app"]["scopes"]
                );
                $this->token = $this->model->fetchAuthToken(
                    $this->request->getQuery("code"),
                    "https://".APP_HOST."/login?&host={$this->host}"
                );
                if ($this->token) {
                    echo "
                    <!DOCTYPE html>
<html>
<body>
<script>
localStorage.setItem('current_id',        '$account_id');
localStorage.setItem('current_instance',  '$this->host');
localStorage.setItem('current_authtoken', '$this->token');
location.href = '/';
</script>
</body>
</html>
                    ";
                } else {
                    header("Location: {$this->location}", true, 303);
                    die();
                }
            } else {
                header("Location: {$this->location}", true, 303);
                die();
            }

        } else {
            if ( $this->request->getQuery("error") & $this->request->getQuery("error_description") ) {
                $errorText = h(str_replace("+", " ", $this->request->getQuery("error_description")));
                $this->view->assign("login_error_message", $errorText);
            }
            $this->view->assign("page_type", "login");
            $this->view->display("login.tpl");
        }
    }

}
