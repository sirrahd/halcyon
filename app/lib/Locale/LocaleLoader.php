<?php
namespace Locale;

class LocaleLoader
{

    public function get($lang, $dir = "")
    {
        return parse_json_file($dir.$lang.".json");
    }

}