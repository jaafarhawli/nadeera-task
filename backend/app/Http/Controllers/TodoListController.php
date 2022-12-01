<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TodoList;

class TodoListController extends Controller
{
    function showList() {
        $data = TodoList::get(["id","name","description", "image"]);

        return response()->json([
            "status" => "Success",
            "data" => $data
        ]);
    }
}
     