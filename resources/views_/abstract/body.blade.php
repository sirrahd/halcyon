<!DOCTYPE HTML>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>@yield("title")</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/stylesheet/theme_{{ get_user_theme() }}.bundle.css" />
    </head>
    <body
        class="{{ Route::currentRouteName() }} {{ app()->getLocale() }}"
        role="application"
    >
        @yield("content")
        <script src="/javascript/app.bundle.js"></script>
    </body>
</html>
