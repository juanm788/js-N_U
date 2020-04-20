
$.ajax({
    method: 'GET',
    url: 'https://api.myjson.com/bins/lo7hk'
  }).done(function (resultado) {
//llenando la variable

    eventos = resultado.eventos;

//obteniendo el id del url
if (window.location.search.match(/id=(\d)*/)) {
    var id = window.location.search.match(/id=(\d)*/)[1];
  }
    let evento = eventos.find(function (element) {
      return element.id == id
  });
//Recorre el arreglo y concatena el HTML para cada evento
  var html = `
        <div class = "espacio">
        <div class ="container-eventos">
        <div class ="titulo-eventos">
        <h2>${evento.nombre}</h2>
        </div>
       <div class ="subtitulo-eventos">
       <p>${evento.fecha}
        -- ${evento.lugar}</p
        </div>
        <p>Descripción: ${evento.descripcion}</p>
        <p>Costo: ${evento.precio}</p>
        <div class = "invitados">
        <p>Invitados: ${evento.invitados}</p>
        </div>
        </div>
        </div>`

        document.getElementById("evento").innerHTML = html;
  });
