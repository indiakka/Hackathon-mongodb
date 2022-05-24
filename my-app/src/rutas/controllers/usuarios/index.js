const router = require("express").Router();
const {
  listar,
  obtenerUno,
  crear,
  actualizar,
  eliminar,
} = require( "../genericos" );
const Usuario = require("./schema");

const listarHandler = listar({ Modelo: Usuario, populate: ["usuario"] });
router.get("/", listarHandler);

const obtenerUnoHandler = obtenerUno({ Modelo: Usuario });
router.get("/:_id", obtenerUnoHandler);

const crearHandler = crear({ Modelo: Usuario });
router.post("/", crearHandler);

const editarHandler = actualizar({ Modelo: Usuario });
router.put("/:_id", editarHandler);

const eliminarHandler = eliminar({ Modelo: Usuario });
router.delete("/:_id", eliminarHandler);

module.exports = router;
