function verPreguntas() {
  // Obtener preguntas guardadas del almacenamiento local
  var preguntasGuardadas = JSON.parse(localStorage.getItem("preguntas")) || [];

  // Crear contenedor para las preguntas
  var preguntasContainer = $("<div>").addClass("preguntas-container");

  // Crear lista de preguntas
  var preguntasList = $("<ul>");

  // Agregar cada pregunta a la lista
  preguntasGuardadas.forEach(function(pregunta, index) {
    // Crear elemento de lista para la pregunta
    var preguntaItem = $("<li>");

    // Agregar la pregunta en sí
    preguntaItem.append($("<h4>").text("Pregunta " + (index+1) + ": " + pregunta.pregunta));

    // Agregar las opciones
    var opcionesList = $("<ul>");
    pregunta.opciones.forEach(function(opcion) {
      opcionesList.append($("<li>").text(opcion));
    });
    preguntaItem.append(opcionesList);

    // Agregar la pregunta a la lista
    preguntasList.append(preguntaItem);
  });

  // Agregar la lista de preguntas al contenedor de preguntas
  preguntasContainer.append(preguntasList);

  // Agregar el contenedor de preguntas al body del HTML
  $("body").append(preguntasContainer);
}
