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

window.addEventListener('load', function() { //cuando los elementos cargen...
  // Espera 3 segundos antes de ocultar el cargador y mostrar el contenido
  setTimeout(function() {
      document.getElementById('loaderContainer').style.display = 'none'; //Ocultamos el cargador
      
      document.getElementById('cargador').style.display = 'block'; //Mostramos la felicitacion
      
      document.body.style.overflow = 'auto'; // Permitimos el desplazamiento
  }, 2000); // 3000 milisegundos = 3 segundos
});


function searchRecipe() {
  var query = document.getElementById('search').value.toLowerCase();

  if (query === 'pastas') {
      window.location.href = 'receta pastas.html';
  } else if (query === 'pizza') {
      window.location.href = 'receta pizza.html';
  } else if (query === 'aperitivos') {
    window.location.href = 'receta aperitivos.html';
  } else if (query === 'ensalada') {
    window.location.href = 'receta ensalada.html';
  } else if (query === 'hamburguesa') {
    window.location.href = 'receta hamburguersa.html';
  } else if (query === 'sushi') {
    window.location.href = 'receta sushi.html';
  } else if (query === 'tarta') {
    window.location.href = 'receta tarta.html';
  } else if (query === 'sopa') {
    window.location.href = 'Receta.html';
  }
  else {
      alert('No se encontró la receta. Intenta con otra palabra.');
  }

  return false; // Prevenir el envío del formulario
}

// Función para abrir la ventana emergente
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Función para cerrar la ventana emergente
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// Cerrar la ventana emergente cuando el usuario hace clic fuera de ella
window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target === modal) {
      modal.style.display = "none";
  }
}
function submitRecipe() {
  // Mostrar alerta de éxito
  alert('La receta se ha subido con éxito');
  
  // Cerrar la ventana emergente
  closeModal();
  
  // Limpiar el formulario (opcional)
  document.querySelector('#myModal form').reset();

  // Prevenir el envío real del formulario (puedes cambiar esto si deseas un comportamiento diferente)
  return false;
}