FROM php:fpm-alpine
# --> PHP 7.1.9 (cli)

LABEL maintainer="https://github.com/halcyon-suite/halcyon" \
description="The another web interface of Mastodon"

ENV NODE_ENV=production

WORKDIR /halcyon

# Installation
RUN apk -U upgrade \
 && apk add \
    curl \
    git \
    nodejs \
 && npm install -g yarn \
 && rm -rf /var/cache/apk/*

COPY composer.json composer.lock package.json yarn.lock /halcyon/ \
  && composer.phar /usr/local/bin/composer

RUN chmod 757 app storage \
 && npm -g cache clean \
 && yarn cache clean \
 && composer install \
 && yarn --ignore-optional --pure-lockfile

COPY . /halcyon
