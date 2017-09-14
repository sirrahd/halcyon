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
     * index
     * Index action
     */
    public function index(Request $request)
    {
        // Login Form
        if ( empty($request->input('code')) && empty($request->input('host'))) {
            return view('login');

        // Authentication Action
        } else {
            $code      = $request->input('code');
            $host      = $request->input('host');
            $table     = new Instances();
            $registrar = new MastodonRegistrar($request->input('host'));
            try {
                $client_info = $table->select('host', 'client_id', 'client_secret', 'count')
                    ->where('host', '=', $host)
                    ->first();
                $response  = $registrar->fetchAuthToken(
                    $client_info->client_id,
                    $client_info->client_secret,
                    $code,
                    url('/login?&host='.$host)
                );
                return view('auth')->with([
                   'instance_uri' => $response['access_token'],
                   'access_token' => $host
                ]);
            } catch(\Exception $e) {
                return redirect('/login?error=host&error_description='.
                str_replace(" ", "+", __('login-from-invalid-code')));
            }
        }
    }

    /**
     * logout
     * Logout action
     */
    public function logout()
    {
        return view('logout');
    }

    /**
     * auth
     * Auth action
     */
    public function auth(Request $request)
    {
        $host      = explode('@', $request->input('acct'))[2];
        $registrar = new MastodonRegistrar($host);
        $table     = new Instances();
        $auth_uri;

        try {
            if ($table->where('host', '=', $host)->exists()) {
                $client_info = $table->select('host', 'client_id', 'client_secret', 'count')
                    ->where('host', '=', $host)
                    ->first();
                $table->where('host', '=', $host)
                    ->increment('count', 1);
                $auth_uri = $registrar->generateAuthUri($host, $client_info->client_id);
            } else {
                $client_info = $registrar->handshakeToNewHost();
                $table->host          = $host;
                $table->client_id     = $client_info['client_id'];
                $table->client_secret = $client_info['client_secret'];
                $table->count         = 1;
                $table->save();
                $auth_uri = $registrar->generateAuthUri($host, $client_info['client_id']);
            }
        } catch(\Exception $e) {
            $auth_uri = '/login?error=host&error_description='.
            str_replace(" ", "+", __('login-from-connection-error'));
        } finally {
            return redirect($auth_uri);
        }
    }

}
