#!/bin/sh
grep -E '^APP_KEY=base64:.+?=$' /halcyon/.env

if [ $? -eq 1 ]; then
    php artisan key:generate
fi

php artisan migrate
php artisan route:cache
php artisan config:cache

nginx -g "daemon off;"
