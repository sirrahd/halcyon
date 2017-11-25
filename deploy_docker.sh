#!/bin/sh

docker-compose exec web ash
cd /halcyon
php artisan key:generate
php artisan migrate
php artisan route:cache
php artisan config:cache
exit
