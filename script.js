function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
}

  function SeguirBoton(){
    var boton = document.getElementById("seguir");
    if (    boton.textContent == "Seguir"    ) {
      boton.textContent="Siguiendo";
      boton.style="background-color: #C57900";
    }else{
      boton.textContent="Seguir";
      boton.style="background-color:black";
    }
  }

  function enviar(){
    var nombre = document.getElementById("formulario").value;
    alert("Tu comentario ha sido enviado")
}

