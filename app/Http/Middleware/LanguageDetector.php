<?php

namespace App\Http\Middleware;

use Closure;

/**
 * LanguageDetector
 * Detect language that visitor is using from query string OR
 * cookie OR accept_languages and save it in cookie
 *
 */
class LanguageDetector
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $known_languages = ['en', 'ja']; // Known Languages
        $query_lang  = $request->input('lang');
        $cookie_lang = $request->cookie('lang');

        if ( $query_lang && in_array($query_lang, $known_languages) ) {
            $lang = $query_lang;
        } else if ( $cookie_lang && in_array($cookie_lang, $known_languages) ) {
            $lang = $cookie_lang;
        } else if ( !is_null($request->server('HTTP_ACCEPT_LANGUAGE')) ) {
            $accept_langs = array_filter(
                array_map(
                    function($tag)
                    {
                        $exploded = explode(';', $tag );
                        $trimed   = array_map('trim', $exploded);
                        return array_shift($trimed);
                    },
                    explode(',', $request->server('HTTP_ACCEPT_LANGUAGE'))
                )
            );
            foreach ( $accept_langs as &$accept_lang ) {
                if ( in_array($accept_lang, $known_languages) ) {
                    \Cookie::queue(cookie('lang', $accept_lang, time()+365*24*3600));
                    $lang = $accept_lang;
                    break;
                }
            };
        }

        if ( empty($lang) ) {
            $lang = config('app.fallback_locale');
        }

        \App::setLocale($lang);

        return $next($request);
    }
}
