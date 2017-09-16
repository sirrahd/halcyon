
<div class="action-nav-search" role="search">
    <form class="search-form" action="{{ action('SearchController@index') }}" method="GET">
        <input
            class="action-nav-search__input reset-input"
            type="text"
            name="q"
            placeholder="@lang('action-nav-search')"
        />
        <button class="action-nav-search__submit reset-input cursor-pointer" type="submit">
            <i class="hlicon-loupe"></i>
        </button>
    </form>
</div>
