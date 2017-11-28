#!/bin/sh
grep -E '^APP_KEY=base64:.+?=$' /halcyon/.env
if [ $? -eq 1 ]; then
    php artisan key:generate
fi

## Optimize some settings
php artisan migrate
php artisan route:cache
php artisan config:cache

## Starting php-fpm
php-fpm

## Starting nginx
nginx -g "daemon off;"
