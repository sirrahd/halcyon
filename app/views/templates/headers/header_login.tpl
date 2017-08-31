<!DOCTYPE HTML>
<html lang="{$lang}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
        {$title_login}
    </title>
    <link rel="shortcut icon" href="{$images_dir}/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="{$stylesheet_dir}/theme_{$theme_name}.css" media="all" />
</head>

<body
    class="{$lang} {$page_type} {$body_classes}"
    data-page-type="{$page_type}"
    role="application"
>

<header id="loginHeader" role="banner">
    <div class="loginHeader_container">

        <div class="loginHeader_inner loginHeader_inner_left">
            <h1 class="loginHeader_icon">
                <img src="{$images_dir}/halcyon_title.png" alt="{$app_name}" />
            </h1>
        </div>

        <div class="loginHeader_inner loginHeader_inner_right">
            <nav class="loginHeader_nav">
                <ul>
                    <li><a href="">{$login_app_donation}</a></li>
                    <li><a href="">{$login_app_news}</a></li>
                    <li><a href="">{$login_app_terms}</a></li>
                    <li><a href="">{$login_app_sorce_code}</a></li>
                </ul>
            </nav>
        </div>

    </div>
</header>
