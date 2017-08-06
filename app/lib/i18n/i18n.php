<?php
namespace i18n;
require_once __DIR__."/../../vendor/autoload.php";

require_once("LanguageDetector.php");
require_once("LocaleLoader.php");

class i18n
{

    protected $lang;
    protected $locale;
    protected $localeDir;

    public function __construct()
    {
        $this->LanguageDetector = new LanguageDetector;
        $this->LocaleLoader = new LocaleLoader;
        $this->setLang();
    }

    public function setLang()
    {
        $this->lang = $this->LanguageDetector->get();
    }

    public function setLocaleDir($path)
    {
        $this->localeDir = $path;
    }

    public function getLocale()
    {
        $this->locale = $this->LocaleLoader->get($this->lang, $this->localeDir);
        return $this->locale;
    }

}