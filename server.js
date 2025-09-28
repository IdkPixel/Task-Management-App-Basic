const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PASSWORD", // Cambia esto si tienes una contraseña en MySQL
  database: "todo_db",
    port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Error conectando a MySQL:", err);
  } else {
    console.log("Conectado a MySQL");
  }
});

// Obtener todas las tareas
app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Agregar una nueva tarea
app.post("/tasks", (req, res) => {
  const { description } = req.body;
  const created_at = new Date();
  db.query(
    "INSERT INTO tasks (description, created_at) VALUES (?, ?)",
    [description, created_at],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ id: result.insertId, description, created_at });
    }
  );
});

// Marcar tarea como completada
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const completed_at = new Date();
  db.query(
    "UPDATE tasks SET completed_at = ? WHERE id = ?",
    [completed_at, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Tarea completada" });
    }
  );
});

// Eliminar tarea
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM tasks WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Tarea eliminada" });
  });
});

app.listen(4000, () => {
  console.log("Servidor corriendo en http://localhost:4000");
});


