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
            'image.*' => 'required|mimes:doc,pdf,docx,zip,jpeg,png,jpg,gif,svg',
        ]);
        $id = $request->id;
        if($file = $request->hasFile('image')) {
             
            $file = $request->file('image') ;
            $fileName = $file->getClientOriginalName() ;
            $destinationPath = public_path().'/images'.'/'.$id;
            $file->move($destinationPath,$fileName);
            $url = 'http://192.168.0.105:8000/images/'.$id.'/'.$fileName;
            $user = new User();
            $user->id = $request->id;
            $user->name = $request->name;
            $user->date_of_birth = $request->date_of_birth;
            $user->profile_picture = $url;
            $user->save();
    
            $user=User::where('id','=',$request->id)->first();
            $token=JWTAuth::fromUser($user);
    
            return response()->json([
                "status" => 1,
                "message" => "User registered successfully",
                "data" => $user,
                "authorization" => [
                    "token" => $token,
                    "type" => "bearer",
                ]
            ], 200);
        }
        else return response()->json(['error' => 'invalid credentials'], 401);
    }

}