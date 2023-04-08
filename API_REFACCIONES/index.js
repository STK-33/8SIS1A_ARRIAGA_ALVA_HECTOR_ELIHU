const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


// Configuración de middlewares
app.use(bodyParser.json());
app.use(cors());

// Rutas de la API
app.get('/refacciones', (req, res) => {
  // Aquí puedes obtener las refacciones de una base de datos o de un archivo JSON
  const refacciones = [
    {
      id: 1,
      nombre: 'Filtro de aire',
      marca: 'Bosch',
      modelo: 'AF013',
      precio: 100
    },
    {
      id: 2,
      nombre: 'Bujias',
      marca: 'NGK',
      modelo: 'BKR6E',
      precio: 50
    },
    {
      id: 3,
      nombre: 'Amortiguadores',
      marca: 'Monroe', 
       modelo: 'OESpectrum',
      precio: 500
    },
    {
      id: 4,
      nombre: 'Resortes',
      marca: 'Blistein',
      modelo: 'B6',
      precio: 1500
    },
    
    {
        id: 5,
        nombre: 'Aire alto flujo',
        marca: 'Bosch',
        modelo: 'AF013',
        precio: 1000
      },

      {
        id: 6,
        nombre: 'Inyectores',
        marca: 'Bosch',
        modelo: 'AF018',
        precio: 1000
      }
      
  ];

  res.json(refacciones);
  
});



// Obtener todas las refacciones
app.get('/refacciones', (req, res) => {
  res.json(refacciones);
});

// Obtener una refacción por ID
app.get('/refacciones/:id', (req, res) => {
  const id = Number(req.params.id);
  const refacciones = refacciones.find(r => r.id === id);

  if (refacciones) {
    res.json(refacciones);
  } else {
    res.status(404).send('Refacción no encontrada');
  }
});

// Agregar una nueva refacción
app.post('/refacciones', (req, res) => {
  const refacciones = req.body;
  refacciones.id = idRefaccion++;
  refacciones.push(refacciones);
  res.send('Refacción agregada exitosamente');
});

// Actualizar una refacción existente
app.put('/refacciones/:id', (req, res) => {
  const id = Number(req.params.id);
  const refaccionActualizada = req.body;
  const indice = refacciones.findIndex(r => r.id === id);

  if (indice !== -1) {
    refacciones[indice] = { ...refacciones[indice], ...refaccionActualizada };
    res.send('Refacción actualizada exitosamente');
  } else {
    res.status(404).send('Refacción no encontrada');
  }
});

// Borrar una refacción existente
app.delete('/refacciones/:id', (req, res) => {
  const id = Number(req.params.id);
  refacciones = refacciones.filter(r => r.id !== id);
  res.send('Refacción borrada exitosamente');
});

//para el servidor
const puerto = process.env.PUERTO || 3000;
// Inicialización del servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
