<?php
/* Smarty version {Smarty::SMARTY_VERSION}, created on 2017-08-24 11:20:26
  from "/var/www/html/halcyon-dev/app/views/templates/login.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-19',
  'unifunc' => 'content_599eb67abafbe2_02378277',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e3b04eb6580d40dcc81dc228b078341840f0e4ba' => 
    array (
      0 => '/var/www/html/halcyon-dev/app/views/templates/login.tpl',
      1 => 1503573393,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:headers/header_login.tpl' => 1,
    'file:footers/footer_login.tpl' => 1,
  ),
),false)) {
function content_599eb67abafbe2_02378277 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_subTemplateRender("file:headers/header_login.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>


<main id="login">

    <section class="loginForm_wrap">

        <form id="loginForm" method="POST" action="login?auth">

            <div class="loginForm_title">
                <h1><?php echo $_smarty_tpl->tpl_vars['login_message']->value;?>
</h1>
                <span>
                    <a href="https://joinmastodon.org/" target="_blank">
                        <?php echo $_smarty_tpl->tpl_vars['login_create_an_account']->value;?>

                    </a>
                </span>
            </div>

            <div class="loginForm_input_wrap">

                <?php if ($_smarty_tpl->tpl_vars['login_error_message']->value) {?>
                    <div class="loginForm_error_message">
                        <span>
                            <?php echo $_smarty_tpl->tpl_vars['login_error_message']->value;?>

                        </span>
                    </div>
                <?php }?>

                <div class="loginForm_acct_wrap">
                    <input
                        name="acct" type="text"
                        required
                        pattern="^@(.{0,30}?)@(.+?)\.(.+?)$"
                        placeholder="@halcyon@mastodon.social" class="loginForm_acct"
                        maxlength="287"
                    />
                    <label class="loginForm_submit cursor-pointer">
                        <input type="submit" class="invisible"/>
                        <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
                    </label>
                </div>

                <label class="loginForm_agree_checkbox unselectable cursor-pointer">
                    <input id="agree" type="checkbox" required checked class="invisible"/>
                    <i class="fa"><!-- fa-check-square-o --></i>
                    <?php echo $_smarty_tpl->tpl_vars['login_agreee_terms']->value;?>

                </label>

            </div>

        </form>

    </section>

    <article class="loginArticle">

        <h2><?php echo $_smarty_tpl->tpl_vars['login_what_is_halcyon']->value;?>
</h2>
        <p><?php echo $_smarty_tpl->tpl_vars['login_what_is_halcyon_content']->value;?>
</p>
        <h2><?php echo $_smarty_tpl->tpl_vars['login_feedback']->value;?>
</h2>
        <p><?php echo $_smarty_tpl->tpl_vars['login_feedback_content']->value;?>
</p>

        <div class="contactList_wrap">

            <ul class="contactList">
                <li class="contactList_child mastodon">
                    <a href="https://mastodon.social/@halcyon" target="_blank">
                        <h3>
                            <i class="hlicon-mastodon"></i>
                            Mastodon
                        </h3>
                        <span>@halcyon@mastodon.social</span>
                    </a>
                </li>
                <li class="contactList_child github">
                    <a href="https://github.com/halcyon-suite/halcyon" target="_blank">
                        <h3>
                            <i class="fa fa-github" aria-hidden="true"></i>
                            GitHub
                        </h3>
                        <span>/halcyon-suite/halcyon</span>
                    </a>
                </li>
                <li class="contactList_child email">
                    <a href="mailto:neetshin@neetsh.in" target="_blank">
                        <h3>
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            E-mail
                        </h3>
                        <span>neetshin@neetsh.in</span>
                    </a>
                </li>
            </ul>

        </div>

        <h2><?php echo $_smarty_tpl->tpl_vars['login_help_us']->value;?>
</h2>
        <p><?php echo $_smarty_tpl->tpl_vars['login_help_us_content']->value;?>
</p>

        <ul class="donateLinks">
            <li class="donateLink bitcoin">
                Bitcoin: <code><?php echo $_smarty_tpl->tpl_vars['developers_bitcoin']->value;?>
</code>
            </li>
            <li class="donateLink patreon">
                Patreon: <a href="<?php echo $_smarty_tpl->tpl_vars['developers_patreon']->value;?>
" target="_blank"><?php echo $_smarty_tpl->tpl_vars['developers_patreon']->value;?>
</a>
            </li>
        </ul>

    </article>

</main>

<?php $_smarty_tpl->_subTemplateRender("file:footers/footer_login.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
}
}
