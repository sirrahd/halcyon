<?php

return [

    // Name of your application
    'client_name' => "Haclyon for Mastodon",

    // Where the user should be redirected after authorization
    // (for no redirect, use urn:ietf:wg:oauth:2.0:oob)
    'redirect_uris' => [
        'https://halcyon.social/login',
        'urn:ietf:wg:oauth:2.0:oob'
    ],

    // This can be a space-separated list of the following items:
    // "read", "write" and "follow" (see this page for details on what the scopes do)
    'scopes' => ['read', 'write', 'follow'],

    // URL to the homepage of your app
    // * optional config *
    'website' => "https://halcyon.social/",
];
