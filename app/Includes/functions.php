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
 * Detect whether valid URL
 *
 * @param   string   URL
 * @return  boolean  result
 */
function is_url($url)
{
    return false !== filter_var($url, FILTER_VALIDATE_URL) && preg_match('@^https?+://@i', $url);
}
