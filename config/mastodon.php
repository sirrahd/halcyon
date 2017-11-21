<?php

return [

    // Name of your application
    'client_name' => env('MASTODON_CLIENT_NAME', "Haclyon"),

    // Path to redirect after authorization
    'redirect_uris' => [
        env('APP_URL').'/login',
        'urn:ietf:wg:oauth:2.0:oob'
    ],

    // Scope app requests
    'scopes' => ['read', 'write', 'follow'],

    // Optional: URL of app
    'website' => env('MASTODON_WEBSITE', env('APP_URL')),
];
