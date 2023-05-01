module.exports = index;
// función para enviar la solicitud PUT al servidor
function editarRefaccion() {
    // obtener los datos del formulario de edición
    const id = document.getElementById('id-editar').value;
    const nombre = document.getElementById('nombre-editar').value;
    const marca = document.getElementById('marca-editar').value;
    const modelo = document.getElementById('modelo-editar').value;
    const precio = document.getElementById('precio-editar').value;
  
    // crear el objeto de datos a enviar en la solicitud PUT
    const datos = {
      id: id,
      nombre: nombre,
      marca: marca,
      modelo: modelo,
      precio: precio
    };
  
    // enviar la solicitud PUT al servidor
    fetch(`http://localhost:3000/refacciones`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        // si la solicitud PUT se completó con éxito, mostrar un mensaje de confirmación
        alert('Refacción actualizada con éxito');
        // recargar la lista de refacciones para mostrar los cambios
        obtenerRefacciones();
        // ocultar el formulario de edición
        document.getElementById('form-editar').classList.remove('visible');
      })
      .catch(error => {
        // si se produjo un error al enviar la solicitud PUT, mostrar un mensaje de error
        alert('Error al actualizar la refacción');
        console.error(error);
      });
  }
  

  
  // agregar un evento de escucha para enviar el formulario de edición
  document.getElementById('form-editar').addEventListener('submit', event => {
    event.preventDefault();
    editarRefaccion();
  });
  