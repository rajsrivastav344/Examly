// JavaFullStack.jsx
import React, { useState } from "react";
import "./All.css";

export default function JavaFullStack() {
  const [selected, setSelected] = useState("Introduction to Java Fullstack");
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [isDragging, setIsDragging] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const sections = {
    "☕ Java Fullstack Fundamentals": {
      "Introduction to Java Fullstack": {
        title: "Introduction to Java Fullstack",
        content: `
Java Fullstack Development means building complete web applications using **Java** for the backend and modern frontend technologies (HTML/CSS/JS + React/Angular/Vue).

Typical 2025–2026 stack:
- **Frontend**: React / Next.js / Angular / Vue 3 + TypeScript
- **Backend**: Spring Boot 3+ (Java 17–21)
- **Database**: PostgreSQL / MySQL / MongoDB
- **API**: REST + GraphQL (optional)
- **Authentication**: Spring Security + JWT / OAuth2 / OpenID Connect
- **Deployment**: Docker + Kubernetes / AWS ECS / Railway / Render
- **CI/CD**: GitHub Actions / GitLab CI / Jenkins

Advantages of Java backend:
- Enterprise-grade (banking, e-commerce, government)
- Strong typing & refactoring safety
- Huge ecosystem (Spring, Hibernate, Kafka, Micronaut, Quarkus)
- Excellent performance with GraalVM Native Image`,
        example: `
Frontend (React) → calls → Backend (Spring Boot REST API) → Database (PostgreSQL)
→ returns JSON → React renders dynamic UI`,
        graphic: `<svg width="500" height="220" viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="60" width="120" height="80" fill="#61dafb" stroke="#007acc" rx="8"/>
  <text x="90" y="105" text-anchor="middle">React / Next.js</text>
  <polygon points="160,100 180,80 200,100 180,120" fill="#f0f0f0" stroke="#333"/>
  <text x="180" y="105" text-anchor="middle"></text>
  <rect x="220" y="60" width="140" height="80" fill="#6db33f" stroke="#3c763d" rx="8"/>
  <text x="290" y="105" text-anchor="middle">Spring Boot</text>
  <polygon points="380,100 400,80 420,100 400,120" fill="#f0f0f0" stroke="#333"/>
  <text x="400" y="105" text-anchor="middle"></text>
  <rect x="440" y="60" width="120" height="80" fill="#f29111" stroke="#c77416" rx="8"/>
  <text x="500" y="105" text-anchor="middle">PostgreSQL</text>
  <line x1="150" y1="100" x2="220" y2="100" stroke="#333" stroke-width="2" marker-end="url(#arr)"/>
  <line x1="360" y1="100" x2="440" y2="100" stroke="#333" stroke-width="2" marker-end="url(#arr)"/>
  <defs><marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#333"/></marker></defs>
</svg>`,
      },
      "Core Java for Fullstack": {
        title: "Core Java for Fullstack",
        content: `
Must-know topics for backend development:
- OOP (classes, inheritance, polymorphism, interfaces)
- Collections Framework + Streams API
- Exception handling & custom exceptions
- Multithreading & concurrency (Executors, CompletableFuture)
- Java 17–21 features: Records, Sealed classes, Pattern matching, Virtual Threads
- Generics & type safety
- Lambda expressions & Functional interfaces

Modern tip: Use Java 21+ with records & virtual threads for cleaner, scalable code`,
        example: `
// Record (Java 14+)
record User(Long id, String name, String email) {}

// Virtual Thread (Java 21+)
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> fetchUserFromDB());
}
`,
      },
    },

    "🖥️ Backend with Spring Boot": {
      "Spring Boot Essentials": {
        title: "Spring Boot Essentials",
        content: `
Spring Boot = Spring Framework + Auto-configuration + Embedded server + Starters

Key starters (2025):
- spring-boot-starter-web
- spring-boot-starter-data-jpa
- spring-boot-starter-security
- spring-boot-starter-validation
- spring-boot-starter-actuator
- spring-boot-starter-test

Features:
- @SpringBootApplication
- Auto-configured Tomcat/Jetty/Undertow
- application.yml / properties
- Spring Boot DevTools (hot reload)
- Spring Boot 3+ → Jakarta EE 9+ (not javax)`,
        example: `
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

@RestController
@RequestMapping("/api")
class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot 3!";
    }
}
`,
      },
      "REST APIs & Controllers": {
        title: "REST APIs & Controllers",
        content: `
Best practices 2025:
- @RestController + @RequestMapping
- DTOs (Data Transfer Objects)
- @Valid + Bean Validation
- ResponseEntity for status codes
- Pagination & sorting (Pageable)
- HATEOAS (optional)
- OpenAPI / Swagger (springdoc-openapi)

HTTP methods:
- GET → read
- POST → create
- PUT/PATCH → update
- DELETE → delete`,
        example: `
@RestController
@RequestMapping("/api/users")
class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userService.findAll();
    }

    @PostMapping
    public ResponseEntity<UserDTO> createUser(@Valid @RequestBody UserDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED)
                             .body(userService.create(dto));
    }
}
`,
      },
      "Spring Data JPA & Databases": {
        title: "Spring Data JPA & Databases",
        content: `
Spring Data JPA simplifies database access.

Features:
- @Entity, @Id, @GeneratedValue
- JpaRepository / CrudRepository
- @Query (JPQL & native)
- Specifications & QueryDSL (advanced)
- Auditing (@CreatedDate, @LastModifiedBy)
- Flyway / Liquibase for migrations

Popular DBs:
- PostgreSQL (most recommended)
- MySQL / MariaDB
- H2 (testing)
- MongoDB (Spring Data MongoDB)`,
        example: `
@Entity
@Table(name = "users")
class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @Email
    private String email;
    // getters/setters
}

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByNameContainingIgnoreCase(String name);
}
`,
      },
    },

    "🔐 Security & Authentication": {
      "Spring Security Basics": {
        title: "Spring Security Basics",
        content: `
Protects APIs & web apps.

Features:
- Authentication (form, JWT, OAuth2)
- Authorization (@PreAuthorize, roles)
- CSRF, CORS
- Password encoding (BCrypt)
- JWT (stateless)

2025 standard: OAuth2 + OpenID Connect (Keycloak, Auth0, Okta)`,
        example: `
@Configuration
@EnableWebSecurity
class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2ResourceServer(oauth2 -> oauth2.jwt());
        return http.build();
    }
}
`,
      },
    },

    "🌐 Frontend Integration": {
      "React + Spring Boot Integration": {
        title: "React + Spring Boot Integration",
        content: `
Modern fullstack:
- Backend: Spring Boot REST API (CORS enabled)
- Frontend: Create React App / Vite + React Router + Axios / TanStack Query
- Proxy in dev (package.json: "proxy": "http://localhost:8080")
- Production: Serve React build from Spring Boot (static resources) or separate (S3/CDN)

Tools:
- Axios / fetch / RTK Query
- Material UI / Ant Design / Tailwind + shadcn/ui
- Formik / React Hook Form`,
        example: `
// React fetch example
useEffect(() => {
  axios.get('/api/users')
       .then(res => setUsers(res.data))
       .catch(err => console.error(err));
}, []);
`,
      },
    },

    "🚀 Deployment & DevOps": {
      "Containerization & Cloud Deployment": {
        title: "Containerization & Cloud Deployment",
        content: `
Steps:
1. Dockerfile for Spring Boot
2. Build JAR → docker build
3. Push to Docker Hub / GitHub Container Registry
4. Deploy: Docker Compose (dev) → Kubernetes / ECS / Railway / Render (prod)
5. Database: Cloud SQL / RDS / Supabase

GraalVM Native Image (Quarkus / Spring Native):
- Startup < 50ms
- Memory < 100 MB`,
        example: `
# Dockerfile
FROM eclipse-temurin:21-jre-alpine
COPY target/myapp.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
`,
      },
    },

    "🏗️ Real-World Java Fullstack Project": {
      "E-commerce Platform (Mini Idea)": {
        title: "E-commerce Platform (Mini Idea)",
        content: `
Features:
- User registration/login (JWT)
- Product catalog (pagination, search)
- Cart & Checkout
- Order history
- Admin dashboard (CRUD products)

Tech stack:
- Backend: Spring Boot 3 + JPA + PostgreSQL + Spring Security
- Frontend: React + Tailwind + Zustand / Redux
- Deployment: Docker + Railway / Render

Learning outcome: Full CRUD, auth, REST, state management, responsive UI`,
      },
    },
  };

  // ────────────────────────────────────────────────
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = (e) => {
    if (isDragging) {
      const newWidth = Math.min(Math.max(e.clientX, 180), 400);
      setSidebarWidth(newWidth);
    }
  };
  const handleMouseUp = () => setIsDragging(false);

  let selectedContent = null;
  for (const section in sections) {
    if (sections[section][selected]) {
      selectedContent = sections[section][selected];
      break;
    }
  }
  if (!selectedContent) selectedContent = { title: selected, content: "Select a topic from the sidebar." };

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
          const filtered = Object.keys(sections[section]).filter((t) =>
            t.toLowerCase().includes(searchTerm.toLowerCase())
          );
          if (filtered.length === 0) return null;
          return (
            <div key={section} className="section">
              <h3 className="section-title">{section}</h3>
              <ul>
                {filtered.map((topic) => (
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
        <div>
          <p style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>{selectedContent.content}</p>

          {selectedContent.example && (
            <pre className="code-block java">
              <code>{selectedContent.example}</code>
            </pre>
          )}

          {selectedContent.graphic && (
            <div
              dangerouslySetInnerHTML={{ __html: selectedContent.graphic }}
              style={{ textAlign: "center", margin: "20px 0" }}
            />
          )}
        </div>
      </main>
    </div>
  );
}