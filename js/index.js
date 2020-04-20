
$(document).ready(function(){

$.ajax({
   method: 'GET',
   url: 'https://api.myjson.com/bins/lo7hk'
 }).done(function(resultado) {

  let hoy = resultado.fechaActual;
  let eventos = resultado.eventos;

  let proximos = eventos.filter(eventos => eventos.fecha > hoy).slice(0,2);
  let pasados = eventos.filter(eventos => eventos.fecha < hoy).slice(0,2);

    mostrarEventos(proximos,'proximos');
    mostrarEventos(pasados,'pasados');

  });
});
//
 function mostrarEventos(eventos,tiempo) {
   let html = "";
    for(var j = 0; j < eventos.length; j++){
      html += getEventhtml(eventos[j]);
    }
    document.getElementById(tiempo).innerHTML=html;
  }
//
 function getEventhtml(evento){
  return `
      <div class = "espacio-inicio">
      <div class ="container-eventos-inicio">
      <div class ="titulo-eventos">
      <h2><a href="./detalle.html?id=${evento.id}">${evento.nombre}</a></h2>
      </div>
      <div class ="subtitulo-eventos">
      <p >${evento.fecha }
      -- ${evento.lugar}</p>
      </div>
      <p>Descripción: ${evento.descripcion}</p>
      </div>
      </div>
      `;
 }
