const mix = require('laravel-mix');

mix
  .react('resources/javascript/main.js', 'public/packs')
  .sass('resources/stylesheet/theme_dark.scss', 'public/packs')
  .sass('resources/stylesheet/theme_light.scss', 'public/packs');

if (mix.inProduction()) {
  mix.version();
} else {
  mix.sourceMaps();
}
