

window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('loaderContainer').style.display = 'none';
    document.getElementById('cargador').style.display = 'block';
    document.body.style.overflow = 'auto';
  }, 1000);
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validación para campos obligatorios
  if (!email || !password) {
    alert('Por favor, ingresa tu correo electrónico y tu contraseña.');
    event.preventDefault(); // Evita el envío real del formulario si falta información
    return;
  }

  // Aquí puedes agregar lógica de autenticación si es necesario
  alert('Inicio de sesión exitoso');
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
  const name = document.getElementById('name').value;
  const client = document.getElementById('client').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validación para asegurar que todos los campos estén llenos
  if (!name || !client || !email || !password) {
    alert('Por favor, completa todos los campos antes de registrarte.');
    event.preventDefault(); // Evita el envío del formulario si falta información
    return;
  }

  // Aquí puedes agregar lógica de autenticación si es necesario
  alert('Registro exitoso');
});


function searchRecipe() {
  var query = document.getElementById('search').value.toLowerCase();

  var recipes = {
    'pastas': 'Pastas.html',
    'pizza': 'pizza.html',
    'aperitivos': 'Aperitivos.html',
    'ensalada': 'ensalada.html',
    'hamburguesa': 'hamburguesa.html',
    'sushi': 'sushi.html',
    'tarta': 'tarta.html',
    'sopa': 'Sopadecalabaza.html',
    'kansas': 'perfilrestaurante.html'
  };

  if (recipes[query]) {
    window.location.href = recipes[query];
  } else {
    alert('No se encontró la receta. Intenta con otra palabra.');
  }

  return false;
}


function openModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = "block";
  modal.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}


function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  modal.style.overflow = "auto";
}


function windowOnClick(event) {
  var modal = document.getElementById('myModal');
  if (event.target === modal) {
    closeModal();
  }
}


function submitRecipe() {
  alert('La receta se ha subido con éxito');
  closeModal();
  document.querySelector('#myModal form').reset();
  return false;
}


function openCommentsModal() {
  document.getElementById('commentsModal').style.display = 'flex';
}

// Cerrar modal
function closeCommentsModal() {
  document.getElementById('commentsModal').style.display = 'none';
}


var modal = document.getElementById("miVentana");
var btn = document.getElementById("abrirVentana");
var span = document.getElementsByClassName("boton-cerrar")[0];

btn.addEventListener('click', function () {
  modal.style.display = "block";
  document.body.classList.add("sin-scroll");
});

span.addEventListener('click', function () {
  modal.style.display = "none";
  document.body.classList.remove("sin-scroll");
});

window.addEventListener('click', windowOnClick);

/* https://magicloops.dev/es */
function enviarMail(email, nombre, apellido, mensaje) {
  // Por si necesito usar letrs o simbolos raros
  const emailEncoded = encodeURIComponent(email);
  const nombreEncoded = encodeURIComponent(nombre);
  const apellidoEncoded = encodeURIComponent(apellido);
  const mensajeEncoded = encodeURIComponent(mensaje);
  //Ahora necesitamos la url de la api junto a los valores codificados
  //La api la cree en magicloops.dev y envia el mail a mi casilla personal.
  const url = `https://magicloops.dev/api/loop/run/9ae1799b-9d8c-47a7-8d23-160f3c0aeeb9?nombre=${nombreEncoded}&apellido=${apellidoEncoded}&email=${emailEncoded}&mensaje=${mensajeEncoded}`;

  fetch(url)//Envia una peticion a la api
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log('Respuesta del servidor:', data); // Esperemos que sea un mensaje de ok y estatus 200 jaja
      return true;
    })
    .catch(error => {
      console.error('Hubo un error:', error);
      return 0;
    });
}
function enviarCorreo() {
  const email = document.getElementById("email").value;
  const usuario = document.getElementById("nombreUsuario").value;
  const apellido = document.getElementById("apellidoUsuario").value;
  const mensaje = document.getElementById("mensajeUsuario").value;
  console.log(email, usuario, apellido, mensaje);
  enviarMail(email, usuario, apellido, mensaje);
  return false;

}
/* enviarMail('prueba@pruebafacu.com', 'Facu', 'Romero', 'Hola curso, es una prueba'); */



