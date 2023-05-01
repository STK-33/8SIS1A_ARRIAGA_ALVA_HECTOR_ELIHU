function enviarFor() {
    alert("Se enviaron tus respuestas");
  $(document).ready(function(){
    // Al enviar el formulario
 
    $("#formRespuestas").submit(function(event){
        event.preventDefault();
        
        // Obtener las respuestas del usuario
      
        var respuestas = [];
        $("#tablaPreguntas tbody tr").each(function(){
            var pregunta = $(this).find("td:first").text();
            var respuesta = $(this).find("select").val();
            respuestas.push({
                pregunta: pregunta,
                respuesta: respuesta
            });
        });
        
        // Enviar las respuestas al servidor
        $.ajax({
            url: "enviar_formulario.php",
            method: "POST",
            data: {
                respuestas: JSON.stringify(respuestas)
            },
            success: function(response){
                // Mostrar una alerta con la respuesta recibida
                alert(response);
            },
            error: function(){
                // Mostrar una alerta en caso de error
                alert("Error al enviar las respuestas");
            }
        });
    });
});

}
