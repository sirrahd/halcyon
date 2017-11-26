<?php

namespace App\Http\Middleware;

use Closure;

/**
 * LanguageDetector
 * Detect the visitor's own language from query string
 * or cookie or accept_languages and save it on cookie
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
        $query_lang   = $request->input('lang');
        $cookie_lang  = $request->cookie('lang');
        $known_langs  = $this->getKnownLanguages('../../../resources/javascript/locales');
        $accept_langs = array_map(
            function($tag) {
                $exploded = explode(';', $tag );
                $trimed   = array_map('trim', $exploded);
                return array_shift($trimed);
            },
            explode(',', $request->server('HTTP_ACCEPT_LANGUAGE'))
        );

        if ( $query_lang && in_array($query_lang, $known_langs) ) {
            $lang = $query_lang;
        } else if ( $cookie_lang && in_array($cookie_lang, $known_langs) ) {
            $lang = $cookie_lang;
        } else if ( !empty($accept_langs) ) {
            foreach ( $accept_langs as &$accept_lang ) {
                if ( in_array($accept_lang, $known_langs) ) {
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

    /**
     * Detect locale files from react-intl locale directory
     *
     * @param  $path  path to react-intl locale directory
     * @return array  array of valid language
     */
    protected function getKnownLanguages($path) {
        $return = [];
        foreach ( scandir($path) as &$file_name ) {
            if (preg_match('/(.+?)\.json$/', $file_name, $pure_file_name)) {
                $return[] = $pure_file_name[1];
            }
        }

        return $return;
    }
}
