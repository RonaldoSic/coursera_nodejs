const { json } = require("express");

// Creamos un modelo de las bicicletas
let Bicicleta = function (id, color, modelo, ubicacion) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion;
};
// metodo para convertir todo a string
Bicicleta.prototype.toString = function () {
  return 'id: '+this.id+ "| color: "+ this.color; 
}
// Array que almacena todas las bicicletas 
Bicicleta.allBicis = [];
// Funcion para agregar las bicicletas al array
Bicicleta.add = function(aBici){
  Bicicleta.allBicis.push(aBici);
}
// metodo para buscart por id
Bicicleta.findById = (aBiciId) =>{
  // si el id de parametro esta en el array lo que hace es almacenarlo en la variable
  let aBici = Bicicleta.allBicis.find(el => el.id == aBiciId);
  console.log('Resultado de la busqueda es ', aBici)
  if (aBici)  
    return aBici
  else
    throw new Error(`No existe un bicileta con el id ${aBiciId}`)
}

// metodo para eliminar por Id
Bicicleta.removeById = function (aBiciId) {
  Bicicleta.findById(aBiciId);
  for (let index = 0; index < Bicicleta.allBicis.length; index++) {
    if (Bicicleta.allBicis[index].id == aBiciId) {
      Bicicleta.allBicis.splice(index, 1); //con esto lo que hacemos es remover el elemento
      break;
    }    
  }
  // Mi fomra de recorrer
  // Bicicleta.allBicis.forEach(element => {
  //   console.log(element)
  //   if (element.id == aBiciId){
  //     Bicicleta.allBicis.splice(element);      
  //   }
  // });
}





// Creando 2 Bicicletas de ejemplos
var bici_rojo = new Bicicleta(1, "rojo", "urbana", [14.881835, -91.428036]);
var bici_blanco = new Bicicleta(2, "blanco", "urbana", [14.877696, -91.436108]);
var bici_azul = new Bicicleta(3, "azul", "urbana", [14.881835, -91.428036]);
var bici_morado = new Bicicleta(4, "morado", "mazesa", [14.881835, -91.428036]);
// Agregamos las bicicletas al array
Bicicleta.add(bici_rojo);
Bicicleta.add(bici_blanco);
Bicicleta.add(bici_azul);
Bicicleta.add(bici_morado);
// Exportamos el modelo de bicicletas que se ha creado
module.exports = Bicicleta;