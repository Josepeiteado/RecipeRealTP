function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
};
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
  }, 500); // 3000 milisegundos = 3 segundos
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
  } else if (query === 'kansas') {
  window.location.href = 'Mi restaurante.html';
  
}
  else {
      alert('No se encontró la receta. Intenta con otra palabra.');
  }

  return false; 
}


function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}


// Función para mostrar el modal
function openModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = "block";
  // Desactivar el desplazamiento del body
  document.body.style.overflow = "hidden";
}

// Función para cerrar el modal
function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
  // Habilitar el desplazamiento del body
  document.body.style.overflow = "auto";
}

// Event listener para el clic fuera del modal
window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target === modal) {
    closeModal();
  }
}

// Función para manejar el envío del formulario
function submitRecipe() {
  alert('La receta se ha subido con éxito');
  closeModal();
  document.querySelector('#myModal form').reset();
  return false;
}


  // Obtener el modal
  var modal = document.getElementById("miVentana");

  // Obtener el elemento que abre el modal
  var btn = document.getElementById("abrirVentana");

  // Obtener el elemento <span> que cierra el modal
  var span = document.getElementsByClassName("boton-cerrar")[0];

  // Cuando el usuario hace clic en el texto, abre el modal y deshabilita el scroll
  btn.onclick = function() {
      modal.style.display = "block";
      document.body.classList.add("sin-scroll");
  }

  // Cuando el usuario hace clic en <span> (x), cierra el modal y habilita el scroll
  span.onclick = function() {
      modal.style.display = "none";
      document.body.classList.remove("sin-scroll");
  }

  // Cuando el usuario hace clic fuera del modal, lo cierra y habilita el scroll
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
          document.body.classList.remove("sin-scroll");
      }
  }


document.getElementById('followersButton').onclick = function() {
  openPopup();
};

// Función para abrir el popup
function openPopup() {
  document.getElementById('followersPopup').style.display = 'block';
  // Desactivar el scroll en el body
  document.body.classList.add('no-scroll');
  // Aquí puedes cargar la lista de seguidores dinámicamente
  loadFollowers();
}

// Función para cerrar el popup
function closePopup() {
  document.getElementById('followersPopup').style.display = 'none';
  // Activar el scroll en el body
  document.body.classList.remove('no-scroll');
}

// Función para cargar seguidores en el popup
function loadFollowers() {
  const followers = [
    { name: 'Juan Pérez', username: '@juanp', photo: 'IMAGENES/Classic gradient 02-Photoroom (4).png' },
    { name: 'Antonio López', username: '@antonioL', photo: 'IMAGENES/Classic gradient 02-Photoroom (5).png' },
    { name: 'Maria Castro', username: '@mariac', photo: 'IMAGENES/Classic gradient 02-Photoroodsdsm (3).png' },
    { name: 'Beatriz Diez', username: '@bead', photo: 'IMAGENES/Classic gradient 02-Photoroom (6).png' },
    { name: 'Andrea Gomez', username: '@andreg', photo: 'IMAGENES/Professional 01-Photoroom.jpg' },
  ];

  const followersContainer = document.getElementById('followersContainer');
  followersContainer.innerHTML = ''; // Limpiar la lista antes de agregar nuevos seguidores

  followers.forEach(follower => {
      const followerItem = document.createElement('div');
      followerItem.className = 'follower-item';

      const photo = document.createElement('img');
      photo.src = follower.photo;
      photo.alt = follower.name;
      photo.className = 'follower-photo';

      const info = document.createElement('div');
      info.className = 'follower-info';

      const name = document.createElement('div');
      name.className = 'follower-name';
      name.textContent = follower.name;

      const username = document.createElement('div');
      username.className = 'follower-username';
      username.textContent = follower.username;

      info.appendChild(name);
      info.appendChild(username);

      followerItem.appendChild(photo);
      followerItem.appendChild(info);

      followersContainer.appendChild(followerItem);
  });
}

// script.js

document.getElementById('openFollowingPopup').onclick = function() {
  openFollowingModal();
};

// Función para abrir el modal de siguiendo
function openFollowingModal() {
  document.getElementById('followingModal').style.display = 'block';
  // Desactivar el scroll en el body
  document.body.classList.add('no-scroll');
  // Aquí puedes cargar la lista de siguiendo dinámicamente
  loadFollowing();
}

// Función para cerrar el modal de siguiendo
function closeFollowingModal() {
  document.getElementById('followingModal').style.display = 'none';
  // Activar el scroll en el body
  document.body.classList.remove('no-scroll');
}

// Función para cargar siguiendo en el modal
function loadFollowing() {
  const followingList = [
    { name: 'Juan Pérez', username: '@juanp', photo: 'IMAGENES/Classic gradient 02-Photoroom (4).png' },
    { name: 'Antonio López', username: '@antonioL', photo: 'IMAGENES/Classic gradient 02-Photoroom (5).png' },
    { name: 'Maria Castro', username: '@mariac', photo: 'IMAGENES/Classic gradient 02-Photoroodsdsm (3).png' },
    { name: 'Beatriz Diez', username: '@bead', photo: 'IMAGENES/Classic gradient 02-Photoroom (6).png' },
    { name: 'Andrea Gomez', username: '@andreg', photo: 'IMAGENES/Professional 01-Photoroom.jpg' },
      // Agrega más seguidos aquí
  ];

  const followingContainer = document.getElementById('followingList');
  followingContainer.innerHTML = ''; // Limpiar la lista antes de agregar nuevos seguidos

  followingList.forEach(person => {
      const followingItem = document.createElement('div');
      followingItem.className = 'following-item';

      const avatar = document.createElement('img');
      avatar.src = person.photo;
      avatar.alt = person.name;
      avatar.className = 'following-avatar';

      const details = document.createElement('div');
      details.className = 'following-details';

      const name = document.createElement('div');
      name.className = 'following-name';
      name.textContent = person.name;

      const username = document.createElement('div');
      username.className = 'following-username';
      username.textContent = person.username;

      details.appendChild(name);
      details.appendChild(username);

      followingItem.appendChild(avatar);
      followingItem.appendChild(details);

      followingContainer.appendChild(followingItem);
  });
}

class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
    `<footer class="footer">
        <div class="footer-content">
            <img src="IMAGENES/recipe realm2.png" alt="Logo de la Empresa" title="logo de la empresa" class="footer-logo">
            <div class="social-icons">
                <a href="https://www.facebook.com" target="_blank" class="social-icon" title="red facebook">
                    <img src="IMAGENES/facebook.png" alt="Facebook" title="facebook">
                </a>
                <a href="https://www.instagram.com" target="_blank" class="social-icon" title="red instagram">
                    <img src="IMAGENES/Insta.png" alt="Instragram" title="instagram">
                </a>
                <a href="https://www.tiktok.com" target="_blank" class="social-icon" title="red tiktok">
                    <img src="IMAGENES/Tiktok.png" alt="TikTok" title="tiktok">
                </a>
                <a href="https://www.youtube.com" target="_blank" class="social-icon" title="red youtube">
                    <img src="IMAGENES/Youtube.png" alt="Youtube" title="youtube">
                </a>
            </div>
        </div>
    </footer>`;
  }
}
customElements.define('footer-component', FooterComponent);




