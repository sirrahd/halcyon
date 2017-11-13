<?php

return [

    // Name of your application
    'client_name' => "Haclyon for Mastodon",

    // Path to redirect after authorization
    'redirect_uris' => [
        url('/login'),
        'urn:ietf:wg:oauth:2.0:oob'
    ],

    // Scope app requests
    'scopes' => ['read', 'write', 'follow'],

    // Optional: URL of app
    'website' => url('/'),
];
