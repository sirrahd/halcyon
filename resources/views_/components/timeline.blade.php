<div
    id="timeline"
    class="timeline"
    data-timeline-type="{{ Route::currentRouteName() }}"
    data-user-id="{{ Request::input('uid') or "" }}"
    data-username="{{ $acct or "" }}"
>

    <header class="timeline-header">
        @if (is_in_profile_page())
            @include('components.timeline-parts.profile-page-nav')
        @elseif(is_in_search_page())
            {{-- pass --}}
        @else
            @include('components.timeline-parts.compose-toot')
        @endif
    </header>

    <section class="timeline-section">
        <div id="toot-form">

        </div>
        <ul class="js-timeline-collection">
            {{-- Statuses --}}
        </ul>
    </section>

    <footer class="timeline-footer">
        @include('components.timeline-parts.load-icon')
    </footer>

</div>
