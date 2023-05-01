function buscarfor() {
    // Obtener el valor del formulario seleccionado
    var formulario = document.getElementsByName("Plantel")[0].value;
  
    // Obtener el valor del período seleccionado
    var periodo = document.getElementsByName("Plantel")[1].value;
    alert("Debe seleccionar un formulario y un periodo.");
  
    // Validar que se haya seleccionado un formulario y un período
    if (formulario == "" || periodo == "") {
      alert("Formulario o periodo sin registro .");
      return;
    }
  
    // Redireccionar a la página de respuestas con los parámetros de búsqueda
    window.location.href = "respuestas.html?formulario=" + formulario + "&periodo=" + periodo;
  }
  