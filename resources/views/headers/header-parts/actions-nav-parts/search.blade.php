
<div class="actions-nav-search" role="search">
    <form class="search-form" action="{{ action('SearchController@index') }}" method="GET">
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
