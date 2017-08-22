<?php
/* Smarty version {Smarty::SMARTY_VERSION}, created on 2017-08-21 17:19:21
  from "/var/www/html/halcyon-dev/app/views/templates/Login.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-19',
  'unifunc' => 'content_599b16197b0df6_98467591',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '5118283897e6e902fa14c2bd0dfb4b0768fd2a0a' => 
    array (
      0 => '/var/www/html/halcyon-dev/app/views/templates/Login.tpl',
      1 => 1503335893,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:headers/header_login.tpl' => 1,
    'file:footers/footer_login.tpl' => 1,
  ),
),false)) {
function content_599b16197b0df6_98467591 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_subTemplateRender("file:headers/header_login.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>


<main id="login_main">

    <section class="login_form_wrap">

        <form id="login_form" method="POST" action="login?auth">

            <div class="login_form_title">
                <h1><?php echo $_smarty_tpl->tpl_vars['login_message']->value;?>
</h1>
                <span>
                    <a href="https://joinmastodon.org/" target="_blank">
                        <?php echo $_smarty_tpl->tpl_vars['login_create_an_account']->value;?>

                    </a>
                </span>
            </div>

            <div class="login_form_input_wrap">

                <div class="login_form_error_message">
                    <span>
                        <?php echo $_smarty_tpl->tpl_vars['login_error_message']->value;?>

                    </span>
                </div>

                <div class="login_form_acct_wrap">
                    <input
                    name="acct" type="text" required
                    pattern="^@(.{0,30}?)@(.+?)\.(.+?)$"
                    placeholder="@halcyon@mastodon.social" class="login_form_acct"
                    maxlength="287"
                    />
                    <label class="login_form_submit cursor-pointer">
                        <input type="submit" class="invisible"/>
                        <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
                    </label>
                </div>

                <label class="login_form_agree_checkbox unselectable cursor-pointer">
                    <input id="agree" type="checkbox" required checked class="invisible"/>
                    <i class="fa"><!-- fa-check-square-o --></i>
                    <?php echo $_smarty_tpl->tpl_vars['login_agreee_terms']->value;?>

                </label>

            </div>

        </form>

    </section>

    <article class="login_article">

        <h2><?php echo $_smarty_tpl->tpl_vars['login_what_is_halcyon']->value;?>
</h2>
        <p><?php echo $_smarty_tpl->tpl_vars['login_what_is_halcyon_content']->value;?>
</p>

        <h2><?php echo $_smarty_tpl->tpl_vars['login_feedback']->value;?>
</h2>
        <p><?php echo $_smarty_tpl->tpl_vars['login_feedback_content']->value;?>
</p>

        <div class="login_contact_box">
            <ul class="contact_list">

                <li class="contact_child mastodon">
                    <a href="https://mastodon.social/@halcyon">
                        <h3>
                            <i class="hlicon-mastodon"></i>
                            Mastodon
                        </h3>
                        <span>@halcyon@mastodon.social</span>
                    </a>
                </li>

                <li class="contact_child github">
                    <a href="https://github.com/halcyon-suite/halcyon">
                        <h3>
                            <i class="fa fa-github" aria-hidden="true"></i>
                            GitHub
                        </h3>
                        <span>/halcyon-suite/halcyon</span>
                    </a>
                </li>

                <li class="contact_child email">
                    <a href="mailto:neetshin@neetsh.in">
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

        <ul class="donate_links">

            <li class="donate_link bitcoin">
                Bitcoin: <code>3AucsLDnY37qipYngLM5KH9heWkJ1AEArv</code>
            </li>

            <li class="donate_link patreon">
                Patreon: <a href="https://www.patreon.com/neetshin">https://www.patreon.com/neetshin</a>
            </li>

        </ul>

    </article>

</main>

<?php $_smarty_tpl->_subTemplateRender("file:footers/footer_login.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
}
}
