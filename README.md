# Resolve Hub

**Resolve Hub** is an issue and complaint tracking tool inspired by Jira. Users raise tickets, staff pick them up and move them through a workflow, and everyone can discuss them through comments. Access is secured with JWT-based login and role-based permissions.

> **Status:** under active development. The backend project structure and entity layer are in place; services, controllers and the frontend are being built next.

---

## Features

- **JWT authentication:** secure register and login with token-based access
- **Role-based access:** `USER`, `STAFF` and `ADMIN` roles with different permissions
- **Ticket management:** create, view, update and track complaints / issues
- **Workflow:** `OPEN → IN_PROGRESS → RESOLVED → CLOSED`
- **Priorities:** `LOW`, `MEDIUM`, `HIGH`
- **Comments:** discussion thread on every ticket
- **API documentation:** interactive Swagger UI
- **Validation and error handling:** clean request validation and consistent error responses

## Tech Stack

| Layer          | Technology                                   |
|----------------|----------------------------------------------|
| Language       | Java 23                                      |
| Framework      | Spring Boot 4.1.1 (Spring Web MVC)           |
| Security       | Spring Security + JWT (jjwt)                 |
| Persistence    | Spring Data JPA (Hibernate)                  |
| Database       | MySQL                                        |
| Validation     | Spring Boot Starter Validation               |
| API Docs       | springdoc-openapi (Swagger UI)               |
| Utilities      | Lombok                                       |
| Build tool     | Maven                                        |
| Frontend       | Coming soon                                  |

## Project Structure

```
resolve-hub/
├── backend/
│   └── src/main/java/com/resolvehub/
│       ├── ResolveHubApplication.java   # application entry point
│       ├── config/                      # app configuration (Swagger, CORS, beans)
│       ├── security/                    # JWT filter, JWT service, security config, user details
│       ├── controller/                  # REST API endpoints
│       ├── service/                     # business logic
│       ├── repository/                  # Spring Data JPA repositories (interfaces)
│       ├── entity/                      # JPA entities (database tables)
│       ├── dto/                         # request / response objects
│       ├── mapper/                      # entity <-> DTO conversion
│       ├── exception/                   # custom exceptions + global handler
│       └── enums/                       # Role, Status, Priority
└── frontend/                            # frontend application (coming soon)
```

### Package responsibilities

| Package      | Responsibility                                                              |
|--------------|-----------------------------------------------------------------------------|
| `config`     | Application-level configuration such as OpenAPI/Swagger, CORS, password encoder |
| `security`   | Authentication and authorization: JWT creation and validation, request filter, security rules |
| `controller` | Receives HTTP requests and returns responses; delegates all logic to services |
| `service`    | Core business rules (ticket lifecycle, permissions, validation of actions)  |
| `repository` | Database access through Spring Data JPA interfaces                          |
| `entity`     | Database models: `User`, `Complaint`, `Comment`                             |
| `dto`        | Data transfer objects so entities and sensitive fields never leak to the API |
| `mapper`     | Converts between entities and DTOs                                          |
| `exception`  | Custom exceptions and a global exception handler                            |
| `enums`      | Fixed value sets: `Role`, `Status`, `Priority`                              |

### Request flow

```
Client → Security (JWT check) → Controller → Service → Repository → Database
                                     ↑                                  │
                                  DTO ← Mapper ← Entity ←───────────────┘
```

## Data Model

```
User (1) ──────< Complaint (1) ──────< Comment
  │                                       ▲
  └───────────────────────────────────────┘
        a user also writes comments
```

| Entity      | Key fields                                                        |
|-------------|-------------------------------------------------------------------|
| `User`      | id, name, email (unique), password, role, createdAt               |
| `Complaint` | id, title, description, status, priority, createdAt, updatedAt, user |
| `Comment`   | id, message, createdAt, complaint, user                           |

## Getting Started

### Prerequisites

- JDK **23**
- MySQL 8 or later
- Maven (or the included Maven wrapper)

### 1. Clone the repository

```bash
git clone https://github.com/MayankSharma333/resolve-hub.git
cd resolve-hub/backend
```

### 2. Create the database

```sql
CREATE DATABASE resolvehub;
```

### 3. Configure the application

Create or update `backend/src/main/resources/application.properties`:

```properties
spring.application.name=resolve-hub

# Database
spring.datasource.url=jdbc:mysql://localhost:3306/resolvehub
spring.datasource.username=${DB_USERNAME:root}
spring.datasource.password=${DB_PASSWORD:root}

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Use your own MySQL username and password, either by editing the defaults above or by setting the `DB_USERNAME` and `DB_PASSWORD` environment variables.

### 4. Run the backend

```bash
# Linux / macOS
./mvnw spring-boot:run

# Windows (PowerShell)
.\mvnw.cmd spring-boot:run
```

The backend starts on **http://localhost:8080**.

### 5. Open the API documentation

Swagger UI: **http://localhost:8080/swagger-ui/index.html**

## Roadmap

- [x] Modular backend package structure
- [x] Entity layer (`User`, `Complaint`, `Comment`) and enums
- [ ] Repositories
- [ ] DTOs and mappers
- [ ] Services (user, complaint, comment)
- [ ] JWT authentication and role-based security
- [ ] REST controllers
- [ ] Global exception handling
- [ ] Frontend
- [ ] Unit and integration tests

## Author

**Mayank Sharma**
GitHub: [@MayankSharma333](https://github.com/MayankSharma333)
