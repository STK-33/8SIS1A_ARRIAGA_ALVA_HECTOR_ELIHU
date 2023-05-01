function guardarPreguntas() {
 
  // Obtener la tabla de preguntas
  var tabla = document.getElementById("tablaPreguntas");
  // Obtener las filas de la tabla
  var filas = tabla.getElementsByTagName("tr");
  // Crear un array para almacenar las preguntas
  var preguntas = [];

  // Recorrer todas las filas excepto la primera (encabezado)
  for (var i = 1; i < filas.length; i++) {
    // Obtener la pregunta y opciones de la fila actual
    var pregunta = filas[i].getElementsByTagName("input")[0].value;
    var opciones = filas[i].getElementsByTagName("textarea")[0].value.split(",");

    // Crear un objeto para almacenar la pregunta y opciones
    var objetoPregunta = {
      "pregunta": pregunta,
      "opciones": opciones
    };

    // Agregar el objeto al array de preguntas
    preguntas.push(objetoPregunta);
  }

  // Convertir el array de preguntas a formato JSON
  var preguntasJSON = JSON.stringify(preguntas);

  // Guardar el archivo JSON con las preguntas
  var blob = new Blob([preguntasJSON], {type: "application/json"});
  saveAs(blob, "FORMULARIO_2023.json");
  alert("Formulario guardado correctamente ");
}

  