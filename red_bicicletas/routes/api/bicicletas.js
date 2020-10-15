// RUTAS DE LA API 
let express = require('express');
let router = express.Router();
let bicicletasController = require('../../controllers/api/bicicletaControllerAPI');

router.get('/', bicicletasController.lista_bicicletas);

// Ruta para agregar una bici desde la api
router.post('/create', bicicletasController.bicicleta_create);
// Ruta para eliminar una bici desde la api
router.delete('/delete', bicicletasController.bicicleta_delete);
module.exports = router;