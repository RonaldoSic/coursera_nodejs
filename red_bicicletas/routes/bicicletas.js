let express = require('express');
let router = express.Router();
let bicicletaController = require('../controllers/bicicleta');

router.get('/', bicicletaController.bicicleta_list);
// metodos para insertar
router.get('/create', bicicletaController.bicicleta_create_get);
router.post('/create', bicicletaController.bicicleta_create_post);
// con colocar :id es que es un parametro en la URL
router.post('/:id/delete', bicicletaController.bicicleta_delete_post);
// metodo para acutalizar
router.get("/:id/update", bicicletaController.bicicleta_update_get);
router.post("/:id/update", bicicletaController.bicicleta_update_post);

module.exports = router;
