// Desde aqui manejamos todo lo del modelo de las bicicletas
const Bicicleta = require('../models/bicicletas');

// Metodo para renderizar las bicicletas
/* lo que hara es buscar dentro de la carpeta vista una carpeta llamada 
    bicicletas y en esa carpteta un archivo pug llamado index que recibe
    como parametro una lista de objetos
*/
let todas_las_bicis = Bicicleta.allBicis;
exports.bicicleta_list = function(req, res) {
  res.render('bicicletas/index', { todas_las_bicis })
}
// Exportamos la vista que se ha creado en la carpera Bicicleta llamada 'create'
// Esto es para la redireccion a la pagina donde esta el formulario
exports.bicicleta_create_get = function(req, res) {
  // console.log('se quiere redireccionar al inser de bicicletas')
  res.render('bicicletas/create')
}
exports.bicicleta_create_post = function(req, res) {
  console.log('se esta almacenando un una nueva bicicleta')
  // hacemos referencia a los inputs por su nomber de cada uno
  let bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
  // guardamos la ubicacion de esta manera
  bici.ubicacion = [req.body.latitud, req.body.longitud]
  // Agregamos la bicicleta a la lista
  Bicicleta.add(bici);
  res.redirect('/bicicletas')
}

// Metod para eleminar 
exports.bicicleta_delete_post = function (req, res) {
  Bicicleta.removeById(req.body.id);
  res.redirect('/bicicletas')
}

// meto para editar
exports.bicicleta_update_get = (req, res) => {
  let bici = Bicicleta.findById(req.params.id);
  // mandamos la bicicleta encontrada a esta vista como un objeto tipo bici
  res.render('bicicletas/update',{bici});
}
exports.bicicleta_update_post = (req, res) =>{
  let bici = Bicicleta.findById(req.params.id);
  bici.id = req.body.id;
  bici.color = req.body.color;
  bici.modelo = req.body.modelo;
  bici.ubicacion = [req.body.latitud, req.body.longitud];
  // retornamos a la pantalla donde se ven las bicicletas
  res.redirect('/bicicletas');
}
