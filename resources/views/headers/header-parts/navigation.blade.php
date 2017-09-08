<nav class="navigation" role="navigation">
    <ul class="navigation-list-wrap">

        <li class="navigation-list navigation-list--home">
            @if (is_home_page())
                <a href="/" class="navigation-list--current">
                    <span class="navigation-list__icon navigation-list__icon--home">
                        <i class="hlicon-home-bold"></i>
                    </span>
            @else
                <a href="/">
                    <span class="navigation-list__icon navigation-list__icon--home">
                        <i class="hlicon-home"></i>
                    </span>
            @endif
                <span class="navigation-list__label navigation-list__label--home">
                    @lang('navigations-home')
                </span>
            </a>
        </li>

        <li class="navigation-list navigation-list--local">
            @if (is_local_page())
                <a href="/local" class="navigation-list--current">
                    <span class="navigation-list__icon navigation-list__icon--local">
                        <i class="hlicon-peoples-bold"></i>
                    </span>
            @else
                <a href="/local">
                    <span class="navigation-list__icon navigation-list__icon--local">
                        <i class="hlicon-peoples"></i>
                    </span>
            @endif
                <span class="navigation-list__label navigation-list__label--local">
                    @lang('navigations-local')
                </span>
            </a>
        </li>

        <li class="navigation-list navigation-list--federated">
            @if (is_federated_page())
                <a href="/federated" class="navigation-list--current">
                    <span class="navigation-list__icon navigation-list__icon--federated">
                            <i class="hlicon-social-bold"></i>
                    </span>
            @else
                <a href="/federated">
                    <span class="navigation-list__icon navigation-list__icon--federated">
                            <i class="hlicon-social"></i>
                    </span>
            @endif
                <span class="navigation-list__label navigation-list__label--federated">
                    @lang('navigations-federated')
                </span>
            </a>
        </li>

        <li class="navigation-list navigation-list--notifications">
            @if (is_notifications_page())
                <a href="/notifications" class="navigation-list_current">
                    <span class="navigation-list__icon navigation-list__icon--notifications">
                        <i class="hlicon-bell-bold"></i>
                    </span>
            @else
                <a href="/notifications">
                    <span class="navigation-list__icon navigation-list__icon--notifications">
                        <i class="hlicon-bell"></i>
                    </span>
            @endif
                <span class="navigation-list__label navigation-list__label--notifications">
                    @lang('navigations-notifications')
                </span>
            </a>
        </li>

    </ul>
</nav>
