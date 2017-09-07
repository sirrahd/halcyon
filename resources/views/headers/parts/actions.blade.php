<div class="actions-nav">

    <div class="actions-nav-search" role="search">
        <form action="{{ action('SearchController@index') }}" method="GET">
            <input
                class="actions-nav-search__input reset-input"
                type="text"
                name="q"
                placeholder="@lang('actions-nav-search')"
            />
            <button class="actions-nav-search__submit reset-input cursor-pointer" type="submit">
                <i class="hlicon-loupe"></i>
            </button>
        </form>
    </div>

    <div class="actions-nav-toot">
        <button class="actions-nav-toot__button reset-input">
            <span class="actions-nav-toot__label">
                @lang('actions-nav-toot')
            </span>
        </button>
    </div>

</div>
