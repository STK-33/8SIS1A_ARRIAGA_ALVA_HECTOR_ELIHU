function guardarPreguntas() {
    // Obtener el tbody donde están las preguntas
    const tbody = document.getElementById('ProSelected');
    
    // Crear un array para almacenar las preguntas
    const preguntas = [];
    
    // Recorrer todas las filas de la tabla y obtener los datos
    for (let i = 0; i < tbody.rows.length; i++) {
      const pregunta = {};
      const row = tbody.rows[i];
      pregunta.tipo = row.cells[0].innerText;
      pregunta.pregunta = row.cells[1].innerText;
      
      // Obtener las opciones de la pregunta
      const opciones = [];
      const opcionesCells = row.cells[2].querySelectorAll('option');
      for (let j = 0; j < opcionesCells.length; j++) {
        const opcion = opcionesCells[j].innerText;
        opciones.push(opcion);
      }
      pregunta.opciones = opciones;
      
      preguntas.push(pregunta);
    }
    
    // Convertir el array de preguntas a un JSON
    const preguntasJSON = JSON.stringify(preguntas);
    
    // Enviar los datos a un servidor o almacenarlos en localStorage, etc.
    // Ejemplo de enviarlos a un servidor utilizando fetch:
    fetch('/guardar-preguntas', {
      method: 'POST',
      body: preguntasJSON
    })
    .then(response => {
      // Procesar la respuesta del servidor
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  
