<?php
/* Smarty version {Smarty::SMARTY_VERSION}, created on 2017-08-21 17:19:21
  from "/var/www/html/halcyon-dev/app/views/templates/headers/header_login.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-19',
  'unifunc' => 'content_599b16197c01e4_30594181',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '50d16f6b9933589dac6f255c5770e52dcc933979' => 
    array (
      0 => '/var/www/html/halcyon-dev/app/views/templates/headers/header_login.tpl',
      1 => 1503335008,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_599b16197c01e4_30594181 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE HTML>
<html lang="<?php echo $_smarty_tpl->tpl_vars['lang']->value;?>
">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo $_smarty_tpl->tpl_vars['head_login_title']->value;?>
</title>

    <link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['stylesheet_dir']->value;?>
/theme-<?php echo $_smarty_tpl->tpl_vars['theme']->value;?>
.css" media="all" />
    <link rel="shortcut icon" href="<?php echo $_smarty_tpl->tpl_vars['images_dir']->value;?>
/favicon.ico" />
    <?php echo '<script'; ?>
 src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"><?php echo '</script'; ?>
>

</head>

<body class="<?php echo $_smarty_tpl->tpl_vars['lang']->value;?>
 login">

<header id="login_header">

    <div class="header_inner">

        <div class="header_area header_right_area">
            <h1 class="header_title">
                <img src="<?php echo $_smarty_tpl->tpl_vars['images_dir']->value;?>
/halcyon_title.png" alt="<?php echo $_smarty_tpl->tpl_vars['app']->value;?>
" />
            </h1>
        </div>

        <div class="header_area header_left_area">
            <nav class="header_nav">
                <ul>

                    <li>
                        <a href=""><?php echo $_smarty_tpl->tpl_vars['login_app_donation']->value;?>
</a>
                    </li>

                    <li>
                        <a href=""><?php echo $_smarty_tpl->tpl_vars['login_app_news']->value;?>
</a>
                    </li>

                    <li>
                        <a href=""><?php echo $_smarty_tpl->tpl_vars['login_app_terms']->value;?>
</a>
                    </li>

                    <li>
                        <a href=""><?php echo $_smarty_tpl->tpl_vars['login_app_sorce_code']->value;?>
</a>
                    </li>

                </ul>
            </nav>
        </div>

    </div>

</header><?php }
}
