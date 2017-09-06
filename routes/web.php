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

Route::get("/",              "HomeController@index")->name("home");
Route::get("/local",         "LocalController@index")->name("local");
Route::get("/federated",     "FederatedController@index")->name("federated");
Route::get("/notifications", "NotificationsController@index")->name("notifications");

Route::pattern("acct", "/^@(.+)@(.+)\.(.+)$/");
Route::get("/{acct}",              "ProfileController@index");
Route::get("/{acct}/following",    "ProfileController@following");
Route::get("/{acct}/followers",    "ProfileController@followers");
Route::get("/{acct}/favourites",   "ProfileController@favourites");
Route::get("/{acct}/with_replies", "ProfileController@withReplies");
Route::get("/{acct}/media",        "ProfileController@media");

Route::get("/login",  "LoginController@index");
Route::post("/login", "LoginController@auth");
Route::get("/logout", "LoginController@logout");
