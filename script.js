
function validateForm() {
  
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();


  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

 
  emailError.textContent = '';
  passwordError.textContent = '';

  
  let valid = true;

  
  if (email === '') {
      emailError.textContent = 'El campo de email es obligatorio.';
      valid = false;
  }

  
  if (password === '') {
      passwordError.textContent = 'El campo de contraseña es obligatorio.';
      valid = false;
  }

  
  return valid;
}



function SeguirBoton() {
  var boton = document.getElementById("seguir");
  if (boton.textContent === "Seguir") {
    boton.textContent = "Siguiendo";
    boton.style.backgroundColor = "#C57900";
  } else {
    boton.textContent = "Seguir";
    boton.style.backgroundColor = "black";
  }
}


function enviar() {
  var nombre = document.getElementById("formulario").value;
  alert("Tu comentario ha sido enviado");
}


window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('loaderContainer').style.display = 'none';
    document.getElementById('cargador').style.display = 'block';
    document.body.style.overflow = 'auto';
  }, 500);
});


function searchRecipe() {
  var query = document.getElementById('search').value.toLowerCase();
  
  var recipes = {
    'pastas': 'receta pastas.html',
    'pizza': 'receta pizza.html',
    'aperitivos': 'receta aperitivos.html',
    'ensalada': 'receta ensalada.html',
    'hamburguesa': 'receta hamburguersa.html',
    'sushi': 'receta sushi.html',
    'tarta': 'receta tarta.html',
    'sopa': 'Receta.html',
    'kansas': 'Mi restaurante.html'
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


var modal = document.getElementById("miVentana");
var btn = document.getElementById("abrirVentana");
var span = document.getElementsByClassName("boton-cerrar")[0];

btn.addEventListener('click', function() {
  modal.style.display = "block";
  document.body.classList.add("sin-scroll");
});

span.addEventListener('click', function() {
  modal.style.display = "none";
  document.body.classList.remove("sin-scroll");
});

window.addEventListener('click', windowOnClick);


function openPopup() {
  document.getElementById('followersPopup').style.display = 'block';
  document.body.classList.add('no-scroll');
  loadFollowers();
}


function closePopup() {
  document.getElementById('followersPopup').style.display = 'none';
  document.body.classList.remove('no-scroll');
}


function loadFollowers() {
  const followers = [
    { name: 'Juan Pérez', username: '@juanp', photo: 'IMAGENES/Classic gradient 02-Photoroom (4).png' },
    { name: 'Antonio López', username: '@antonioL', photo: 'IMAGENES/Classic gradient 02-Photoroom (5).png' },
    { name: 'Maria Castro', username: '@mariac', photo: 'IMAGENES/Classic gradient 02-Photoroodsdsm (3).png' },
    { name: 'Beatriz Diez', username: '@bead', photo: 'IMAGENES/Classic gradient 02-Photoroom (6).png' },
    { name: 'Andrea Gomez', username: '@andreg', photo: 'IMAGENES/Professional 01-Photoroom.jpg' }
  ];

  const followersContainer = document.getElementById('followersContainer');
  followersContainer.innerHTML = '';

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


document.getElementById('followersButton').addEventListener('click', openPopup);


document.getElementById('openFollowingPopup').addEventListener('click', function() {
  openFollowingModal();
});


function openFollowingModal() {
  document.getElementById('followingModal').style.display = 'block';
  document.body.classList.add('no-scroll');
  loadFollowing();
}


function closeFollowingModal() {
  document.getElementById('followingModal').style.display = 'none';
  document.body.classList.remove('no-scroll');
}


function loadFollowing() {
  const followingList = [
    { name: 'Juan Pérez', username: '@juanp', photo: 'IMAGENES/Classic gradient 02-Photoroom (4).png' },
    { name: 'Antonio López', username: '@antonioL', photo: 'IMAGENES/Classic gradient 02-Photoroom (5).png' },
    { name: 'Maria Castro', username: '@mariac', photo: 'IMAGENES/Classic gradient 02-Photoroodsdsm (3).png' },
    { name: 'Beatriz Diez', username: '@bead', photo: 'IMAGENES/Classic gradient 02-Photoroom (6).png' },
    { name: 'Andrea Gomez', username: '@andreg', photo: 'IMAGENES/Professional 01-Photoroom.jpg' }
  ];

  const followingContainer = document.getElementById('followingList');
  followingContainer.innerHTML = '';

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
