# Botmakers Auth System Assignment

## Project Overview

Full-stack authentication system with role-based access control (RBAC) built using Spring Boot and React + TypeScript.

## Features

* User Registration
* User Login
* Role-based access (USER / ADMIN)
* Protected backend endpoints
* Swagger API documentation
* Frontend dashboard with role-based content

## Backend Technologies

* Java 17
* Spring Boot
* Spring Security
* Spring Data JPA
* Hibernate
* Maven
* Swagger / OpenAPI

## Frontend Technologies

* React
* TypeScript
* Vite
* React Router
* Fetch API

## Backend Run Instructions

1. Open backend project folder
2. Run:

```bash
mvn clean install
mvn spring-boot:run
```

3. Backend starts at:

```text
http://localhost:8080
```

## Frontend Run Instructions

1. Open frontend folder
2. Run:

```bash
npm install
npm run dev
```

3. Frontend starts at:

```text
http://localhost:5173
```

## Swagger API

Open:

```text
http://localhost:8080/swagger-ui/index.html
```

## Database Configuration

Configure in `src/main/resources/application.properties`

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/authsystem
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

## API Endpoints

* POST /api/auth/register
* POST /api/auth/login
* GET /api/auth/public
* GET /api/auth/user
* GET /api/auth/admin

## Roles

* USER: Access user content
* ADMIN: Access admin content

## Author

Ashutosh Nair
