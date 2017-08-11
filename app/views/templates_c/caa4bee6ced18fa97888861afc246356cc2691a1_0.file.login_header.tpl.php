<?php
/* Smarty version {Smarty::SMARTY_VERSION}, created on 2017-08-09 17:56:04
  from "/var/www/html/halcyon-dev/app/views/templates/common/login_header.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-19',
  'unifunc' => 'content_598b4cb4029078_30154918',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'caa4bee6ced18fa97888861afc246356cc2691a1' => 
    array (
      0 => '/var/www/html/halcyon-dev/app/views/templates/common/login_header.tpl',
      1 => 1502166321,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_598b4cb4029078_30154918 (Smarty_Internal_Template $_smarty_tpl) {
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

    <link rel="stylesheet" type="text/css" href="<?php echo $_smarty_tpl->tpl_vars['public_dir']->value;?>
/stylesheet/theme-<?php echo $_smarty_tpl->tpl_vars['theme']->value;?>
.css" media="all" />
    <link rel="shortcut icon" href="<?php echo $_smarty_tpl->tpl_vars['public_dir']->value;?>
/images/favicon.ico" />
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
                <img src="<?php echo $_smarty_tpl->tpl_vars['public_dir']->value;?>
/images/halcyon_title.png" alt="<?php echo $_smarty_tpl->tpl_vars['app']->value;?>
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
