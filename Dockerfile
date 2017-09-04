FROM php:fpm-alpine
# --> PHP 7.1.9 (cli)
MAINTAINER Neetshin <neetshin@neetsh.in>

# Installation
RUN apk -U upgrade \
 && apk add \
    curl \
    git \
    nodejs \
 && npm install -g yarn
 && curl -s https://getcomposer.org/installer | php
 && mv composer.phar /usr/local/bin/composer

RUN yarn --ignore-optional --pure-lockfile
 && composer install
