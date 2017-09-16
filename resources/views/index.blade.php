<!DOCTYPE HTML>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Halcyon</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/stylesheet/theme_light.bundle.css" />
    </head>
    <body class="{{ app()->getLocale() }}" role="application">
        <div id="app"></div>
        <script src="/javascript/app.bundle.js"></script>
    </body>
</html>
