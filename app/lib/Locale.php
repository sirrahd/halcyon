<?php
namespace Lib;
use Gettext\GettextTranslator;

class Locale
{
    protected static $instance;

    public static function getInstance()
    {
        if ( is_null(static::$instance) ) {
            static::$instance = new static;
            setLocale();
        }
        return static::$instance;
    }

    /**
     * setLocale
     * Set locale informations from .po file with gettext
     *
     * @param   null
     * @return  null
     */
    public function setLocale()
    {
        $t = new GettextTranslator();
        $t->setLanguage(detectLanguage()); // detectLanguageの返り値から言語コードをセット
        $t->loadDomain("messages", APP_DIR."/config/locale"); // 言語ファイルの場所を指定
        $t->register(); // グローバル化
    }

    /**
     * detectLanguage
     * Detect user's own language from accept-language,
     * cookie or query string.
     *
     * @param    null
     * @return   string    $lang    Language code like "en-US"
     */
    public function detectLanguage()
    {
        $request          = \Lib\Request::getInstance();
        $queryLang        = $request->getQuery("lang");
        $cookieLang       = $request->getCookie("lang");

        $lang_config      = parse_json_file(APP_DIR."/config/locale/locale.config.json");
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

        /* $this->language = $lang; */
        return $lang;
    }

    final protected function __construct()
    {
    }

    final protected function __clone()
    {
        throw new \Exception("Clone is not allowed");
    }
}
