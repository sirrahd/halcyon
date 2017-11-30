<!DOCTYPE HTML>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Halcyon</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" href="{{ mix('/stylesheet/theme_light.css') }}" />
    </head>
    <body class="{{ app()->getLocale() }}" role="application">
        <div id="halcyon" data-props="{{json_encode([
            'locale' => app()->getLocale()
        ])}}"></div>
        <script src="{{ mix('/javascript/main.js') }}"></script>
    </body>
</html>
