# Task Management App Basic

Aplicación básica de gestión de tareas con **React**, **Node.js** y **MySQL**.  
Permite a los usuarios registrarse, iniciar sesión y administrar sus tareas (crear, completar y eliminar).  

## 🚀 Tecnologías
- Frontend: React + Axios
- Backend: Node.js + Express
- Base de datos: MySQL

## ⚡ Funcionalidades
- Registro e inicio de sesión de usuarios
- Crear nuevas tareas
- Marcar tareas como completadas
- Eliminar tareas
- Visualización de historial de tareas

## 🛠️ Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/task-management-app-basic.git

## Codigo para la base de datos:
CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL,
    completed_at DATETIME NULL
);
