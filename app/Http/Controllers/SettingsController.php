<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function index(Request $request) {
        if ( $request->input('setting') ) {
            return response()->json(['error' => 'Invalid setting object'], 500);
        }

        $request->session()->put('lang', $request->input('setting')['lang']);
        $request->session()->put('theme', $request->input('setting')['theme']);

        return response()->json($request->input('setting'));
    }
}
