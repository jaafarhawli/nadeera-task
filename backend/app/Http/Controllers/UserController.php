<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    function uploadImage(Request $request) {
        {
            $request->validate([
                'image.*' => 'mimes:doc,pdf,docx,zip,jpeg,png,jpg,gif,svg',
            ]);
            $id = $request->id;
            if($file = $request->hasFile('image')) {
                 
                $file = $request->file('image') ;
                $fileName = $file->getClientOriginalName() ;
                $destinationPath = public_path().'/images'.'/'.$id;
                $file->move($destinationPath,$fileName);
                $url = 'http://127.0.0.1:8000/images/'.$id.'/'.$fileName;
                User::where('id', '=', $id)->update(['profile_picture' => $url]);
                return response()->json([
                    "status" => "Success",
                    "path" => $url
                ]); 
        }
      }
    } 
}