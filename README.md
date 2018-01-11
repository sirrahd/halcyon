# Halcyon
Halcyon is another web interface of [Mastodon](https://github.com/tootsuite/mastodon/).

## Features
- 3 column based familiar interface.
- Able to use in every instance.
- Deployable with Docker.
- No tracking, No ads.

## Supporting
|Platform  |Version|
|:---------|:------|
|Mastodon  |latest |

## Deployment
At first, you need to create `.env` file. This file defines environment variables that enable the application container.
```bash
cp .env.example .env
```

Then, Set your host URL in the `.env`. It's necessary for registration of Mastodon API.
```env
APP_URL=https://example.com
```

If you want, uncomment following variables to change several information of client.
```diff
- # MASTODON_CLIENT_NAME="My Halcyon Fork"
- # MASTODON_WEBSITE=https://example.com/about/
+ MASTODON_CLIENT_NAME="My Halcyon Fork"
+ MASTODON_WEBSITE=https://example.com/about/
```

Then, modify `docker-compose.yml` to uncomment following lines. It makes database persistence.
```diff
db:
  restart: always
  image: postgres:10.1-alpine
-  # volumes:
-  #   - ./postgres:/var/lib/postgresql/data
+  volumes:
+    - ./postgres:/var/lib/postgresql/data

redis:
  restart: always
  image: redis:4.0.2-alpine
-  # volumes:
-  #   - ./redis:/data
+  volumes:
+    - ./redis:/data
```

Then initialize the database, install dependencies and compile assets.
```
docker-compose run --rm web composer install --no-progress \
 && php artisan key:generate \
```
```
docker-compose run --rm web php artisan migrate \
 && yarn --pure-lockfile \
 && yarn run prod
```

Finally, run containers. By default, container exposes its web server in `localhost:2800` so you need to proxy a port in your host to the container.
```bash
docker-compose up
```

### Stop application temporary
```bash
docker-compose stop
```

### Remove application
```bash
docker-compose rm
```

## Development
Move into the web container
```bash
docker-compose exec web ash
```

Change `NODE_ENV` to `development` and then install dependence packages for development.
```bash
cd /halcyon
export NODE_ENV="development"
yarn --pure-lockfile
```

After modifying codes, you can build them with:
```bash
yarn run build:development

# Build automatically if updated files
yarn run build:development --watch
```

---

## Donations
Thanks for supporting Halcyon in [Patreon](https://www.patreon.com/neetshin)!
- [Ryan Prior](https://www.patreon.com/ryanprior)
- [Sandro Hawke](https://www.patreon.com/user?u=4112551)
- [Brenda Salem](https://www.patreon.com/user?u=8460542)
- [Technowix](https://www.patreon.com/user/creators?u=5702560)

### How to support development?
- Become a patron via [Patreon](https://www.patreon.com/neetshin).
- Donate to Bitcoin address: `3AucsLDnY37qipYngLM5KH9heWkJ1AEArv`.
- Create Pull Requests/Issues in this repository.
