<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TodoListController;
use App\Http\Controllers\UserController;

Route::group(["prefix"=> "v1"], function() {
    
    Route::post('login', [AuthController::class, "login"]);
    Route::post('register', [AuthController::class, "register"]);
    Route::post('/profile', [UserController::class, "uploadImage"]);

    Route::group(["middleware" => "auth:api"], function() {
        Route::get('/valid', [AuthController::class, "login"]);
        Route::get('/', [TodoListController::class, "showList"]);
    });
    
}); 
