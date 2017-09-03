<?php

/**
 *               Halcyon
 * The another web interface of Mastodon
 *
 * @author    Neetshin <neetshin@neetsh.in>
 * @copyright (c) 2017 Halcyon Suite
 * @license   www.gnu.org/licenses/agpl-3.0.html
 */
require_once __DIR__."/../app/vendor/autoload.php";

error_reporting(E_ALL);
ini_set("error_log", __DIR__."/../log/error.log");

defineConstants();
router();
