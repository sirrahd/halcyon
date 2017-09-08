<footer class="widget-footer">
    <ul class="widget-footer__list">
        <?php
            $anchors = array(
                ['name'=>'widget-footer-title', 'href'=>'/'],
                ['name'=>'widget-footer-donation', 'href'=>'https://www.patreon.com/neetshin'],
                ['name'=>'widget-footer-about', 'href'=>''],
                ['name'=>'widget-footer-terms', 'href'=>'/terms'],
                ['name'=>'widget-footer-apps', 'href'=>'https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/Apps.md'],
                ['name'=>'widget-footer-source-code', 'href'=>'https://github.com/halcyon-suite/halcyon'],
                ['name'=>'widget-footer-other-instances', 'href'=>'https://github.com/tootsuite/documentation/blob/master/Using-Mastodon/List-of-Mastodon-instances.md']
            )
        ?>
        @foreach ($anchors as $anchor)
            <li class="widget-footer__list__child">
                <a href="{{$anchor['href']}}">
                    @lang($anchor['name'])
                </a>
            </li>
        @endforeach

    </ul>
</footer>
