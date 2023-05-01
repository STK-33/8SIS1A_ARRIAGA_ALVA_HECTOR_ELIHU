function agregar(){
const formulario = document.getElementById('formulario');

formulario.addEventListener('click', (event) => {
  event.preventDefault();


  const id = document.getElementById('id').value;
  const nombre = document.getElementById('nombre').value;
  const marca = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const precio = document.getElementById('precio').value;

  fetch('http://localhost:3000/refacciones', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id:id,
      nombre: nombre,
      marca: marca,
      modelo: modelo,
      precio: precio
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Refacción agregada:', data);
  })
  .catch(error => {
    console.error('Error al agregar la refacción:', error);
  });
});
}