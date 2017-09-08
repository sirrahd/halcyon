<?php

namespace App\Http\Middleware;

use Closure;
use GuzzleHttp\Client as HttpClient;

class MastodonRegistrar
{

    public function __construct($request, $acct)
    {
        $this->http_client   = new HttpClient();
        $this->host          = explode('@', $acct)[2];
        $this->parameters    = array(
            'clinet_name'   => config('mastodon.client_name'),
            'redirect_uris' => implode(' ', config('mastodon.redirect_uris')),
            'scopes'        => implode(' ', config('mastodon.scopes')),
            'website'       => config('mastodon.website'),
        );
    }

    /**
     * handshakeToNewHost
     * Try to register application to specified instance
     * @return  array           client_id and client_secret
     * @throws  Invalid host  Specified instance was invalid
     */
    public function handshakeToNewHost()
    {
        $request  = $this->http_client->post(
            'https://'.$this->host.'/api/v1/apps',
            ['json'=>$this->parameters]
        );
        $response = json_decode($request->getBody(), true);

        if ( isset($response['client_id'], $response['client_secret']) ) {
            return array(
                $response['client_id'],
                $response['client_secret']
            );
        } else {
            throw new \Exception('Invalid host');
        }
    }

    /**
     * fetchAuthToken
     * Fetch access token with code and redirect_uri
     * @param   string     $code            Oauth code
     * @param   string     $redirect_uri    Redirect_uri which used for register
     * @return  string    Access token
     * @throws  Invalid code  Specified code was invalid
     */
    public function fetchAuthToken($code, $redirect_uri)
    {
        $this->parameters['code']          => $code;
        $this->parameters['redirect_uris'] => $redirect_uri; //overwrite
        $request  = $this->http_client->post("https://".$this->host."/oauth/token",["json"=>$this->parameters]);
        $response = json_decode($raw_response->getBody(), true);

        if ( isset($response['access_token']) ) {
            return $response['access_token'];
        } else {
            throw new \Exception('Invalid code');
        }
    }
}
