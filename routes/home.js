const express = require("express");
const {
  leerUrls,
  agregarUrl,
  eliminarUrl,
  editarUrlForm,
  editarUrl,
  redireccionamiento,
} = require("../controllers/homeControllers");
const urlValidar = require("../middleware/urlValida");
const verificarUser = require("../middleware/verificarUser");

const router = express.Router();

router.get("/", verificarUser, leerUrls);
router.post("/", urlValidar, agregarUrl);
router.get("/eliminar/:id", eliminarUrl);
router.get("/editar/:id", editarUrlForm);
router.post("/editar/:id", urlValidar, editarUrl )
router.get("/:shortUrl", redireccionamiento)

module.exports = router;
