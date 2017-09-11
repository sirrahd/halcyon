<div class="profile-page-nav">

    @if( is_profile_page() )
        <div class="profile-page-nav__toggle profile-page-nav__toggle--current profile-page-nav__toggle--toots">
    @else
        <div class="profile-page-nav__toggle profile-page-nav__toggle--toots">
    @endif
        <a href="/{{$acct}}">
            @lang('profile-page-nav-toots')
        </a>
    </div>

    @if( is_profile_with_replies_page() )
        <div class="profile-page-nav__toggle profile-page-nav__toggle--current profile-page-nav__toggle--with-replies">
    @else
        <div class="profile-page-nav__toggle profile-page-nav__toggle--with-replies">
    @endif
        <a href="/{{$acct}}/with_replies">
            @lang('profile-page-nav-with-replies')
        </a>
    </div>

    @if( is_profile_media_page() )
        <div class="profile-page-nav__toggle profile-page-nav__toggle--current profile-page-nav__toggle--media">
    @else
        <div class="profile-page-nav__toggle profile-page-nav__toggle--media">
    @endif
        <a href="/{{$acct}}/media">
            @lang('profile-page-nav-media')
        </a>
    </div>

</div>
