<?php
namespace Lib;

class Locale
{

    protected $language;
    protected $locale_dir;

    protected static $instance;

    public static function getInstance() {
        if ( is_null(static::$instance) ) {
            static::$instance = new static;
        }
        return static::$instance;
    }

    /**
     * getLocale
     *
     * @param    null
     * @return   array     $return   locale array
     */
    public function getLocale()
    {
        if ( !$this->language ) {
            $this->detectLanguage();
        }
        $return = parse_json_file($this->locale_dir.$this->language.".json");
        return $return;
    }

    /**
     * setLocaleDir
     * Set path to the locale file
     *
     * @param   string   $path    path to the locale file
     * @return  null
     */
    public function setLocaleDir($path)
    {
        $this->locale_dir = $path;
    }

    /**
     * detectLanguage
     * Detect user's own language from accept-language,
     * cookie or query string.
     *
     * @param    null
     * @return   null
     */
    public function detectLanguage()
    {

        $request          = \Lib\Request::getInstance();
        $queryLang        = $request->getQuery("lang");
        $cookieLang       = $request->getCookie("lang");

        $lang_config      = parse_json_file( $this->locale_dir."_language_config.json" );
        $known_languages  = $lang_config["known_languages"];
        $default_language = $lang_config["default_language"];

        // Query string case
        if ( $queryLang && in_array($queryLang, $known_languages) ) {
            $lang = $queryLang;

        // Cookie case
        } else if ( $cookieLang && in_array($cookieLang, $known_languages) ) {
            $lang = $cookieLang;

        // Accept-language case
        } else if ( isset($_SERVER['HTTP_ACCEPT_LANGUAGE']) ) {
            $accept_languages = array_filter(
                array_map(
                    function($tag)
                    {
                        $exploded = explode(";", $tag );
                        $trimed   = array_map("trim", $exploded);
                        return array_shift($trimed);
                    },
                    explode(",", $_SERVER['HTTP_ACCEPT_LANGUAGE'])
                )
            );
            foreach ( $accept_languages as &$a ) {
                if ( in_array($a, $known_languages) ) {
                    $lang = $a;
                    setcookie("lang", $a, time()+60*60*24*30*12 );
                    break;
                }
            };
        }

        // Default
        if ( empty($lang) ) {
            $lang = $default_language;
        }

        $this->language = $lang;
    }

    final protected function __construct()
    {
    }

    final protected function __clone()
    {
        throw new \Exception("Clone is not allowd");
    }

}
