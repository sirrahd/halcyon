<?php

namespace App\Libs;

use Closure;
use GuzzleHttp\Client as HttpClient;

class MastodonRegistrar
{

    public function __construct($host)
    {
        $this->http_client   = new HttpClient();
        $this->host          = $host;
        $this->parameters    = array(
            'client_name'   => config('mastodon.client_name'),
            'redirect_uris' => implode(' ', config('mastodon.redirect_uris')),
            'scopes'        => implode(' ', config('mastodon.scopes')),
            'website'       => config('mastodon.website'),
        );
    }

    /**
     * handshakeToNewHost
     * Try to register application to specified instance
     * @return  array         Client informations
     * @throws  Invalid host  Specified instance was invalid
     */
    public function handshakeToNewHost()
    {
        $request  = $this->http_client->post(
            'https://'.$this->host.'/api/v1/apps',
            ['json'=>$this->parameters]
        );
        $response = json_decode($request->getBody(), true);

        if (
            isset($response['client_id'], $response['client_secret']) &
            strlen($response['client_id'])     === 64 &
            strlen($response['client_secret']) === 64
        ) {
            return $response;
        } else {
            throw new \Exception('Invalid host');
        }
    }

    /**
     * fetchAuthToken
     * Fetch access token with code and redirect_uri
     * @param   string     $code            Oauth code
     * @param   string     $redirect_uri    Redirect_uri which specified when authorize
     * @return  string     Access token
     * @throws  Invalid code  Specified code was invalid
     */
    public function fetchAuthToken($code, $redirect_uri)
    {
        $this->parameters['code']         = $code;
        $this->parameters['redirect_uri'] = $redirect_uri;
        $request  = $this->http_client->post(
            "https://".$this->host."/oauth/token",
            ["json"=>$this->parameters]
        );
        $response = json_decode($request->getBody(), true);

        if (
            isset($response['access_token']) &
            strlen($response['access_token']) === 64
        ) {
            return $response;
        } else {
            throw new \Exception('Invalid code');
        }
    }

    /**
     * generateAuthUri
     * Generate Authorize URI from specified informations
     * @param   string     $host            Instance domain
     * @param   string     $client_id       client_id of the instance
     * @return  string     $auth_uri        Oauth URI
     */
    public function generateAuthUri($host, $client_id)
    {
        $auth_uri = "https://{$host}/oauth/authorize?".
        http_build_query(array(
            'client_id'     => $client_id,
            'response_type' => 'code',
            'scope'         => implode(' ', config('mastodon.scopes')),
            'website'       => config('mastodon.website'),
            'redirect_uri'  => url('/login?&host='.$host)
        ));

        return $auth_uri;
    }
}
