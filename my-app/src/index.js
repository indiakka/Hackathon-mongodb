require("dotenv").config();

const conexion = require("./db");
conexion();
const express = require("express");
const rutas = require("./rutas");
const app = express();
const port = 5000;

app.use(express.json());

app.use(express.urlencoded());

rutas(app);

app.listen(port, () => {
  console.log(`API usuario está escuchando en http://localhost:${port}`);
});
