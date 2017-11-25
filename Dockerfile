FROM php:7.1.11-fpm-alpine3.4

LABEL maintainer="https://github.com/halcyon-suite/halcyon" \
      description="The another web interface of Mastodon"

ENV NODE_ENV=production \
    COMPOSER_ALLOW_SUPERUSER=true

ARG YARN_VERSION=1.1.0
ARG YARN_DOWNLOAD_SHA256=171c1f9ee93c488c0d774ac6e9c72649047c3f896277d88d0f805266519430f3

EXPOSE 80

WORKDIR /halcyon

RUN apk -U upgrade \
 && apk add \
    curl \
    git \
    nginx \
    nodejs \
 && mkdir -p /run/nginx \
 && mkdir -p /tmp/src /opt \
 && wget -O yarn.tar.gz "https://github.com/yarnpkg/yarn/releases/download/v$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
 && echo "$YARN_DOWNLOAD_SHA256 *yarn.tar.gz" | sha256sum -c - \
 && tar -xzf yarn.tar.gz -C /tmp/src \
 && rm yarn.tar.gz \
 && mv /tmp/src/yarn-v$YARN_VERSION /opt/yarn \
 && ln -s /opt/yarn/bin/yarn /usr/local/bin/yarn \
 && rm -rf /tmp/* /var/cache/apk/*

COPY ./composer.phar /usr/local/bin/composer
COPY ./etc/php/php.ini /usr/local/etc/php
COPY ./etc/php-fpm.d/www.conf /usr/local/etc/php-fpm.d
COPY ./etc/nginx/conf.d/halcyon.conf /etc/nginx/conf.d/default.conf

COPY . /halcyon

RUN chmod -R 770 /halcyon/storage /halcyon/bootstrap/cache \
 && chmod +x /usr/local/bin/composer; sync \
 && composer install --no-progress \
 && yarn --pure-lockfile \
 && yarn cache clean \
 && yarn run build:production

COPY docker_entrypoint.sh /usr/local/bin/run

RUN chmod +x /usr/local/bin/run; sync

VOLUME ["/halcyon", "/etc/nginx/conf.d", "/usr/local/etc/php", "/usr/local/etc/php-fpm.d"]

ENTRYPOINT ["/usr/local/bin/run"]
