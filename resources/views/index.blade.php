<?php
$props = json_encode([
  'locale' => app()->getLocale()
])
?>

<!DOCTYPE HTML>
<html lang="{{ app()->getLocale() }}">

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

    <link rel="stylesheet" href="{{ mix('/theme_light.css', '/packs') }}" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link color="#1da1f2" href="/mask-icon.svg" rel="mask-icon">
    <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180">
    <link href="/manifest.json" rel="manifest">
  </head>

  <body class="{{ app()->getLocale() }}" role="application">
    <div id="halcyon" data-props="{{ $props }}"></div>
    <script src="{{ mix('/main.js', '/packs') }}"></script>
  </body>

</html>
