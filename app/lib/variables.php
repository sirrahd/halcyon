<?php

function define_vatiables()
{

    /* Directory path of the application */
    define("APP_DIR", dirname(__DIR__, 2));

    /* Host name of the application */
    if (!empty($_SERVER['HTTP_HOST'])) {
        define("APP_HOST", $_SERVER['HTTP_HOST']);
    } else {
        define("APP_HOST", $_SERVER['SERVER_NAME']);
    }

    /* Database infomations */
    $config = Config\Config::getInstance();
    $config->setConfigDir(APP_DIR."/config/general.json");
    define("DB_HOST", $config->data["db"]["host"]);
    define("DB_NAME", $config->data["db"]["user"]);
    define("DB_USER", $config->data["db"]["password"]);
    define("DB_PASS", $config->data["db"]["name"]);

    /**
    * このへんが全部えらってる。このさい定数つかわずにmodel.phpからconfigクラスにアクセスしてもいいかもしれない。
    * でもやっぱ定数のほうがいい気もするけどなぁ。
    * でもエラー的にはvariables.phpには触れさせないほうがつよそうかもしれない
    * よみづらくなりそうだ。
    **/
}

define_vatiables();
