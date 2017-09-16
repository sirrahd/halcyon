@extends('abstract.body')

@section('title')
    @lang('title-login')
@stop

@section('content')
    @include('headers.header')

    <main id="main" class="main main--login">
        <article class="page-container page-container--login">
            <section class="login-form-wrapper">

                <h2>@lang('login-form-text')</h2>

                <?php if (app('request')->input('error_description')): ?>
                    <span class="login-error-message">
                        {{ app('request')->input('error_description') }}
                    </span>
                <?php endif; ?>

                <form class="login-form" method="post" action="/login">

                    <input
                        class="login-form__acct reset-input"
                        type="text"
                        name="acct"
                        required
                        pattern="^@[a-zA-Z0-9_]{1,30}@(.+?)\.(.+?)$"
                        maxlength="285" {{-- Atmark(1) + AcctName(30) + Atmark(1) + Domain(254) --}}
                        placeholder="@halcyon@mastodon.social"
                    />

                    <input class="login-form__submit reset-input cursor-pointer" type="submit" value="@lang('login-form-submit')"/>

                    <label class="login-form__agree cursor-pointer">
                        <input
                            type="checkbox"
                            required
                            checked
                        />
                        <a href="/terms">
                            @lang('login-from-agree')
                        </a>
                    </label>

                    {{ csrf_field() }}

                </form>
            </section>

            @include('widgets.footer')
        </article>
    </main>

    @include('footers.footer')
@stop
