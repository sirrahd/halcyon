<?php
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api'], function() {
    // 例
    // Route::get('articles',  function() {
    //     $articles = Article::all()->take(5);
    //     return $articles;
    // });
    Route::post('login', 'LoginController@auth');
    // Route::post('fetchAuthToken', 'LoginController@auth');

});
