// JavaFullStack.jsx
import React, { useState } from "react";
import "./Webdev.css"; // reuse same styling

export default function JavaFullStack() {
  const [selected, setSelected] = useState("Introduction to Java Fullstack");
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "☕ Java Fullstack Development": {
      "Introduction to Java Fullstack": {
        title: "Introduction to Java Fullstack",
        content:
          "Java Fullstack development involves backend development using Java (Spring, JSP, Servlets) and frontend using HTML, CSS, JavaScript frameworks. It enables end-to-end application development.",
        example:
          "<p>Example: A web application where backend APIs are created in Spring Boot and frontend in React.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2rB2zK3Uy2l6U_hyO9E9bw.png",
      },
      "Core Java Basics": {
        title: "Core Java Basics",
        content:
          "Covers OOP concepts, data types, operators, loops, exception handling, collections, and multithreading in Java.",
        example:
          "<pre><code>class HelloWorld{\n public static void main(String[] args){\n   System.out.println('Hello, World');\n }\n}</code></pre>",
        image:
          "https://www.javatpoint.com/images/java/java_image.png",
      },
      "JSP (Java Server Pages)": {
        title: "JSP (Java Server Pages)",
        content:
          "JSP is used to create dynamic web pages using Java code embedded in HTML. It simplifies building web-based applications.",
        example:
          "<pre><code>&lt;%@ page language='java' %&gt;\n&lt;html&gt;\n&lt;body&gt;\n&lt;h1&gt;Hello JSP&lt;/h1&gt;\n&lt;% String name='Raj'; %&gt;\n&lt;p&gt;Welcome, &lt;%= name %&gt;&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>",
        image:
          "https://www.javatpoint.com/images/jsp/jsp_image.png",
      },
      "Servlets": {
        title: "Servlets",
        content:
          "Servlets are Java programs that handle client requests and generate dynamic responses. They are the backbone of Java backend.",
        example:
          "<pre><code>import java.io.*;\nimport javax.servlet.*;\nimport javax.servlet.http.*;\npublic class HelloServlet extends HttpServlet {\n  protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {\n    res.setContentType('text/html');\n    PrintWriter out = res.getWriter();\n    out.println('&lt;h1&gt;Hello Servlet&lt;/h1&gt;');\n  }\n}</code></pre>",
        image:
          "https://www.javatpoint.com/images/servlets/servlets_image.png",
      },
      "Spring Framework": {
        title: "Spring Framework",
        content:
          "Spring simplifies Java development with features like dependency injection, MVC architecture, REST API creation, and transaction management.",
        example:
          "<pre><code>@RestController\npublic class HelloController {\n @GetMapping('/hello')\n public String sayHello(){\n  return 'Hello Spring';\n }\n}</code></pre>",
        image:
          "https://www.javatpoint.com/images/spring/spring_image.png",
      },
      "Spring Boot": {
        title: "Spring Boot",
        content:
          "Spring Boot is a microservice-based framework for building production-ready applications with minimal configuration.",
        example:
          "<pre><code>@SpringBootApplication\npublic class Application {\n public static void main(String[] args){\n  SpringApplication.run(Application.class,args);\n }\n}</code></pre>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/1*3iDTVxXHDFn2k1Rg4n4nRA.png",
      },
      "JDBC (Database Connectivity)": {
        title: "JDBC (Database Connectivity)",
        content:
          "Java Database Connectivity allows Java applications to interact with databases for CRUD operations.",
        example:
          "<pre><code>Connection con = DriverManager.getConnection(url,user,pass);\nStatement stmt = con.createStatement();\nResultSet rs = stmt.executeQuery('SELECT * FROM users');</code></pre>",
        image:
          "https://www.javatpoint.com/images/jdbc/jdbc_image.png",
      },
      "REST APIs with Java": {
        title: "REST APIs with Java",
        content:
          "Develop backend services using Spring Boot to handle HTTP requests and provide JSON/XML responses.",
        example:
          "<pre><code>@RestController\n@RequestMapping('/api/users')\npublic class UserController {\n @GetMapping\n public List&lt;User&gt; getUsers(){ return userService.getAllUsers(); }\n}</code></pre>",
        image:
          "https://spring.io/images/spring-rest.png",
      },
      "Frontend Integration": {
        title: "Frontend Integration",
        content:
          "Frontend (HTML, CSS, JS, React/Angular) consumes backend APIs for dynamic web applications.",
        example:
          "<pre><code>fetch('/api/users')\n.then(res => res.json())\n.then(data => console.log(data));</code></pre>",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3b/React_Logo.svg",
      },
      "Authentication & Security": {
        title: "Authentication & Security",
        content:
          "Use Spring Security for authentication, authorization, and protecting APIs from unauthorized access.",
        example:
          "<pre><code>@Configuration\n@EnableWebSecurity\npublic class SecurityConfig extends WebSecurityConfigurerAdapter { ... }</code></pre>",
        image:
          "https://www.javatpoint.com/images/spring-security/spring-security.png",
      },
      "Deployment": {
        title: "Deployment",
        content:
          "Deploy Java Fullstack apps on servers like Tomcat, AWS, or Docker containers for production use.",
        example:
          "<p>Example: Deploy Spring Boot backend on AWS EC2 and React frontend on S3.</p>",
        image:
          "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8xQoRohpTKp7rQ4tT3W7Jg.png",
      },
    },
  };

  // Sidebar Resize
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 150), 400);
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
        <h1>☕ Java Fullstack Dashboard</h1>
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
            <p>{selectedContent.content}</p>
            {selectedContent.example && (
              <div className="example-container">
                <pre className="code-block">
                  <code>{selectedContent.example}</code>
                </pre>
                <iframe
                  title="example-output"
                  className="output-frame"
                  srcDoc={selectedContent.example}
                />
              </div>
            )}
            {selectedContent.image && (
              <img
                src={selectedContent.image}
                alt="Example"
                className="topic-img"
              />
            )}
          </div>
        ) : (
          <p>{selectedContent}</p>
        )}
      </main>
    </div>
  );
}
