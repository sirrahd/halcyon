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
        if ( !empty($request->input('code')) && !empty($request->input('host'))) {
            $code      = $request->input('code');
            $host      = $request->input('host');
            $table     = new Instances();
            $registrar = new MastodonRegistrar($request->input('host'));

            try {
                $client_info = $table->select('host', 'client_id', 'client_secret', 'count')
                    ->where('host', '=', $host)
                    ->first();

                $response = $registrar->fetchAccessToken(
                    $client_info->client_id,
                    $client_info->client_secret,
                    $code,
                    url('/login?&host='.$host)
                );

                return response()->json([
                    'authorize' => [
                        'instance_uri' => $host,
                        'access_token' => $response['access_token'],
                    ]
                ]);
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
        $host      = explode('@', $request->input('acct'))[2];
        $registrar = new MastodonRegistrar($host);
        $table     = new Instances();
        $authorization_uri;

        try {
            if ($table->where('host', '=', $host)->exists()) {
                $client_info = $table->select('host', 'client_id', 'client_secret', 'count')
                    ->where('host', '=', $host)
                    ->first();
                $table->where('host', '=', $host)
                    ->increment('count', 1);
                $authorization_uri = $registrar->generateAuthorizationUri($host, $client_info->client_id);
            } else {
                $client_info = $registrar->handshakeToNewHost();
                $table->host          = $host;
                $table->client_id     = $client_info['client_id'];
                $table->client_secret = $client_info['client_secret'];
                $table->count         = 1;
                $table->save();
                $authorization_uri = $registrar->generateAuthorizationUri($host, $client_info['client_id']);
            }

            return response()->json([
                'authorize' => [
                    'instance_uri' => $host,
                    'authorization_uri' => $authorization_uri
                ]
            ]);
        } catch(\Exception $e) {
            return response()->json([
                'error' => 'invalid_host',
                'error_description' => 'Failed to register the application in the host'
            ], 400);
        }
    }

}
