<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TodoList;

class TodoListController extends Controller
{
    // Return user info from user id to display in user modal
    function showList(Request $id) {
        $data = TodoList::get(["id","name","description", "image"]);

        return response()->json([
            "status" => "Success",
            "data" => $data
        ]);
    }
}
     