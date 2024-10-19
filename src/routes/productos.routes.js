import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, funcionPrueba, listarProductos, ObtenerProducto } from "../controllers/productos.controllers.js";
const router = Router();
router.route("/prueba").get(funcionPrueba);
router.route('/productos').post(crearProducto).get(listarProductos)
router.route('/productos/:id').put(editarProducto).delete(borrarProducto).get(ObtenerProducto)

export default router 
