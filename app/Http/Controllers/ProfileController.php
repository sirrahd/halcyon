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
    public function index($acct)
    {
        return view("profile")
        ->with('acct', $acct);
    }

    public function following($acct)
    {

    }

    public function followers($acct)
    {

    }

    public function favourites($acct)
    {

    }

    public function withReplies($acct)
    {

    }

    public function media($acct)
    {

    }
}
