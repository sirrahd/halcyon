<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/",              "HomeController");
Route::get("/local",         "LocalController");
Route::get("/federated",     "FederatedController");
Route::get("/notifications", "NotificationsController");
Route::get("/login",         "LoginController");
Route::get("/logout",        "LogoutController");

Route::get("/{acct}",              "ProfileController")->where("acct", "/^@(.+)@(.+)\.(.+)$/");
Route::get("/{acct}/following",    "ProfileController@following")->where("acct", "/^@(.+)@(.+)\.(.+)$/");
Route::get("/{acct}/followers",    "ProfileController@followers")->where("acct", "/^@(.+)@(.+)\.(.+)$/");
Route::get("/{acct}/favourites",   "ProfileController@favourites")->where("acct", "/^@(.+)@(.+)\.(.+)$/");
Route::get("/{acct}/with_replies", "ProfileController@withReplies")->where("acct", "/^@(.+)@(.+)\.(.+)$/");
Route::get("/{acct}/media",        "ProfileController@media")->where("acct", "/^@(.+)@(.+)\.(.+)$/");

// Alias
Route::redirect("/home", "/", 301);
