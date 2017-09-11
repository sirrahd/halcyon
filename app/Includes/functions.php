<?php

/**
 * Sanitize HTML
 *
 * @param     string     Text
 * @return    string     Sanitized Text
 */
function h($char)
{
    $return = htmlspecialchars((string)$char, ENT_QUOTES);
    return $return;
}

/**
 * Parse JSON file to associative array
 *
 * @param     string     Path to JSON
 * @return    array      Parsed array
 */
function parse_json_file($json_path)
{
    $json_file = file_get_contents($json_path);
    $return    = json_decode($json_file, true);
    return $return;
}

/**
 * Detect whether fact URL
 *
 * @param   string   URL that you want Detect
 * @return  boolean  result
 */
function is_url($url)
{
    return false !== filter_var($url, FILTER_VALIDATE_URL) && preg_match('@^https?+://@i', $url);
}

/**
 * Check whether user logged in
 * @return  boolean
 */
function is_logged_in()
{
    return Request::cookie('logged_in') === 'true';
}

/**
 * Check whether current page is home page
 * @return  boolean
 */
function is_home_page()
{
    return Route::currentRouteName() === 'home';
}

/**
 * Check whether current page is local timeline
 * @return  boolean
 */
function is_local_page()
{
    return Route::currentRouteName() === 'local';
}

/**
 * Check whether current page is federated timeline
 * @return  boolean
 */
function is_federated_page()
{
    return Route::currentRouteName() === 'federated';
}

/**
 * Check whether current page is notifications page
 * @return  boolean
 */
function is_notifications_page()
{
    return Route::currentRouteName() === 'notifications';
}

/**
 * Check whether current page is profile page
 * @return  boolean
 */
function is_profile_page()
{
    return Route::currentRouteName() === 'profile';
}

/**
 * Check whether current page is profile_following page
 * @return  boolean
 */
function is_profile_following_page()
{
    return Route::currentRouteName() === 'profile_following';
}

/**
 * Check whether current page is profile_followers page
 * @return  boolean
 */
function is_profile_followers_page()
{
    return Route::currentRouteName() === 'profile_followers';
}

/**
 * Check whether current page is profile_favourites page
 * @return  boolean
 */
function is_profile_favourites_page()
{
    return Route::currentRouteName() === 'profile_favourites';
}

/**
 * Check whether current page is profile_with_replies page
 * @return  boolean
 */
function is_profile_with_replies_page()
{
    return Route::currentRouteName() === 'profile_with_replies';
}

/**
 * Check whether current page is profile_media page
 * @return  boolean
 */
function is_profile_media_page()
{
    return Route::currentRouteName() === 'profile_media';
}

/**
 * Check whether current page is one of profile page
 * @return  boolean
 */
function is_in_profile_page()
{
    return preg_match("/^profile/", Route::currentRouteName());
}

/**
 * Check whether current page is search page
 * @return  boolean
 */
function is_search_page()
{
    return Route::currentRouteName() === 'search';
}

/**
 * Check whether current page is search_users page
 * @return  boolean
 */
function is_search_users_page()
{
    return Route::currentRouteName() === 'search_users';
}

/**
 * Check whether current page is one of search page
 * @return  boolean
 */
function is_in_search_page()
{
    return preg_match("/^search/", Route::currentRouteName());
}

/**
 * Check whether current page is login page
 * @return  boolean
 */
function is_login_page()
{
    return Route::currentRouteName() === 'login';
}

/**
 * Get current user's theme
 * @return  string   $retrun  string of theme name
 */
function get_user_theme()
{
    $retrun = Request::cookie('theme');
    if (!empty($retrun)) {
        return $retrun;
    } else {
        Cookie::queue(cookie('theme', 'halcyon', time()+365*24*3600));
        return 'halcyon';
    }
}
