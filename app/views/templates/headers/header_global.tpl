<!DOCTYPE HTML>
<html lang="{$lang}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
        {if $page_type eq "home"}
            {$title_home}
        {elseif $page_type eq "local"}
            {$title_local}
        {elseif $page_type eq "federated"}
            {$title_federated}
        {elseif $page_type eq "notifications"}
            {$title_notifications}
        {else}
            {$app_name}
        {/if}
    </title>
    <link rel="shortcut icon" href="{$images_dir}/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="{$stylesheet_dir}/theme_{$theme_name}.css" media="all" />
    <script src="{$javascript_dir}/main.js" />
</head>

<body
    class="{$lang} {$page_type} {$body_classes}"
    data-page-type="{$page_type}"
    role="application"
>

<header id="globalHeader" class="{$header_classes}">

</header>
