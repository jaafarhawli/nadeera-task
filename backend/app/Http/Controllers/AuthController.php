<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use JWTAuth;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $user=User::where('id','=',$request->id)->first();
        if(!$user) {
            return response()->json([
                'status' => 0,
                'error' => 'user is not registered'], 400);
        }

        if (!$token=JWTAuth::fromUser($user)) {
                    return response()->json(['error' => 'invalid credentials'], 401);
                }
            
        return response()->json([ 'status'=> 1, 'token'=>$token]);
    }
    
}