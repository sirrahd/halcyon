<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use App\Libs\MastodonRegistrar;
use App\Instances;

class LoginController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * authorize
     */
    public function authorize(Request $request)
    {
        if ( !empty($request->input('code')) && !empty($request->input('instance_domain')) ) {
            $code            = $request->input('code');
            $instance_domain = $request->input('instance_domain');
            $table           = new Instances();
            $registrar       = new MastodonRegistrar($instance_domain);

            try {
                $client_info = $table->select('instance_domain', 'client_id', 'client_secret', 'count')
                    ->where('instance_domain', '=', $instance_domain)
                    ->first();

                $response = $registrar->fetchAccessToken(
                    $client_info->client_id,
                    $client_info->client_secret,
                    $code,
                    url('/login?&instance_domain='.$instance_domain)
                );

                return response()->json([
                    'authorize' => [
                        'instance_domain' => $instance_domain,
                        'access_token' => $response['access_token'],
                    ]
                ]);
            } catch (Exception $e) {
                return response()->json([
                    'error' => 'invalid_code',
                    'error_description' => 'Failed to fetch access token from the code'
                ], 400);
            }
        }

        return response()->json([
            'error' => 'invalid_code',
            'error_description' => 'Failed to fetch access token from the code'
        ], 400);
    }

    /**
     * verifyInstance
     */
    public function verifyInstance(Request $request)
    {
        $instance_domain = explode('@', $request->input('acct'))[2];
        $registrar       = new MastodonRegistrar($instance_domain);
        $table           = new Instances();
        $authorization_uri;

        try {
            if ($table->where('instance_domain', '=', $instance_domain)->exists()) {
                $client_info = $table->select('instance_domain', 'client_id', 'client_secret', 'count')
                    ->where('instance_domain', '=', $instance_domain)
                    ->first();
                $table->where('instance_domain', '=', $instance_domain)
                    ->increment('count', 1);
                $authorization_uri = $registrar->generateAuthorizationUri($instance_domain, $client_info->client_id);
            } else {
                $client_info = $registrar->handshakeToNewInstance();
                $table->instance_domain = $instance_domain;
                $table->client_id       = $client_info['client_id'];
                $table->client_secret   = $client_info['client_secret'];
                $table->count           = 1;
                $table->save();
                $authorization_uri = $registrar->generateAuthorizationUri($instance_domain, $client_info['client_id']);
            }

            return response()->json([
                'authorize' => [
                    'instance_domain'   => $instance_domain,
                    'authorization_uri' => $authorization_uri
                ]
            ]);
        } catch(\Exception $e) {
            return response()->json([
                'error' => 'invalid_instance_domain',
                'error_description' => 'Failed to register the application in the instance'
            ], 400);
        }
    }

}
