
<header id="header" class="top-bar" role="banner">
    <div class="top-bar__container">

        <div class="top-bar__child top-bar__center-area">
            @include('headers.header-parts.title')
        </div>

        <div class="top-bar__child top-bar__left-area">
            @if (is_logged_in())
                @include('headers.header-parts.page-nav')
            @else
                @include('headers.header-parts.page-nav-guest')
            @endif
        </div>

        <div class="top-bar__child top-bar__right-area">
            @if (is_logged_in())
                @include('headers.header-parts.action-nav')
            @else
                @include('headers.header-parts.action-nav-guest')
            @endif
        </div>

    </div>
</header>
