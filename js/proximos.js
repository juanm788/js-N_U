var proximos = [];
var hoy;
var eventos;

$(document).ready(function () {

//Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    method: 'GET',
    url: 'https://api.myjson.com/bins/lo7hk'

  }).done(function (resultado) {

//Guarda el resultado en variables
  let  hoy = resultado.fechaActual;
  let  eventos = resultado.eventos;

//Selecciona los eventos que sean anteriores a la fecha actual del JSON
  for(var i = 0; i < eventos.length; i++){
    if (eventos[i].fecha > hoy){
       proximos.push(eventos[i]);
      }
    }

//Ordena los eventos segun la fecha (los mas recientes primero)
  proximos = proximos.sort(function(x,y){
    if (x.fecha < y.fecha){
      return 1;
    }
      return -1;
    });

//Crea un string que contenga el HTML que describe el detalle del evento
  var html = ""

//Recorre el arreglo y concatena el HTML para cada evento
   for(var j = 0; j < proximos.length; j++){
    html += `
      <div class = "espacio">
      <div class ="container-eventos">
      <div class ="titulo-eventos">
      <h2><a href="./detalle.html?id=${proximos[j].id}">${proximos[j].nombre}</a></h2>
      </div>
      <div class ="subtitulo-eventos">
      <p >${proximos[j].fecha }
      -- ${proximos[j].lugar}</p>
      </div>
      <p>Descripción: ${proximos[j].descripcion}</p>
      <div class = "precio">
      <p>Precio: ${proximos[j].precio}</p>
      </div>
      </div>
      </div>`
   }
//Modifica el DOM agregando el html generado
   document.getElementById("proximos").innerHTML = html

  })

});
