FROM php:7.1.11-fpm-alpine3.4
MAINTAINER Neetshin <neetshin@neetsh.in>
LABEL maintainer="https://github.com/halcyon-suite/halcyon" \
description="The another web interface of Mastodon"

WORKDIR /var/www/halcyon

RUN apk -U upgrade \
 && apk add \
    curl \
    git \
    nginx \
    nodejs \
 && npm install -g yarn \
 && rm -rf /var/cache/apk/*

COPY composer.json composer.lock package.json yarn.lock /var/www/halcyon/ \
  && composer.phar /usr/local/bin/composer/

RUN chmod 757 app storage \
 && npm -g cache clean \
 && yarn cache clean \
 && composer install \
 && yarn --ignore-optional --pure-lockfile

COPY . /var/www/halcyon

ENV NODE_ENV=production
RUN yarn run build

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
