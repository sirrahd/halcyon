# Halcyon for Mastodon
A Mastodon web client

<img src="https://halcyon.social/login/assets/images/preview0.png"/>

## Demo
https://halcyon.social/

## Features
- Twitter like UI, familiar interface.
- Able to use on all instances.
- No tracking, No ads.

## Requirement
- Apache
- PHP
- MySQL

## Setup(仮)
I didn't prepared setup script so you have to setup manually...

### MySQL
```bash.sh
CREATE DATABASE <DB NAME> DEFAULT CHARACTER SET utf8;
CREATE TABLE <DB NAME>.instances(domain varchar(261), client_id varchar(64), client_secret varchar(64));
```
and change `/authorize/Mastodon.php` like this
```Mastodon.php
private $clientName = 'Halcyon for Mastodon';
private $clientRedirectUris = 'https://<YOUR DOMAIN>/auth urn:ietf:wg:oauth:2.0:oob';
private $clientWebsite = 'https://<YOUR DOMAIN>/';
private $clientScopes = array('read', 'write', 'follow');
private $instances = array();
private $dbHost = '<DB HOST>';
private $dbUser = '<DB USERNAME>';
private $dbPass = '<DB PASSWORD>';
private $dbName = '<DB NAME>';
```

## Credits

- [Kirschn/mastodon.js](https://github.com/Kirschn/mastodon.js)
- [yks118/Mastodon-api-php](https://github.com/yks118/Mastodon-api-php)
