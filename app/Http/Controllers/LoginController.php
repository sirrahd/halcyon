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
        if ( !empty($request->input('host')) && !empty($request->input('code')) ) {
            try {
                $registrar = new MastodonRegistrar($host);
                $response  = $register->fetchAuthToken($request->input('code'), url('/login?&host='.$host));
                var_dump($response['access_token']);
            } catch(\Exception $e) {
                return redirect('/login?error=host&error_description='.
                str_replace(" ", "+", __('login-from-invalid-code')));
            }
        } else {
            return view('login');
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
