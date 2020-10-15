// let map = L.map("main_map").setView([51.505, -0.09], 13);
var mymap = L.map("mapid").setView([14.881872, -91.421106], 13);


L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoicm9uYWxkb3NpYyIsImEiOiJja2c4czc0NTEwZTd1MzFwZnc3bm1jbWF1In0.4yXSqB9HJ_8Z86HX73b-AA",
  }
).addTo(mymap);

// L.marker([14.881773, -91.42145]).addTo(mymap);
// L.marker([14.582119, -91.461709]).addTo(mymap);

// Cargamos en el mapa la vicicletas reales que tenemos en nuestros modelos
// hacemos una peticion Ajax a la URL de la api de tipo json URL'api/bicicletas'
$.ajax({
  dataType: "json",
  url: "api/bicicletas",
  success: (result) =>{
    console.log("Estos datos los obtengo de la api ", result);
    console.log(result.bicicletas)
    let array_bici = result.bicicletas;
    // iteramos el array
    array_bici.forEach((bici) => {
      // console.log('Las bicis \t',bici )
      let title = `Bicicleta No.${bici.id}`
      L.marker(bici.ubicacion, {title: title}).addTo(mymap);
    })
  }
})
