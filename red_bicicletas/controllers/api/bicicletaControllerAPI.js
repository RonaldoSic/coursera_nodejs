// CONTROLADORES DE LA API PARA LAS BICICLETAS

// Binculamos la dependencia con el modelo 
let Bicicleta = require('../../models/bicicletas')
exports.lista_bicicletas = (req, res) => {
  res.status(200).json({
    bicicletas: Bicicleta.allBicis
  })
}

exports.bicicleta_create = (req, res) => {
  let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
  bici.ubicacion = [req.body.latitud, req.body.longitud];
  Bicicleta.add(bici);
  res.status(200).json({
    bicicleta: bici
  })
}

exports.bicicleta_delete = (req, res) => {
  Bicicleta.removeById(req.body.id);
  res.status(204).send();
}