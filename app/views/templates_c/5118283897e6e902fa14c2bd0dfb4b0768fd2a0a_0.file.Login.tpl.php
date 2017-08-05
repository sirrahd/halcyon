<?php
/* Smarty version {Smarty::SMARTY_VERSION}, created on 2017-08-05 04:42:00
  from "/var/www/html/halcyon-dev/app/views/templates/Login.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-16',
  'unifunc' => 'content_59854c982df508_79178805',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '5118283897e6e902fa14c2bd0dfb4b0768fd2a0a' => 
    array (
      0 => '/var/www/html/halcyon-dev/app/views/templates/Login.tpl',
      1 => 1501908116,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_59854c982df508_79178805 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE HTML>
<html lang="<?php echo $_smarty_tpl->tpl_vars['html']->value-'lang';?>
">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo $_smarty_tpl->tpl_vars['head']->value-'title';?>
</title>
    <link rel="shortcut icon" href="/public/images/favicon.ico" />
    <?php echo '<script'; ?>
 src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"><?php echo '</script'; ?>
>
</head>
<body>

    <main>

        <form method="POST" action="auth">
        </form>

    </main>

</body>
</html><?php }
}
