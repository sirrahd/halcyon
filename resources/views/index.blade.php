<?php
$lang  = app()->getLocale();
$theme = Request::session()->get('settings')['theme'];

$props = json_encode([
  'locale' => $lang,
  'theme'  => $theme,
])
?>

<!DOCTYPE HTML>
<html lang="{{ $lang }}">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="Halcyon">

    <title>Halcyon</title>

    <meta name="msapplication-config" content="/browserconfig.xml">
    <meta name="theme-color" content="#1da1f2">
    <meta name="csrf-token" content="{{ csrf_token() }}" id="csrf-token">

    <link rel="stylesheet" href="{{ mix($theme, '/packs') }}" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="mask-icon" href="/mask-icon.svg" color="#1da1f2">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
    <link rel="manifest" href="/manifest.json">
  </head>

  <body class="{{ $lang }}" role="application">
    <div id="halcyon" data-props="{{ $props }}"></div>
    <script src="{{ mix('/main.js', '/packs') }}"></script>
  </body>

</html>
