<?php
namespace i18n;

class LocaleLoader
{

    public function get($lang, $dir = "")
    {
        return parse_json_file($dir.$lang.".json");
    }

}