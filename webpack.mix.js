const mix = require('laravel-mix');

mix
  .react('resources/javascript/main.js', 'public/javascript')
  .sass('resources/stylesheet/theme_dark.scss', 'public/stylesheet')
  .sass('resources/stylesheet/theme_light.scss', 'public/stylesheet');

if (mix.inProduction()) {
  mix.version();
} else {
  mix.sourceMaps();
}
