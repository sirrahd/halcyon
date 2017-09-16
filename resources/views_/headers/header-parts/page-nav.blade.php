<nav class="page-nav" role="page-nav">
    <ul class="page-nav-list-wrap">

        <li class="page-nav-list page-nav-list--home">
            @if (is_home_page())
                <a href="/" class="page-nav-list--current">
                    <span class="page-nav-list__icon page-nav-list__icon--home">
                        <i class="hlicon-home-bold"></i>
                    </span>
            @else
                <a href="/">
                    <span class="page-nav-list__icon page-nav-list__icon--home">
                        <i class="hlicon-home"></i>
                    </span>
            @endif
                <span class="page-nav-list__label page-nav-list__label--home">
                    @lang('page-nav-home')
                </span>
            </a>
        </li>

        <li class="page-nav-list page-nav-list--local">
            @if (is_local_page())
                <a href="/local" class="page-nav-list--current">
                    <span class="page-nav-list__icon page-nav-list__icon--local">
                        <i class="hlicon-peoples-bold"></i>
                    </span>
            @else
                <a href="/local">
                    <span class="page-nav-list__icon page-nav-list__icon--local">
                        <i class="hlicon-peoples"></i>
                    </span>
            @endif
                <span class="page-nav-list__label page-nav-list__label--local">
                    @lang('page-nav-local')
                </span>
            </a>
        </li>

        <li class="page-nav-list page-nav-list--federated">
            @if (is_federated_page())
                <a href="/federated" class="page-nav-list--current">
                    <span class="page-nav-list__icon page-nav-list__icon--federated">
                            <i class="hlicon-social-bold"></i>
                    </span>
            @else
                <a href="/federated">
                    <span class="page-nav-list__icon page-nav-list__icon--federated">
                            <i class="hlicon-social"></i>
                    </span>
            @endif
                <span class="page-nav-list__label page-nav-list__label--federated">
                    @lang('page-nav-federated')
                </span>
            </a>
        </li>

        <li class="page-nav-list page-nav-list--notifications">
            @if (is_notifications_page())
                <a href="/notifications" class="page-nav-list_current">
                    <span class="page-nav-list__icon page-nav-list__icon--notifications">
                        <i class="hlicon-bell-bold"></i>
                    </span>
            @else
                <a href="/notifications">
                    <span class="page-nav-list__icon page-nav-list__icon--notifications">
                        <i class="hlicon-bell"></i>
                    </span>
            @endif
                <span class="page-nav-list__label page-nav-list__label--notifications">
                    @lang('page-nav-notifications')
                </span>
            </a>
        </li>

    </ul>
</nav>
