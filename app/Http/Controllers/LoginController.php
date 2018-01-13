<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Libs\MastodonRegistrar;
use App\Instances;

class LoginController extends Controller
{
    /**
     * verifyInstance
     */
    public function verifyInstance(Request $request)
    {
        if ( empty($request->input('instance_domain')) ) {
            return response()->json(['error' => 'Invalid instance'], 500);
        }

        $instance_domain = $request->input('instance_domain');
        $registrar       = new MastodonRegistrar($instance_domain);
        $table           = new Instances();

        if ($table->where('instance_domain', '=', $instance_domain)->exists()) {
            try {
                $client_info = $table->select('instance_domain', 'client_id', 'client_secret', 'count')
                    ->where('instance_domain', '=', $instance_domain)
                    ->first();
                $table->where('instance_domain', '=', $instance_domain)
                    ->increment('count', 1);

                $authorization_uri = $registrar->generateAuthorizationUri($instance_domain, $client_info->client_id);
            } catch (\Exception $e) {
                return response()->json(['error' => 'Failed to get client information from database.'], 500);
            }

        } else {
            try {
                $response = $registrar->handshakeToNewInstance();

                if ( isset($response['error']) || !isset($response['client_id'], $response['client_secret']) ) {
                    return response()->json(['error' => $response['error']], 500);
                }

                $table->instance_domain = $instance_domain;
                $table->client_id       = $response['client_id'];
                $table->client_secret   = $response['client_secret'];
                $table->count           = 1;
                $table->save();

                $authorization_uri = $registrar->generateAuthorizationUri($instance_domain, $response['client_id']);
            } catch (\Exception $e) {
                return response()->json(['error' => 'Failed to register the application in the instance.'], 500);
            }
        }

        return response()->json([
            'authorization_uri' => $authorization_uri
        ]);
    }

    /**
     * verifyResponse
     */
    public function verifyResponse(Request $request)
    {
        if ( empty($request->input('code')) || empty($request->input('instance_domain')) ) {
            return response()->json(['error' => 'Code or instance domain were empty'], 500);
        }

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

            if ( isset($response['access_token']) ) {
                return response()->json([
                    'instance_domain' => $instance_domain,
                    'access_token' => $response['access_token'],
                ]);
            } else {
                return response()->json(['error' => 'Failed to fetch access token from the code.'], 500);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch access token from the code or domain did not exist'], 500);
        }
    }

}
