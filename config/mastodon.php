<?php

return [

    // Name of your application
    // You can modify this at .env
    'client_name' => env('MASTODON_CLIENT_NAME', 'Haclyon'),

    // Path to redirect after authorization
    'redirect_uris' => [
        rtrim(env('APP_URL'), '/').'/login/verify_response',
        'urn:ietf:wg:oauth:2.0:oob'
    ],

    // Scopes app requests
    'scopes' => ['read', 'write', 'follow'],

    // Optional: URL of app
    // You can modify this at .env
    'website' => env('MASTODON_WEBSITE', env('APP_URL')),
];
