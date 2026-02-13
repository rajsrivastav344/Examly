// Java.jsx
import React, { useState } from "react";
import "./All.css";

export default function Java() {
  const [selected, setSelected] = useState("Introduction to Java");
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "☕ Core Java": {
      "Introduction to Java": {
        title: "Introduction to Java",
        content: `
Java is a high-level, object-oriented, platform-independent programming language.
It follows the principle "Write Once, Run Anywhere (WORA)" because Java programs are compiled into bytecode that runs on the Java Virtual Machine (JVM).

Features:
- Simple and secure
- Object-Oriented
- Platform Independent
- Robust and portable
- Multi-threaded and distributed
        `,
        example: `
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
        `,
      },
      "Java Data Types": {
        title: "Java Data Types",
        content: `
Java supports two main categories of data types: 
1. **Primitive Types** (int, float, double, char, boolean, etc.)
2. **Non-Primitive Types** (String, Arrays, Classes, Interfaces)
        `,
        example: `
int num = 10;
double price = 99.99;
char grade = 'A';
boolean isActive = true;
String name = "Raj";
System.out.println("Name: " + name + " | Price: " + price);
        `,
      },
      "Java Operators": {
        title: "Java Operators",
        content: `
Operators are used to perform operations on variables and values.

Types:
1. Arithmetic (+, -, *, /, %)
2. Relational (==, !=, >, <, >=, <=)
3. Logical (&&, ||, !)
4. Assignment (=, +=, -=)
5. Increment/Decrement (++, --)
6. Ternary (? :)
        `,
        example: `
int a = 10, b = 5;
System.out.println(a + b); // 15
System.out.println(a > b); // true
System.out.println((a > b) ? "A is greater" : "B is greater");
        `,
      },
      "Control Statements": {
        title: "Control Statements",
        content: `
Control statements control the flow of execution.
1. if-else
2. switch
3. for, while, do-while
4. break & continue
        `,
        example: `
int n = 3;
if (n > 0)
    System.out.println("Positive");
else
    System.out.println("Negative");

for (int i = 1; i <= 5; i++)
    System.out.println("Count: " + i);
        `,
      },
      "Object-Oriented Programming": {
        title: "Object-Oriented Programming",
        content: `
OOP is the heart of Java. It uses objects and classes to structure code.

Key Concepts:
- **Class & Object**
- **Inheritance**
- **Polymorphism**
- **Encapsulation**
- **Abstraction**
        `,
        example: `
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}
class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}
public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
    }
}
        `,
      },
      "Exception Handling": {
        title: "Exception Handling",
        content: `
Exceptions handle runtime errors gracefully using:
- try
- catch
- finally
- throw
- throws
        `,
        example: `
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("End of program");
}
        `,
      },
      "Java Collections Framework": {
        title: "Java Collections Framework",
        content: `
Collections are used to store and manipulate groups of data efficiently.

Important Interfaces:
- List (ArrayList, LinkedList)
- Set (HashSet, TreeSet)
- Map (HashMap, TreeMap)
        `,
        example: `
import java.util.*;

public class CollectionExample {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");

        for (String lang : list)
            System.out.println(lang);
    }
}
        `,
      },
      "JDBC (Java Database Connectivity)": {
        title: "JDBC (Java Database Connectivity)",
        content: `
JDBC connects Java applications with databases like MySQL.
Steps:
1. Load the driver
2. Establish connection
3. Create statement
4. Execute query
5. Close connection
        `,
        example: `
import java.sql.*;
class ConnectDB {
    public static void main(String[] args) {
        try {
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/school", "root", "password");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            while (rs.next())
                System.out.println(rs.getString("name"));
            
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
        `,
      },
    },

    "🌐 Advanced Java": {
      "JSP (Java Server Pages)": {
        title: "JSP (Java Server Pages)",
        content: `
JSP is a server-side technology used to create dynamic web content by embedding Java code in HTML.

JSP Life Cycle:
1. Translation → Servlet
2. Compilation
3. Initialization
4. Execution
5. Destruction

Used for: Login pages, forms, and web dashboards.
        `,
        example: `
<%@ page language="java" %>
<html>
<body>
<%
    String name = request.getParameter("user");
    out.println("Welcome, " + name + "!");
%>
</body>
</html>
        `,
      },
      "Servlets": {
        title: "Servlets",
        content: `
A Servlet is a Java class that handles HTTP requests and responses on a web server.
It acts as the controller between the user and the backend.

Servlet Lifecycle:
1. init()
2. service()
3. destroy()
        `,
        example: `
import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class HelloServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res)
    throws ServletException, IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<h2>Hello from Servlet!</h2>");
    }
}
        `,
      },
      "Spring Framework": {
        title: "Spring Framework",
        content: `
Spring is a powerful Java framework used for building enterprise-level applications.

Key Features:
- **Dependency Injection (IoC)**
- **Spring MVC** for web apps
- **Spring Boot** for rapid development
- **Spring Data JPA** for databases
- **Spring Security** for authentication

Advantages:
- Reduces boilerplate code
- Simplifies configuration
- Provides modular, testable architecture
        `,
        example: `
// Example: Spring Boot REST API
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot!";
    }
}
        `,
      },
      "Real-World Java Example": {
        title: "Real-World Java Example",
        content: `
Example: Building a Student Management System
- **Frontend:** JSP + HTML + CSS
- **Backend:** Servlet + JDBC
- **Database:** MySQL
- **Framework:** Spring Boot (optional upgrade)

Data Flow:
1. User submits form via JSP.
2. Servlet processes data.
3. JDBC saves or retrieves data from MySQL.
4. JSP displays the result dynamically.
        `,
        example: `
<!-- student.jsp -->
<form action="StudentServlet" method="post">
  Name: <input type="text" name="name" />
  Age: <input type="number" name="age" />
  <input type="submit" value="Save" />
</form>
        `,
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
        <h1>☕ Java Dashboard</h1>
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
            <pre className="code-block java">
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