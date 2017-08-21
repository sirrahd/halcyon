<?php
namespace Models;

use PDO;

class LoginModel extends _ModelBase
{

    protected $host;       // requested mastodon host name, like "mastodon.social";
    protected $httpClient; // guzzle client;

    public function __construct($dbHost, $dbUser, $dbPass, $dbName)
    {
        parent::__construct($dbHost, $dbUser, $dbPass, $dbName);
        $this->httpClient = new \GuzzleHttp\Client();
    }

    /**
     * Call all methods and set information
     * such as client_id and client_secret
     *
     * @param   string   host url for register
     * @param   string   client name
     * @param   string   redirect uris
     * @param   string   website
     * @param   string   scopes
     * @return  null
     */
    public function setValue($host, $client_name, $redirect_uris, $website, $scopes)
    {
        $this->host          = $host;
        $this->client_name   = $client_name;
        $this->redirect_uris = $redirect_uris;
        $this->website       = $website;
        $this->scopes        = $scopes;
        $this->fetchInstancesTable();

        // If $host doesn't exist in instancesTable, create new app
        if ( !$this->is_exist($this->host) ) {
            $this->handshakeToNewHost();
        }

        // finally, set informations
        $this->client_id     = $this->instancesTable[$this->host]["client_id"];
        $this->client_secret = $this->instancesTable[$this->host]["client_secret"];
    }

    /**
     * Fetch instances information from the database and
     * set values in $this->instancesTable. __construct() calls.
     *
     * @return null
     */
    private function fetchInstancesTable()
    {
        $this->instancesTable = array();
        $stmt = $this->database->dbExecute("select host,client_id,client_secret from instances");
        foreach($stmt->fetchAll(PDO::FETCH_ASSOC) as $row) {
            $this->instancesTable[$row["host"]] = $row;
        }
    }

    /**
     * Register app in new hsot and record infomations such as
     * host, client_id and client_secret on the database.
     *
     * @param    string    client_name
     * @param    string    redirect_uris
     * @param    string    website
     * @param    string    scopes
     * @return   null
     * @throws   Invalid host   If response JSON body doesn't have "client_id"
     */
    private function handshakeToNewHost()
    {
        $parameters = array();
        $parameters["client_name"]   = $this->client_name;
        $parameters["redirect_uris"] = $this->redirect_uris;
        $parameters["website"]       = $this->website;
        $parameters["scopes"]        = $this->scopes;

        $raw_response = $this->httpClient->post("https://".$this->host."/api/v1/apps",["json"=>$parameters]);
        $response = json_decode($raw_response->getBody(), true);

        if ( isset($response["client_id"]) ) {
            // Insert JSON data directly to the variable instancesTable
            $this->instancesTable[$this->host] = $response;
            // record data to the database
            $this->database->dbExecute(
                "insert into instances(host, client_id, client_secret) values(?,?,?)",
                array(
                    $this->host,
                    $response["client_id"],
                    $response["client_secret"]
                )
            );
        } else {
            throw new \Exception("Invalid host");
        }
    }

    /**
     * Fetch auth token by HTTP
     * available after accepted by user
     *
     * @param    string    code
     * @param    string    grant_type
     * @return   array     JSON response body
     */
    public function fetchAuthToken($code, $redirect_uri)
    {
        $parameters = array();
        $parameters["grant_type"]    = "authorization_code";
        $parameters["redirect_uri"]  = $redirect_uri;
        $parameters["client_id"]     = $this->client_id;
        $parameters["client_secret"] = $this->client_secret;
        $parameters["code"]          = $code;

        var_dump($parameters); // これはちゃんと出る

        $raw_response = $this->httpClient->post("https://".$this->host."/oauth/token",["json"=>$parameters]);
        return json_decode($raw_response->getBody(), true);
    }

    /**
     * A helper function that detect whether the host which specified
     * in the argument exists in $this->instancesTable
     *
     * @param   string   Host name
     * @return  boolean  Does arg's host exist
     */
    public function is_exist($host)
    {
        return isset($this->instancesTable[$host]);
    }

}
