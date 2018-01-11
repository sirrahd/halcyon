<?php

namespace App\Http\Middleware;

use Closure;

/**
 * LanguageDetector
 * Detect the visitor's own language from query string
 * or session or accept_languages and save it on session
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
        $query_lang = $request->input('lang');
        $session_lang = $request->session()->get('settings')['lang'];
        $accept_langs = array_map(
            function($tag) {
                $exploded = explode(';', $tag );
                $trimed   = array_map('trim', $exploded);
                return array_shift($trimed);
            },
            explode(',', $request->server('HTTP_ACCEPT_LANGUAGE'))
        );

        $known_langs = $this->getKnownLanguages(resource_path('halcyon/locales'));

        if ( $query_lang && in_array($query_lang, $known_langs) ) {
            $lang = $query_lang;
        } else if ( $session_lang && in_array($session_lang, $known_langs) ) {
            $lang = $session_lang;
        } else if ( !empty($accept_langs) ) {
            foreach ( $accept_langs as &$accept_lang ) {
                if ( in_array($accept_lang, $known_langs) ) {
                    $settings = array('lang' => $accept_lang) + $request->session()->get('settings', array());
                    $request->session()->put('settings', $settings);
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
     * Get known languages from react-intl locale directory
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
