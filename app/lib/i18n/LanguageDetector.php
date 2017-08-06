<?php
namespace i18n;
require_once __DIR__."/../../vendor/autoload.php";

class LanguageDetector
{

    public function __construct()
    {
        $this->request = new \Request\Request();
        $this->lang_config = parse_json_file(__DIR__."/../../../config/locale/_language_config.json");
        $this->known_languages  = $this->lang_config["known_languages"];
        $this->default_language = $this->lang_config["default_language"];
        $this->setValue();
    }

    public function setValue()
    {

        // IF sets query / e.g. ?lang=foo
        if ( $this->request->getQuery("lang") ) {
            $lang = $this->request->getQuery("lang");
        }

        // IF sets cookie / e.g. lang=foo;
        else if ( $this->request->getCookie("lang") ) {
            $lang = $this->request->getCookie("lang");
        }

        // Parse Accept-Language from http header
        else if ( $_SERVER['HTTP_ACCEPT_LANGUAGE'] ) {

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
                    setcookie("lang", $a, time()+60*60*24*30 );
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
