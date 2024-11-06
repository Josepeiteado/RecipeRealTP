class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
    `<nav class="navbar">
      <div class="nav-left">
          <a href="perfil.html"><img src="IMAGENES/Perfil.png" alt="Left Icon" class="nav-icon1"></a>
      </div>
      
      <div class="nav-center">
          <a href="#" class="logo">Recipe Realm</a>
      </div>

      <div class="nav-right">
          <a href="inicio.html"><img src="IMAGENES/casa.png" alt="Right Icon 1" class="nav-icon"></a>
          <a href="index.html"><img src="IMAGENES/salida.png" alt="Right Icon 2" class="nav-icon"></a>
      </div>
  </nav>`;
  }
}
customElements.define('header-component', HeaderComponent);


class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
    ` <footer class="footer">
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
