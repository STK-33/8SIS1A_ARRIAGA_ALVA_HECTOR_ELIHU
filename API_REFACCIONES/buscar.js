function buscar() {
    const busqueda = document.getElementById('busqueda').value;
    fetch('http://localhost:3000/refacciones')
      .then(response => response.json())
      .then(data => {
        const refaccionBuscada = data.find(refaccion => refaccion.nombre.toLowerCase().includes(busqueda.toLowerCase()));
        if (refaccionBuscada) {
          document.getElementById('resultado').innerHTML = `
            <p>Nombre: ${refaccionBuscada.nombre}</p>
            <p>Marca: ${refaccionBuscada.marca}</p>
            <p>Modelo: ${refaccionBuscada.modelo}</p>
            <p>Precio: $${refaccionBuscada.precio}</p>
          `;
        } else {
          document.getElementById('resultado').innerHTML = '<p>No se encontraron resultados</p>';
        }
      });
  }
  
  