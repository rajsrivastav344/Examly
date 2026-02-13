// CppProgramming.jsx
import React, { useState } from "react";
import "./All.css"; // Reuse the same styling
//import "./CppProgramming.css"; // Optional: Add specific styles if needed

export default function CppProgramming() {
  const [selected, setSelected] = useState("C++ Introduction");
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [quizAnswers, setQuizAnswers] = useState({}); // Track user quiz answers

  // =========================================
  // Comprehensive C++ Curriculum (Expanded)
  // =========================================
  const sections = {
    "🖥️ C++ Programming": {
      "C++ Introduction": {
        title: "C++ Introduction",
        content: `
C++ is a powerful, general-purpose programming language created by Bjarne Stroustrup at Bell Labs in 1983 as an extension of the C language. It combines the efficiency of C with modern programming paradigms.

Key Features of C++:
• Object-Oriented Programming (OOP): Classes, Objects, Inheritance, Polymorphism, Encapsulation, Abstraction
• Multi-paradigm: Supports procedural, functional, generic, and object-oriented programming
• High performance: Compiled language with direct memory management
• Standard Template Library (STL): Rich collection of containers and algorithms
• Strong type system with type safety
• Exception handling
• Operator overloading
• Templates (generic programming)

History Timeline:
1979: Bjarne Stroustrup starts work on "C with Classes"
1983: First official name "C++"
1985: First commercial release
1998: C++98 (first ISO standard)
2011: C++11 (major update: auto, lambda, smart pointers)
2014: C++14
2017: C++17
2020: C++20 (concepts, ranges, modules)
2023: C++23 (latest features)

Why Learn C++?
• Used in game engines (Unreal Engine), operating systems, browsers, finance, robotics, embedded systems
• Teaches low-level programming concepts
• Excellent for performance-critical applications
        `,
        example: `#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to C++ Programming!" << endl;
    cout << "C++ version: " << __cplusplus << endl;
    return 0;
}`,
        extra: "Run this code to see your compiler's C++ standard version."
      },

      "C++ Data Types & Modifiers": {
        title: "C++ Data Types & Modifiers",
        content: `
C++ provides a rich set of data types:

1. Basic / Primitive Types
   - int (usually 4 bytes)
   - float (4 bytes, single precision)
   - double (8 bytes, double precision)
   - char (1 byte)
   - bool (1 byte)
   - long double (10–16 bytes)
   - wchar_t (wide character)

2. Modifiers
   - signed / unsigned
   - short / long
   - long long

3. Derived Types
   - Array
   - Pointer
   - Reference
   - Function

4. User-defined Types
   - class
   - struct
   - union
   - enum
   - typedef

Size & Range (typical 64-bit system):
| Type          | Size (bytes) | Range                                      |
|---------------|--------------|--------------------------------------------|
| char          | 1            | -128 to 127 or 0 to 255                    |
| short         | 2            | -32,768 to 32,767                          |
| int           | 4            | -2,147,483,648 to 2,147,483,647            |
| long long     | 8            | ±9 quintillion                             |
| float         | 4            | ±3.4E ±38 (6-7 significant digits)         |
| double        | 8            | ±1.7E ±308 (15 significant digits)         |

Auto & decltype (C++11+)
auto x = 42;         // int
auto y = 3.14;       // double
decltype(x) z = 10;  // int
        `,
        example: `int main() {
    auto num = 100;          // deduced as int
    auto price = 99.99;      // deduced as double
    auto name = "Raj";       // deduced as const char*
    cout << num << " " << price << " " << name << endl;
    return 0;
}`,
        quiz: {
          question: "What is the size of 'double' in most systems?",
          options: ["4 bytes", "8 bytes", "16 bytes"],
          answer: "8 bytes"
        }
      },

      "C++ Operators (Detailed)": {
        title: "C++ Operators (Detailed)",
        content: `
C++ supports a wide range of operators:

1. Arithmetic Operators
   +  -  *  /  %  ++  --

2. Relational Operators
   ==  !=  >  <  >=  <=

3. Logical Operators
   &&  ||  !

4. Bitwise Operators
   &   |   ^   ~   <<   >>

5. Assignment Operators
   =   +=   -=   *=   /=   %=   &=   |=   ^=   <<=   >>=

6. Miscellaneous
   sizeof, ternary ?:, comma ,, member access ., ->, scope ::, pointer *, & (address-of)

Operator Precedence (highest to lowest):
() → ++ -- (postfix) → ++ -- (prefix) → * / % → + - → << >> → < <= > >= → == != → & → ^ → | → && → || → ? : → = += -= etc.

Important: Most operators are left-associative except assignment and ternary.
        `,
        example: `#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;
    cout << "a + b = " << a + b << endl;
    cout << "a % b = " << a % b << endl;
    cout << "a > b = " << (a > b) << endl;
    cout << "a & b = " << (a & b) << " (binary AND)" << endl;
    cout << "a << 2 = " << (a << 2) << " (left shift)" << endl;
    return 0;
}`,
      },

      "C++ Functions (Advanced)": {
        title: "C++ Functions (Advanced)",
        content: `
Functions in C++:

• Declaration & Definition
• Parameters: pass by value, reference, pointer
• Default arguments
• Function overloading
• Recursion
• Inline functions
• Lambda expressions (C++11)
• Variadic templates (C++11+)
• constexpr functions (compile-time)

Best Practices:
- Keep functions small (single responsibility)
- Use const references for large objects
- Avoid raw pointers when possible (use smart pointers)
        `,
        example: `#include <iostream>
using namespace std;

// Default arguments
void greet(string name = "Guest", int age = 25) {
    cout << "Hello " << name << ", you are " << age << " years old!" << endl;
}

// Overloading
int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }

// Lambda
auto multiply = [](int x, int y) { return x * y; };

int main() {
    greet("Raj", 28);
    greet(); // uses defaults
    cout << add(5, 3) << endl;
    cout << add(5.5, 3.2) << endl;
    cout << multiply(7, 6) << endl;
    return 0;
}`,
      },

      "C++ Control Flow & Loops": {
        title: "C++ Control Flow & Loops",
        content: `
Control Statements:
• if, if-else, else-if ladder
• switch-case
• Ternary operator

Loops:
• for (traditional & range-based)
• while
• do-while
• break, continue, goto (avoid)

Range-based for loop (C++11+):
for(auto& item : collection) { ... }
        `,
        example: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Traditional for
    for(int i = 1; i <= 5; i++) cout << i << " ";

    // Range-based for
    vector<int> nums = {10, 20, 30, 40, 50};
    for(const auto& n : nums) cout << n << " ";

    // Switch
    int day = 3;
    switch(day) {
        case 1: cout << "Monday"; break;
        case 2: cout << "Tuesday"; break;
        default: cout << "Other day"; break;
    }
    return 0;
}`,
      },

      "C++ Arrays, Strings & Vectors": {
        title: "C++ Arrays, Strings & Vectors",
        content: `
1. Static Arrays
   int arr[10] = {1,2,3};

2. std::string (dynamic, safe)
   string s = "Hello World";

3. std::vector (dynamic array)
   vector<int> v; v.push_back(10);

4. Multi-dimensional arrays
   int matrix[3][4];

5. Array of objects
        `,
        example: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    // Array
    int scores[5] = {85, 92, 78, 95, 88};

    // String
    string greeting = "Hello, C++!";
    cout << greeting.substr(0, 5) << endl;

    // Vector
    vector<string> names = {"Raj", "Anita", "Vikram"};
    names.push_back("Priya");
    for(const auto& name : names) cout << name << " ";

    return 0;
}`,
      },

      "C++ Pointers, References & Smart Pointers": {
        title: "C++ Pointers, References & Smart Pointers",
        content: `
Pointers:
- Store memory addresses
- Can be null, dangling
- Arithmetic possible

References:
- Alias to existing variable
- Must be initialized
- Cannot be null

Smart Pointers (C++11+):
- unique_ptr (exclusive ownership)
- shared_ptr (reference counting)
- weak_ptr (non-owning)

Best Practice: Use smart pointers instead of raw pointers
        `,
        example: `#include <iostream>
#include <memory>
using namespace std;

int main() {
    // Raw pointer
    int x = 100;
    int* ptr = &x;
    cout << *ptr << endl;

    // Reference
    int& ref = x;
    ref = 200;
    cout << x << endl;

    // Smart pointer
    auto smart = make_unique<int>(300);
    cout << *smart << endl;

    return 0;
}`,
      },

      "C++ Classes & Object-Oriented Programming": {
        title: "C++ Classes & OOP",
        content: `
OOP Pillars in C++:
1. Encapsulation (data hiding)
2. Inheritance (code reuse)
3. Polymorphism (method overriding, overloading)
4. Abstraction (interfaces, pure virtual functions)

Access Specifiers:
- public
- private
- protected

Constructor Types:
- Default, Parameterized, Copy, Move (C++11)

Destructor, Friend functions, Static members
        `,
        example: `#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int age;
    double gpa;

public:
    // Constructor
    Student(string n, int a, double g) : name(n), age(a), gpa(g) {}

    void display() const {
        cout << "Name: " << name << ", Age: " << age << ", GPA: " << gpa << endl;
    }

    // Friend function
    friend void updateGPA(Student& s, double newGPA);
};

void updateGPA(Student& s, double newGPA) {
    s.gpa = newGPA;
}

int main() {
    Student s1("Raj", 21, 8.9);
    s1.display();
    updateGPA(s1, 9.2);
    s1.display();
    return 0;
}`,
      },

      "C++ Inheritance & Polymorphism": {
        title: "C++ Inheritance & Polymorphism",
        content: `
Types of Inheritance:
- Single
- Multilevel
- Multiple
- Hierarchical
- Hybrid

Virtual functions for runtime polymorphism
Pure virtual functions → Abstract classes
        `,
        example: `#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() const = 0; // Pure virtual
};

class Dog : public Animal {
public:
    void sound() const override {
        cout << "Woof!" << endl;
    }
};

class Cat : public Animal {
public:
    void sound() const override {
        cout << "Meow!" << endl;
    }
};

int main() {
    Animal* animals[2] = {new Dog(), new Cat()};
    for(auto animal : animals) {
        animal->sound();
    }
    return 0;
}`,
      },

      "C++ Templates & Generic Programming": {
        title: "C++ Templates & Generic Programming",
        content: `
Templates allow writing generic code:
- Function templates
- Class templates
- Template specialization
- Variadic templates (C++11)
- Concepts (C++20)

Benefits: Type safety, performance, code reuse
        `,
        example: `#include <iostream>
using namespace std;

// Function template
template<typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

// Class template
template<typename T>
class Box {
private:
    T value;
public:
    Box(T v) : value(v) {}
    T getValue() const { return value; }
};

int main() {
    cout << maximum(10, 25) << endl;
    cout << maximum(3.14, 2.71) << endl;

    Box<int> intBox(100);
    Box<string> strBox("Hello");
    cout << intBox.getValue() << " " << strBox.getValue() << endl;
    return 0;
}`,
      },

      "C++ STL Containers & Algorithms": {
        title: "C++ STL Containers & Algorithms",
        content: `
Major Containers:
• vector, deque, list, forward_list
• set, multiset, unordered_set
• map, multimap, unordered_map

Algorithms:
• sort, find, count, transform, accumulate, etc.
        `,
        example: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> v = {64, 34, 25, 12, 22, 11, 90};
    sort(v.begin(), v.end());
    cout << "Sorted: ";
    for(int n : v) cout << n << " ";

    int sum = accumulate(v.begin(), v.end(), 0);
    cout << "\\nSum: " << sum << endl;

    auto it = find(v.begin(), v.end(), 25);
    if(it != v.end()) cout << "Found 25 at position " << (it - v.begin()) << endl;

    return 0;
}`,
      },

      "C++ File Handling": {
        title: "C++ File Handling",
        content: `
Read/Write files using <fstream>:
• ifstream (input)
• ofstream (output)
• fstream (both)

Modes: ios::in, ios::out, ios::app, ios::binary
        `,
        example: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // Write to file
    ofstream outFile("data.txt");
    outFile << "Name: Raj\\nAge: 28\\nCity: Lucknow" << endl;
    outFile.close();

    // Read from file
    ifstream inFile("data.txt");
    string line;
    while(getline(inFile, line)) {
        cout << line << endl;
    }
    inFile.close();

    return 0;
}`,
      },

      "C++ Exception Handling": {
        title: "C++ Exception Handling",
        content: `
Use try, catch, throw
Multiple catch blocks
catch(...) for all exceptions
Custom exceptions by inheriting std::exception
        `,
        example: `#include <iostream>
#include <stdexcept>
using namespace std;

double divide(int a, int b) {
    if(b == 0) throw runtime_error("Division by zero!");
    return static_cast<double>(a) / b;
}

int main() {
    try {
        cout << divide(100, 0) << endl;
    } catch(const exception& e) {
        cerr << "Error: " << e.what() << endl;
    }
    return 0;
}`,
      },

      "C++ Modern Features (C++11 to C++23)": {
        title: "C++ Modern Features (C++11 to C++23)",
        content: `
C++11: auto, lambda, nullptr, range-based for, smart pointers, move semantics
C++14: generic lambdas, return type deduction
C++17: structured bindings, if constexpr, filesystem
C++20: concepts, ranges, coroutines, modules
C++23: std::print, std::expected, multidimensional subscript
        `,
        example: `#include <iostream>
#include <ranges>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // C++20 ranges
    auto even = nums | views::filter([](int n){ return n % 2 == 0; })
                     | views::transform([](int n){ return n * 10; });

    for(int n : even) cout << n << " ";
    cout << endl;

    return 0;
}`,
      },

      "C++ Real-World Project: Employee Management System": {
        title: "Real-World Project: Employee Management System",
        content: `
Full-featured console application using:
- Classes
- Vectors
- File I/O
- Inheritance
- STL algorithms
        `,
        example: `#include <iostream>
#include <vector>
#include <string>
#include <fstream>
#include <algorithm>
using namespace std;

class Employee {
protected:
    string id;
    string name;
    double salary;
public:
    Employee(string i, string n, double s) : id(i), name(n), salary(s) {}
    virtual void display() const {
        cout << "ID: " << id << ", Name: " << name << ", Salary: $" << salary << endl;
    }
    virtual double getBonus() const { return 0; }
    string getId() const { return id; }
};

class Manager : public Employee {
private:
    int teamSize;
public:
    Manager(string i, string n, double s, int ts)
        : Employee(i, n, s), teamSize(ts) {}
    void display() const override {
        cout << "Manager - ";
        Employee::display();
        cout << "Team Size: " << teamSize << endl;
    }
    double getBonus() const override { return salary * 0.15; }
};

class Developer : public Employee {
private:
    string language;
public:
    Developer(string i, string n, double s, string lang)
        : Employee(i, n, s), language(lang) {}
    void display() const override {
        cout << "Developer - ";
        Employee::display();
        cout << "Language: " << language << endl;
    }
    double getBonus() const override { return salary * 0.10; }
};

class Company {
private:
    vector<Employee*> employees;
public:
    ~Company() {
        for(auto e : employees) delete e;
    }

    void addEmployee(Employee* e) {
        employees.push_back(e);
    }

    void displayAll() const {
        for(const auto& e : employees) {
            e->display();
            cout << "Bonus: $" << e->getBonus() << "\\n" << endl;
        }
    }

    void saveToFile(const string& filename) const {
        ofstream file(filename);
        for(const auto& e : employees) {
            file << e->getId() << "," << "Manager" << "," << e->name << "," << e->salary << "\\n";
        }
        file.close();
    }
};

int main() {
    Company techCorp;
    techCorp.addEmployee(new Manager("M001", "Anita Sharma", 120000, 12));
    techCorp.addEmployee(new Developer("D001", "Raj Kumar", 85000, "C++"));
    techCorp.addEmployee(new Developer("D002", "Vikram Singh", 90000, "Python"));

    cout << "All Employees:" << endl;
    techCorp.displayAll();

    techCorp.saveToFile("employees.csv");
    return 0;
}`,
      },
    },
  };

  // =========================================
  // Sidebar Drag Functionality
  // =========================================
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 450);
      setSidebarWidth(newWidth);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  // =========================================
  // Render Selected Content
  // =========================================
  const selectedContent =
    Object.values(sections)
      .flatMap((topics) => Object.values(topics))
      .find((topic) => topic.title === selected) || { content: "", example: "" };

  return (
    <div
      className="dashboard"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <header className="header">
        <h1>🖥️ Complete C++ Programming Dashboard (2026 Edition)</h1>
        <input
          type="text"
          placeholder="Search any C++ topic..."
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <aside className="sidebar" style={{ width: `${sidebarWidth}px` }}>
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

        <div className="content-text">
          <pre className="code-block description">
            <code>{selectedContent.content}</code>
          </pre>

          {selectedContent.example && (
            <div>
              <h3>Example Code</h3>
              <pre className="code-block cpp">
                <code>{selectedContent.example}</code>
              </pre>
            </div>
          )}

          {selectedContent.extra && (
            <p className="extra-info">{selectedContent.extra}</p>
          )}

          {selectedContent.quiz && (
            <div className="quiz-section">
              <h3>Quick Quiz</h3>
              <p>{selectedContent.quiz.question}</p>
              {selectedContent.quiz.options.map((opt, idx) => (
                <label key={idx}>
                  <input
                    type="radio"
                    name={selected}
                    value={opt}
                    checked={quizAnswers[selected] === opt}
                    onChange={() => setQuizAnswers({ ...quizAnswers, [selected]: opt })}
                  />
                  {opt}
                </label>
              ))}
              {quizAnswers[selected] && (
                <p>
                  {quizAnswers[selected] === selectedContent.quiz.answer ? (
                    <span style={{ color: "green" }}>Correct! 🎉</span>
                  ) : (
                    <span style={{ color: "red" }}>
                      Wrong. Correct answer: {selectedContent.quiz.answer}
                    </span>
                  )}
                </p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}