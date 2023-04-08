document.getElementById('btn-cargar').addEventListener('click', function() {
    fetch('http://localhost:3000/refacciones')
      .then(function(response) {
        return response.json();
      })
      .then(function(refacciones) {
        var contenedor = document.getElementById('contenedor-refacciones');
  
        refacciones.forEach(function(refaccion) {
          var div = document.createElement('div');
          div.innerHTML = '<h3>' + refaccion.nombre + '</h3><p>' + refaccion.marca + '</p>';
          contenedor.appendChild(div);
        });
      });
  });

  
  
  