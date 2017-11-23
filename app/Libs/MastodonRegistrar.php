<?php

namespace App\Libs;

use Closure;
use GuzzleHttp\Client as HttpClient;

class MastodonRegistrar
{
    protected $parameters;

    public function __construct($instance_domain)
    {
        $this->http_client     = new HttpClient();
        $this->instance_domain = $instance_domain;
        $this->parameters      = [
            'client_name'   => config('mastodon.client_name'),
            'redirect_uris' => implode(' ', config('mastodon.redirect_uris')),
            'scopes'        => implode(' ', config('mastodon.scopes')),
            'website'       => config('mastodon.website'),
        ];
    }

    /**
     * handshakeToNewInstance
     * Try to register application to specified instance
     * @return  array                     Client information
     * @throws  "Invalid instance domain" Specified instance was invalid
     */
    public function handshakeToNewInstance()
    {
        $request  = $this->http_client->post(
            "https://{$this->instance_domain}/api/v1/apps",
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
            throw new \Exception('Invalid instance domain');
        }
    }

    /**
     * fetchAccessToken
     * Fetch access token with code and redirect_uri
     * @param   string     $code            Oauth code
     * @param   string     $redirect_uri    Redirect_uri which specified when authorize
     * @return  string     Access token
     * @throws  "Invalid code"  Specified code was invalid
     */
    public function fetchAccessToken($client_id, $client_secret, $code, $redirect_uri)
    {
        $this->parameters['grant_type']    = 'authorization_code';
        $this->parameters['client_id']     = $client_id;
        $this->parameters['client_secret'] = $client_secret;
        $this->parameters['code']          = $code;
        $this->parameters['redirect_uri']  = $redirect_uri;

        $request  = $this->http_client->post(
            "https://{$this->instance_domain}/oauth/token",
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
     * generateAuthorizationUri
     * Generate Authorization URI from specified information
     * @param   string     $instance_domain Instance domain
     * @param   string     $client_id       client_id of the instance
     * @return  string     $authorization_uri        Oauth URI
     */
    public function generateAuthorizationUri($instance_domain, $client_id)
    {
        $authorization_uri = "https://{$instance_domain}/oauth/authorize?".
        http_build_query([
            'client_id'     => $client_id,
            'response_type' => 'code',
            'scope'         => implode(' ', config('mastodon.scopes')),
            'website'       => config('mastodon.website'),
            'redirect_uri'  => url('/login?&instance_domain='.$instance_domain)
        ]);

        return $authorization_uri;
    }
}
