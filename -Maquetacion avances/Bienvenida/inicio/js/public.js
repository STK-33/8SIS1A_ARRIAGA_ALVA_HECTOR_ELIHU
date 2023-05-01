function public() {
    
  
    if (confirm("¿Estás seguro que deseas publicar el formulario " + formulario + "?")) {
      // Aquí va la lógica para borrar el formulario
      alert("El formulario ha sido publicado exitosamente");
      regresar();
    }
  }
  