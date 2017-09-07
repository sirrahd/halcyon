<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the 'web' middleware group. Now create something great!
|
*/

Route::pattern('acct', '/^@(.+)@(.+)\.(.+)$/');

// Main pages
Route::get('/',              'HomeController@index')->name('home');
Route::get('/local',         'LocalController@index')->name('local');
Route::get('/federated',     'FederatedController@index')->name('federated');
Route::get('/notifications', 'NotificationsController@index')->name('notifications');
Route::get('/search', 'SearchController@index')->name('search');
Route::get('/search/users', 'SearchController@users')->name('search_users');

// Profile pages
Route::get('/{acct}',              'ProfileController@index')->name('profile');
Route::get('/{acct}/following',    'ProfileController@following')->name('profile_following');
Route::get('/{acct}/followers',    'ProfileController@followers')->name('profile_followers');
Route::get('/{acct}/favourites',   'ProfileController@favourites')->name('profile_favourites');
Route::get('/{acct}/with_replies', 'ProfileController@withReplies')->name('profile_with_replies');
Route::get('/{acct}/media',        'ProfileController@media')->name('profile_media');

// Login pages
Route::get('/login',  'LoginController@index');
Route::get('/logout', 'LoginController@logout');

Route::post('/login', 'LoginController@auth');
