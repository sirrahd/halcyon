<?php

use Illuminate\Http\Request;

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

Route::get('/intent', function (Request $request) {
    return redirect(str_replace('web+mastodon://', '', $request->input('uri')));
});

Route::post('/settings', 'SettingsController@index');

Route::get('/{any?}', function () {
    return view('index');
})->where('any', '.*');
