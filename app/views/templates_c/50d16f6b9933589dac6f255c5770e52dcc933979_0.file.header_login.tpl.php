<?php
/* Smarty version {Smarty::SMARTY_VERSION}, created on 2017-08-31 17:50:27
  from "/var/www/html/halcyon-dev/app/views/templates/headers/header_login.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-19',
  'unifunc' => 'content_59a84c636d0112_26193050',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '50d16f6b9933589dac6f255c5770e52dcc933979' => 
    array (
      0 => '/var/www/html/halcyon-dev/app/views/templates/headers/header_login.tpl',
      1 => 1504182698,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_59a84c636d0112_26193050 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE HTML>
<html lang="<?php echo $_smarty_tpl->tpl_vars['lang']->value;?>
">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
        <?php echo $_smarty_tpl->tpl_vars['title_login']->value;?>

    </title>
    <link rel="shortcut icon" href="<?php echo $_smarty_tpl->tpl_vars['images_dir']->value;?>
/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['stylesheet_dir']->value;?>
/theme_<?php echo $_smarty_tpl->tpl_vars['theme_name']->value;?>
.css" media="all" />
</head>

<body
    class="<?php echo $_smarty_tpl->tpl_vars['lang']->value;?>
 <?php echo $_smarty_tpl->tpl_vars['page_type']->value;?>
 <?php echo $_smarty_tpl->tpl_vars['body_classes']->value;?>
"
    data-page-type="<?php echo $_smarty_tpl->tpl_vars['page_type']->value;?>
"
    role="application"
>

<header id="loginHeader" role="banner">
    <div class="loginHeader_container">

        <div class="loginHeader_inner loginHeader_inner_left">
            <h1 class="loginHeader_icon">
                <img src="<?php echo $_smarty_tpl->tpl_vars['images_dir']->value;?>
/halcyon_title.png" alt="<?php echo $_smarty_tpl->tpl_vars['app_name']->value;?>
" />
            </h1>
        </div>

        <div class="loginHeader_inner loginHeader_inner_right">
            <nav class="loginHeader_nav">
                <ul>
                    <li><a href=""><?php echo $_smarty_tpl->tpl_vars['login_app_donation']->value;?>
</a></li>
                    <li><a href=""><?php echo $_smarty_tpl->tpl_vars['login_app_news']->value;?>
</a></li>
                    <li><a href=""><?php echo $_smarty_tpl->tpl_vars['login_app_terms']->value;?>
</a></li>
                    <li><a href=""><?php echo $_smarty_tpl->tpl_vars['login_app_sorce_code']->value;?>
</a></li>
                </ul>
            </nav>
        </div>

    </div>
</header>
<?php }
}
