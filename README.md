# Employee Management System

A full-stack Employee Management System built using Spring Boot and React. This application allows users to add and delete employees using a REST API and a React frontend.

---

## 🚀 Features

* Add new employee
* View employee list
* Delete employee
* REST API integration
* Full-stack project using Spring Boot and React

---

## 🛠️ Technologies Used

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* Maven

### Frontend

* React JS
* Axios
* HTML
* CSS
* JavaScript

### Tools

* VS Code
* Git
* GitHub
* Postman

---

## 📁 Project Structure

```
employee-management-system
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── BackendApplication.java
│
├── frontend
│   ├── src
│   └── App.js
```

---

## ⚙️ How to Run the Project

### Run Backend

```
cd backend
mvn spring-boot:run
```

Runs on:

```
http://localhost:8080
```

---

### Run Frontend

```
cd frontend
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | /api/employees      | Get all employees |
| POST   | /api/employees      | Add employee      |
| DELETE | /api/employees/{id} | Delete employee   |

---

## 💻 Author

Vaishnavi Kharche

---

## 📌 Future Improvements

* Update employee
* Search employee
* Authentication
* Deploy online


