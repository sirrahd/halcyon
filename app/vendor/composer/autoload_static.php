<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit05ac51045e1f1f02d6de2c1d6ee0ee0c
{
    public static $files = array (
        'c964ee0ededf28c96ebd9db5099ef910' => __DIR__ . '/..' . '/guzzlehttp/promises/src/functions_include.php',
        'a0edc8309cc5e1d60e3047b5df6b7052' => __DIR__ . '/..' . '/guzzlehttp/psr7/src/functions_include.php',
        'f084d01b0a599f67676cffef638aa95b' => __DIR__ . '/..' . '/smarty/smarty/libs/bootstrap.php',
        '37a3dc5111fe8f707ab4c132ef1dbc62' => __DIR__ . '/..' . '/guzzlehttp/guzzle/src/functions_include.php',
        '09623995200989fe538db21903a21101' => __DIR__ . '/../../..' . '/app/lib/functions.php',
        'e10c87c7c036c1515036f465342820db' => __DIR__ . '/..' . '/mastodon-register/src/Helper.php',
    );

    public static $prefixLengthsPsr4 = array (
        'i' => 
        array (
            'i18n\\' => 5,
        ),
        'V' => 
        array (
            'Views\\' => 6,
        ),
        'R' => 
        array (
            'Request\\' => 8,
        ),
        'P' => 
        array (
            'Psr\\Http\\Message\\' => 17,
        ),
        'M' => 
        array (
            'Models\\' => 7,
        ),
        'L' => 
        array (
            'Lib\\' => 4,
        ),
        'H' => 
        array (
            'HalcyonSuite\\MastodonRegister\\' => 30,
        ),
        'G' => 
        array (
            'GuzzleHttp\\Psr7\\' => 16,
            'GuzzleHttp\\Promise\\' => 19,
            'GuzzleHttp\\' => 11,
        ),
        'C' => 
        array (
            'Controllers\\' => 12,
            'Config\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'i18n\\' => 
        array (
            0 => __DIR__ . '/../../..' . '/app/lib/i18n',
        ),
        'Views\\' => 
        array (
            0 => __DIR__ . '/../../..' . '/app/views',
        ),
        'Request\\' => 
        array (
            0 => __DIR__ . '/../../..' . '/app/lib/Request',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-message/src',
        ),
        'Models\\' => 
        array (
            0 => __DIR__ . '/../../..' . '/app/models',
        ),
        'Lib\\' => 
        array (
            0 => __DIR__ . '/../../..' . '/app/lib',
        ),
        'HalcyonSuite\\MastodonRegister\\' => 
        array (
            0 => __DIR__ . '/..' . '/mastodon-register/src',
        ),
        'GuzzleHttp\\Psr7\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/psr7/src',
        ),
        'GuzzleHttp\\Promise\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/promises/src',
        ),
        'GuzzleHttp\\' => 
        array (
            0 => __DIR__ . '/..' . '/guzzlehttp/guzzle/src',
        ),
        'Controllers\\' => 
        array (
            0 => __DIR__ . '/../../..' . '/app/controllers',
        ),
        'Config\\' => 
        array (
            0 => __DIR__ . '/../../..' . '/app/lib/Config',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit05ac51045e1f1f02d6de2c1d6ee0ee0c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit05ac51045e1f1f02d6de2c1d6ee0ee0c::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
