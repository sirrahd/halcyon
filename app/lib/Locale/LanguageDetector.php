<?php
namespace Locale;

class LanguageDetector
{

    public function __construct()
    {
        $this->request = new \Request\Request();
        $this->lang_config = parse_json_file(APP_DIR."/config/locale/_language_config.json");
        $this->known_languages  = $this->lang_config["known_languages"];
        $this->default_language = $this->lang_config["default_language"];
        $this->setValue();
    }

    public function setValue()
    {
        $queryLang = $this->request->getQuery("lang");
        $cookieLang = $this->request->getCookie("lang");

        // IF sets query
        if ( $queryLang && in_array($queryLang, $this->known_languages) ) {
            $lang = $queryLang;
        }

        // IF sets cookie
        else if ( $cookieLang && in_array($cookieLang, $this->known_languages) ) {
            $lang = $cookieLang;
        }

        // Parse Accept-Language from http header
        else if ( isset($_SERVER['HTTP_ACCEPT_LANGUAGE']) ) {

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
                if ( in_array($a, $this->known_languages) ) {
                    $lang = $a;
                    setcookie("lang", $a, time()+60*60*24*30*12 );
                    break;
                }
            };

        }

        // set defualt
        if ( !isset($lang) ) {
            $lang = $this->default_language;
        }

        $this->_value = $lang;

    }

    public function get()
    {
        return $this->_value;
    }

}
