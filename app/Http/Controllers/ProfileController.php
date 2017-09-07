<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class ProfileController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * index
     * Index action
     */
    public function index()
    {
        return view("profile");
    }

    public function following()
    {

    }

    public function followers()
    {

    }

    public function favourites()
    {

    }

    public function withReplies()
    {

    }

    public function media()
    {
        
    }
}
