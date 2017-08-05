<?php

/**
 * h
 *
 * @param     string     $char
 *
 * @return    string     $return
 */
function h($char)
{
    $return = htmlspecialchars((string)$char, ENT_QUOTES);

    return $return;
}

/**
 * parse_json_file
 *
 * @param     string     $json_path
 *
 * @return    string     $return
 */
function parse_json_file($json_path)
{
    $json_file = file_get_contents($json_path);
    $return    = json_decode($json_file);

    return $return;
}