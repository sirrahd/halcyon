<?php
/* Smarty version {Smarty::SMARTY_VERSION}, created on 2017-08-05 17:06:21
  from "/var/www/html/halcyon-dev/app/views/templates/Login.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-16',
  'unifunc' => 'content_5985fb0de609c9_20652877',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '5118283897e6e902fa14c2bd0dfb4b0768fd2a0a' => 
    array (
      0 => '/var/www/html/halcyon-dev/app/views/templates/Login.tpl',
      1 => 1501952775,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:common/login_header.tpl' => 1,
    'file:common/login_footer.tpl' => 1,
  ),
),false)) {
function content_5985fb0de609c9_20652877 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_subTemplateRender("file:common/login_header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>


<main>

    <form method="POST" action="auth">
    </form>

</main>

<?php $_smarty_tpl->_subTemplateRender("file:common/login_footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
}
}
