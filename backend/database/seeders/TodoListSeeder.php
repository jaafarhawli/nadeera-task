<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TodoList;

class TodoListSeeder extends Seeder
{

    public function run()
    {
        $listItems = [[
            'name' => 'Task 1',
            'description' => 'Learn html and css',
            'date' => '2022-12-1',
            'image' => 'http://127.0.0.1:8000/List/1/html_css.png'
        ],
        [
            'name' => 'Task 2',
            'description' => 'Learn javascript',
            'date' => '2022-12-2',
            'image' => 'http://127.0.0.1:8000/List/2/javascript.png'
        ],
        [
            'name' => 'Task 3',
            'description' => 'Learn php',
            'date' => '2022-12-3',
            'image' => 'http://127.0.0.1:8000/List/3/php.png'
        ],
        [
            'name' => 'Task 4',
            'description' => 'Learn Laravel',
            'date' => '2022-12-4',
            'image' => 'http://127.0.0.1:8000/List/4/laravel.jpg'
        ],
        [
            'name' => 'Task 5',
            'description' => 'Learn ReactJS and React Native',
            'date' => '2022-12-5',
            'image' => 'http://127.0.0.1:8000/List/5/react.png'
        ],
        [
            'name' => 'Task 6',
            'description' => 'Develop a full stack project',
            'date' => '2022-12-6',
            'image' => 'http://127.0.0.1:8000/List/6/full_stack.jpg'
        ],];

        foreach($listItems as $item){
            TodoList::insert($item);
        }
    }
}
