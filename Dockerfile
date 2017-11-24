FROM php:7.1.11-fpm-alpine3.4

LABEL maintainer="https://github.com/halcyon-suite/halcyon" \
      description="The another web interface of Mastodon"

ENV NODE_ENV=production

WORKDIR /halcyon

RUN apk -U upgrade \
 && apk add \
    curl \
    git \
    nginx \
    nodejs \
 && npm install -g yarn \
 && rm -rf /var/cache/apk/* \
 && rm -f /etc/nginx/conf.d/default.conf

ADD ./composer.phar /usr/local/bin/composer \
 && ./etc/php/php.ini /usr/local/etc/php/ \
 && ./etc/php-fpm.d/www.conf /usr/local/etc/php-fpm.d/ \
 && ./etc/nginx/conf.d/halcyon.conf /etc/nginx/conf.d/

COPY . /halcyon

RUN chmod +x /usr/local/bin/composer \
 && chmod -R 770 /halcyon/storage /halcyon/bootstrap/cache \
 && composer install --no-progress \
 && yarn --pure-lockfile --production=false \
 && yarn run build:production

EXPOSE 3050

CMD ["nginx", "-g", "daemon off;"]
