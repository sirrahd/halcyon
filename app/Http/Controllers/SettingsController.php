<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function index(Request $request) {
        if ( empty($request->all()) ) {
            return response()->json(['error' => 'Invalid settings'], 500);
        }

        $initial_settings = [
            'lang'  => 'en',
            'theme' => '/theme_light.css',
        ];

        $settings = array_merge(
            $initial_settings,
            $request->session()->get('settings'),
            $request->all()
        );

        if ( $settings ) {
            $request->session()->put('settings', $settings);
        }

        return response()->json($request->session()->get('settings'));
    }
}
