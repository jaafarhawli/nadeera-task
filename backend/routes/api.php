<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TodoListController;

Route::group(["prefix"=> "v1"], function() {
    
    Route::post('login', [AuthController::class, "login"]);
    Route::post('register', [AuthController::class, "register"]);

    Route::group(["middleware" => "auth:api"], function() {
        Route::get('/valid', function () { return 1; });
        Route::get('/', [TodoListController::class, "showList"]);
    });
    
}); 