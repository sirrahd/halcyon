<nav class="navigation" role="navigation">
    <ul class="navigation-list-wrap">

        <li class="navigation-list navigation-list_home">
            <a href="{{ action('HomeController@index') }}"
                @if (Route::currentRouteName() === 'home')
                    class="navigation-list_current"
                @endif
            >

                <span class="navigation-list__icon navigation-list__label_home">
                    @if (Route::currentRouteName() === 'home')
                        <i class="hlicon-home-bold"></i>
                    @else
                        <i class="hlicon-home"></i>
                    @endif
                </span>

                <span class="navigation-list__label navigation-list__label_home">
                    @lang('home-label')
                </span>

            </a>
        </li>

        <li class="navigation-list navigation-list_local">
            <a href="{{ action('LocalController@index') }}"
                @if (Route::currentRouteName() === 'local')
                    class="navigation-list_current"
                @endif
            >

                <span class="navigation-list__icon navigation-list__label_local">
                    @if (Route::currentRouteName() === 'local')
                        <i class="hlicon-peoples-bold"></i>
                    @else
                        <i class="hlicon-peoples"></i>
                    @endif
                </span>

                <span class="navigation-list__label navigation-list__label_local">
                    @lang('local-label')
                </span>

            </a>
        </li>

        <li class="navigation-list navigation-list_federated">
            <a href="{{ action('FederatedController@index') }}"
                @if (Route::currentRouteName() === 'federated')
                    class="navigation-list_current"
                @endif
            >

                <span class="navigation-list__icon navigation-list__label_federated">
                    @if (Route::currentRouteName() === 'federated')
                        <i class="hlicon-social-bold"></i>
                    @else
                        <i class="hlicon-social"></i>
                    @endif
                </span>

                <span class="navigation-list__label navigation-list__label_federated">
                    @lang('federated-label')
                </span>

            </a>
        </li>

        <li class="navigation-list navigation-list_notifications">
            <a href="{{ action('NotificationsController@index') }}"
                @if (Route::currentRouteName() === 'federated')
                    class="navigation-list_current"
                @endif
            >

                <span class="navigation-list__icon navigation-list__label_notifications">
                    @if (Route::currentRouteName() === 'notifications')
                        <i class="hlicon-bell-bold"></i>
                    @else
                        <i class="hlicon-bell"></i>
                    @endif
                </span>

                <span class="navigation-list__label navigation-list__label_notifications">
                    @lang('notifications-label')
                </span>

            </a>
        </li>

    </ul>
</nav>
