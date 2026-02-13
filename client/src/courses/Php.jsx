// PHP.jsx
import React, { useState } from "react";
import "./All.css";

export default function PHP() {
  const [selected, setSelected] = useState("PHP Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "🐘 PHP Programming": {
      "PHP Introduction": {
        title: "PHP Introduction",
        content: `
PHP is a popular server-side scripting language used for web development.
It is embedded in HTML and works with databases like MySQL.
Key features:
- Open-source
- Server-side scripting
- Cross-platform
        `,
        example: `<?php
echo "Hello, PHP!";
?>`,
      },
      "PHP Data Types": {
        title: "PHP Data Types",
        content: `
PHP supports:
- String
- Integer
- Float
- Boolean
- Array
- Object
- NULL
        `,
        example: `<?php
$name = "Raj";
$age = 25;
$isActive = true;
$numbers = array(1,2,3);
?>`,
      },
      "PHP Operators": {
        title: "PHP Operators",
        content: `
PHP Operators:
- Arithmetic: +, -, *, /, %
- Assignment: =, +=, -=, *=
- Comparison: ==, ===, !=, >, <
- Logical: &&, ||, !
        `,
        example: `<?php
$a = 10;
$b = 5;
if($a > $b && $b > 0){
    echo "a is greater than b";
}
?>`,
      },
      "PHP Functions": {
        title: "PHP Functions",
        content: `
Functions are reusable code blocks in PHP.
- Built-in: strlen(), array_push(), date()
- User-defined: function myFunction() { ... }
        `,
        example: `<?php
function greet($name){
    return "Hello, $name!";
}
echo greet("Raj");
?>`,
      },
      "PHP CRUD Example": {
        title: "CRUD Example",
        content: `
CRUD in PHP with MySQL:
- Create, Read, Update, Delete records
- Uses mysqli or PDO
        `,
        example: `<?php
$mysqli = new mysqli("localhost","root","","testdb");
// Create
$mysqli->query("INSERT INTO users(name,email) VALUES('Raj','raj@test.com')");
// Read
$result = $mysqli->query("SELECT * FROM users");
while($row = $result->fetch_assoc()){
    echo $row['name']." - ".$row['email']."<br>";
}
// Update
$mysqli->query("UPDATE users SET email='raj123@test.com' WHERE name='Raj'");
// Delete
$mysqli->query("DELETE FROM users WHERE name='Raj'");
?>`,
      },
    },
    "🌐 Laravel Framework": {
      "Laravel Introduction": {
        title: "Laravel Introduction",
        content: `
Laravel is a PHP framework for building modern web applications.
- Follows MVC pattern
- Provides routing, authentication, and templating
- Simplifies database operations with Eloquent ORM
        `,
        example: `// Route example in routes/web.php
Route::get('/', function () {
    return view('welcome');
});`,
      },
      "Laravel MVC": {
        title: "Laravel MVC",
        content: `
- Model: Interacts with database
- View: Templates for UI (Blade)
- Controller: Handles logic between model and view
        `,
        example: `// Controller Example
php artisan make:controller UserController

// UserController.php
public function index(){
    $users = User::all();
    return view('users.index', compact('users'));
}`,
      },
      "Laravel Routing": {
        title: "Laravel Routing",
        content: `
Laravel allows routing URLs to controllers or closures.
- GET, POST, PUT, DELETE supported
        `,
        example: `Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);`,
      },
      "Laravel Blade Templating": {
        title: "Blade Templating",
        content: `
Blade is Laravel's templating engine.
- Supports loops, conditions, template inheritance
        `,
        example: `<!-- resources/views/users.blade.php -->
<h1>Users List</h1>
@foreach($users as $user)
    <p>{{ $user->name }} - {{ $user->email }}</p>
@endforeach`,
      },
      "Laravel Eloquent ORM": {
        title: "Eloquent ORM",
        content: `
Eloquent ORM simplifies database interactions.
- Define models
- Perform CRUD operations easily
        `,
        example: `// User.php Model
class User extends Model {
    protected $fillable = ['name', 'email'];
}

// Usage
$users = User::where('active', 1)->get();`,
      },
      "Laravel Authentication": {
        title: "Authentication",
        content: `
Laravel provides ready-made authentication.
- User registration, login, password reset
- Use artisan commands: php artisan make:auth (Laravel 6 and below)
        `,
        example: `php artisan make:auth
php artisan migrate`,
      },
      "Laravel Real-World Example": {
        title: "Real-World Example",
        content: `
Example: Blog Management System
- Users can create, edit, delete blog posts
- Admin panel with authentication
- Eloquent ORM for database operations
        `,
        example: `// Controller
public function store(Request $request){
    Blog::create($request->all());
    return redirect()->route('blogs.index');
}

// Blade
@foreach($blogs as $blog)
    <h2>{{ $blog->title }}</h2>
    <p>{{ $blog->content }}</p>
@endforeach`,
      },
    },
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 400);
      setSidebarWidth(newWidth);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  const selectedContent =
    Object.values(sections)
      .map((topics) => topics[selected])
      .filter(Boolean)[0] || "";

  return (
    <div
      className="dashboard"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <header className="header">
        <h1>🐘 PHP & Laravel Dashboard</h1>
        <input
          type="text"
          placeholder="Search topics..."
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <aside className="sidebar" style={{ width: sidebarWidth }}>
        {Object.keys(sections).map((section) => {
          const filteredTopics = Object.keys(sections[section]).filter((topic) =>
            topic.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filteredTopics.length === 0) return null;
          return (
            <div key={section} className="section">
              <h3 className="section-title">{section}</h3>
              <ul>
                {filteredTopics.map((topic) => (
                  <li
                    key={topic}
                    onClick={() => setSelected(topic)}
                    className={selected === topic ? "active" : ""}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
              <hr />
            </div>
          );
        })}
      </aside>

      <div className="resizer" onMouseDown={handleMouseDown}></div>

      <main className="content">
        <h2>{selected}</h2>
        {typeof selectedContent === "object" ? (
          <div>
            <pre className="code-block">
              <code>{selectedContent.content}</code>
            </pre>
            <pre className="code-block php">
              <code>{selectedContent.example}</code>
            </pre>
          </div>
        ) : (
          <p>{selectedContent}</p>
        )}
      </main>
    </div>
  );
}
