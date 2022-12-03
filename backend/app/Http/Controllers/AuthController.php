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
                'error' => 'user is not registered'], 200);
        }

        if (!$token=JWTAuth::fromUser($user)) {
                    return response()->json(['error' => 'invalid credentials'], 401);
                }
            
        return response()->json([ 'status'=> 1, 'token'=>$token, 'data'=>$user]);
    }

    public function register(Request $request)
    {
        $request->validate([
            "id" => "required|unique:users",
            "name" => "required",
            "date_of_birth" => "required",
            "profile_picture" => "required",
        ]);

        $user = new User();
        $user->id = $request->id;
        $user->name = $request->name;
        $user->date_of_birth = $request->date_of_birth;
        $user->profile_picture = $request->profile_picture;
        $user->save();

        $user=User::where('id','=',$request->id)->first();
        $token=JWTAuth::fromUser($user);

        return response()->json([
            "status" => 1,
            "message" => "User registered successfully",
            "authorisation" => [
                "token" => $token,
                "type" => "bearer",
            ]
        ], 200);
    }

}