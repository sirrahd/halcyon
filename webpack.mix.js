const mix = require('laravel-mix');
const path = require('path');

mix.webpackConfig({
  output: {
    path: path.resolve('public/packs'),
  },
});

mix
  .react('resources/halcyon/main.js', 'halcyon')
  .sass('resources/styles/theme_dark.scss', 'styles')
  .sass('resources/styles/theme_light.scss', 'styles');

if (mix.inProduction()) {
  mix.version();
} else {
  mix.sourceMaps();
}
