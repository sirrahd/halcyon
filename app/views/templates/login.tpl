{include file="headers/header_login.tpl"}

<main id="login">

    <section class="loginForm_wrap">

        <form id="loginForm" method="POST" action="login?auth">

            <div class="loginForm_title">
                <h1>{$login_message}</h1>
                <span>
                    <a href="https://joinmastodon.org/" target="_blank">
                        {$login_create_an_account}
                    </a>
                </span>
            </div>

            <div class="loginForm_input_wrap">

                {if isset($login_error_message)}
                    <div class="loginForm_error_message">
                        <span>
                            {$login_error_message}
                        </span>
                    </div>
                {/if}

                <div class="loginForm_acct_wrap">
                    <input
                        name="acct" type="text"
                        required
                        pattern={literal}"^@(.{0,30}?)@(.+?)\.(.+?)$"{/literal}
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
                    {$login_agreee_terms}
                </label>

            </div>

        </form>

    </section>

    <article class="loginArticle">

        <h2>{$login_what_is_halcyon}</h2>
        <p>{$login_what_is_halcyon_content}</p>
        <h2>{$login_feedback}</h2>
        <p>{$login_feedback_content}</p>

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

        <h2>{$login_help_us}</h2>
        <p>{$login_help_us_content}</p>

        <ul class="donateLinks">
            <li class="donateLink bitcoin">
                Bitcoin: <code>{$developers_bitcoin}</code>
            </li>
            <li class="donateLink patreon">
                Patreon: <a href="{$developers_patreon}" target="_blank">{$developers_patreon}</a>
            </li>
        </ul>

    </article>

</main>

{include file="footers/footer_login.tpl"}
