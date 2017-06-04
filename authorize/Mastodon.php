<?php
#!/usr/bin/env php
namespace HalcyonSuite\HalcyonForMastodon;

require_once('database.php');
require_once('Mastodon-api-php/Mastodon_api.php');

use HalcyonSuite\HalcyonForMastodon\Database;
use PDO;
use Exception;

/*-------------------
  class for halcyon
--------------------*/
class Mastodon extends \Mastodon_api
{
    $appSettings = parse_ini_file('../config.ini', true);
    
    private $clientName         = $appSettings["App"]["api_client_name"];
    private $clientWebsite      = $appSettings["App"]["api_client_website"];
    private $clientRedirectUris = $appSettings["App"]["api_client_website"].'/auth urn:ietf:wg:oauth:2.0:oob';
    private $clientScopes       = array('read', 'write', 'follow');
    private $instances          = array();
    private $dbHost             = $appSettings["Mysql"]["db_host"];
    private $dbUser             = $appSettings["Mysql"]["db_user"];
    private $dbPass             = $appSettings["Mysql"]["db_pass"];
    private $dbName             = $appSettings["Mysql"]["db_name"];

    function __construct(){
        $this->database = new Database($this->dbHost, $this->dbUser, $this->dbPass, $this->dbName);
        $this->readInstances();
    }

    /* note: $domainって書いてあるけど、ドメインじゃなくてURLです。すみません */

    private function newInstance($domain)
    {
        $res = $this->create_app($this->clientName, $this->clientScopes, $this->clientRedirectUris, $this->clientWebsite);
        if (isset($res['html']['client_id'])) {
            $this->instances[$domain] = $res['html'];
            $this->database->dbExecute("insert into instances(domain, client_id, client_secret) values(?,?,?)", array($domain, $res['html']['client_id'], $res['html']['client_secret']));
            // insert into instances(domain, client_id, client_secret) values($domain, $client_id, $client_secret)
        }else{
            throw new Exception("Invalid instance");
        }
    }

    public function selectInstance($domain)
    {
        $this->set_url($domain);
        if (!$this->instanceExists($domain)) {
            $this->newInstance($domain);
        }
        $this->set_client($this->instances[$domain]['client_id'], $this->instances[$domain]['client_secret']);
    }

    public function getInstance($domain)
    {
        $this->set_url($domain);
        if (!$this->instanceExists($domain)) {
            $this->newInstance($domain);
        }
        return array('client_id' => $this->instances[$domain]['client_id'], 'client_secret' => $this->instances[$domain]['client_secret']);
    }

    public function instanceExists($domain)
    {
        return isset($this->instances[$domain]);
    }

    private function readInstances()
    {
        $stmt = $this->database->dbExecute("select domain,client_id,client_secret from instances");
        foreach($stmt->fetchAll(PDO::FETCH_ASSOC) as $row){
            $this->instances[$row['domain']] = $row;
        }
    }

}
?>
