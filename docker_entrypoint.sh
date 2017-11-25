#!/bin/sh
php artisan key:generate
php artisan migrate
php artisan route:cache
php artisan config:cache
nginx -g "daemon off;"

PHP_VERSION=$($(which php) -r "echo phpversion();")
NPM_VERSION=$($(which npm) --version)
YARN_VERSION=$($(which yarn) --version)
NODE_VERSION=$($(which node) --version)
LARAVEL_VERSION=$(php artisan --version)

echo "#########################################################"
echo "                                                         "
echo "          Application initialized successfully           "
echo "          php: $PHP_VERSION / npm: $NPM_VERSION"
echo "          yarn: $YARN_VERSION / node: $NODE_VERSION"
echo "          $LARAVEL_VERSION"
echo "                                                         "
echo "#########################################################"
