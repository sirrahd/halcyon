#!/bin/sh
php artisan key:generate
php artisan migrate
php artisan route:cache
php artisan config:cache
nginx -g "daemon off;"
