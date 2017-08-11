{include file="common/login_header.tpl"}

<main id="login_main">

    <section class="login_form_wrap">

        <form id="login_form" method="POST" action="login?auth">

            <div class="login_form_title">
                <h1>{$login_message}</h1>
                <span>
                    <a href="https://joinmastodon.org/" target="_blank">
                        {$login_create_an_account}
                    </a>
                </span>
            </div>

            <div class="login_form_input_wrap">

                <div class="login_form_error_message">
                    <span>
                        {$login_error_message}
                    </span>
                </div>

                <div class="login_form_acct_wrap">
                    <input
                    name="acct" type="text" required
                    {literal}pattern="^@(.{0,30}?)@(.+?)\.(.+?)$"{/literal}
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
                    {$login_agreee_terms}
                </label>

            </div>

        </form>

    </section>

    <article class="login_article">

        <h2>{$login_what_is_halcyon}</h2>
        <p>{$login_what_is_halcyon_content}</p>

        <h2>{$login_feedback}</h2>
        <p>{$login_feedback_content}</p>

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

        <h2>{$login_help_us}</h2>
        <p>{$login_help_us_content}</p>

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

{include file="common/login_footer.tpl"}