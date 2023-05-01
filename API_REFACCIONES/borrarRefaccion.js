function borrarRefaccion() {
    // Pedir al usuario que seleccione una refacción
    const id = prompt('Ingrese el ID de la refacción a borrar:');
    
    
    // Enviar la solicitud DELETE al servidor
    fetch(`http://localhost:3000/refacciones/${id}`, {
      method: 'DELETE'
    })
    
    .then(response =>  {
      if (!response.data) {
        alert('La refacción ha sido borrada correctamente.');
      } else {
        alert('Ha ocurrido un error al borrar la refacción.');
      }
    })
    .catch(error => {
      alert(`Ha ocurrido un error al borrar la refacción: ${error.message}`);
    });
  }
  