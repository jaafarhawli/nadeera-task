# nadeera-task

* This project was asked as a technical task by Nadeera company
* The stacks used are Laravel and MySQL for the backend and React Native for frontend
* This app allows users to register via Facebook, after they verify their Facebook account, their Facebook ID, alongside with their full name, profile picture, and birthday 
are loaded to the register screen. 
* The user can change any of the mentioned info before registering
* After registering, a todo-list will be displayed to them on the dashboard (same todo list for all users)
* The user can also view their account info by opening the drawer navigator, where they can also log out of the application


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jaafarhawli/nadeera-task.git
   ```
2. Create a new "nadeera-todolist" database at phpMyAdmin
3. Install NPM packages
   ```sh
   cd task-app
   npm install
   ```
4. Open the backend folder and replace the ip address in the the todo list seeder file and the register function inside the Auth controller to your ipv4 address
5. Open the task-app folder and replace the ip address in the axios file to your ipv4 address
6. Seed and migrate data from laravel to the database
   ```sh
   cd backend
   php artisan migrate:fresh --seed --seeder=TodoListSeeder
   ```
7. Rename .env.example to .env inside the backend folder
8. Start the application
   Run Apache and MySQL in XAMPP
   ```sh
   cd backend
   php artisan serve --host <Your ipv4 address> --PORT 8000
   ```
   ```sh
   cd task-app
   npm start
   ```
9. Scan the QR code on expo go and open the application

