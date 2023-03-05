function loguear ()
{

let user=document.getElementById("usuario").value;
let pass=document.getElementById("contraseña").value;

if(user=="a" && pass=="123")
{
window.location="Bienvenida/inicio/inicio.html";

}

else
{

    alert("Datos Incorrectos");
}

}