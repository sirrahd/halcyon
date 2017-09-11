<div class="widget-profile-card">

    <div class="widget-profile-card__header js-user-header">
        {{-- Image of background --}}
    </div>

    <div class="widget-profile-card__profile">

        <div class="profile-image">
            <img class="js-user-avatar" src="/images/omae-mona.png" />
        </div>

        <div class="profile-username">
            <a class="js-user-link">

                <h2 class="js-user-displayname">
                    {{-- User DisplayName --}}
                </h2>

                <span class="js-username">
                    {{-- @username --}}
                </span>

            </a>
        </div>

    </div>

    <div class="widget-profile-card__stats">

        <div class="profile-stats profile-stats--toots">
            <h3>@lang('widget-profile-card-toots')</h3>
            <span class="js-toot-stats">
                {{-- count of toots --}}
            </span>
        </div>

        <div class="profile-stats profile-stats--following">
            <h3>@lang('widget-profile-card-following')</h3>
            <span class="js-following-stats">
                {{-- count of following --}}
            </span>
        </div>

        <div class="profile-stats profile-stats--followers">
            <h3>@lang('widget-profile-card-followers')</h3>
            <span class="js-follower-stats">
                {{-- count of followers --}}
            </span>
        </div>

    </div>

</div>
