
class HeaderComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = 
      `<header>
        <nav>
            <ul class="menu">
                <li class="perfil1" class="menu-item left"><a href="Perfil.html" title="perfil ana"><img class="perfil" src="IMAGENES/Perfil.png" alt="Icono Izquierdo" title="icono perfil"></a></li>
                <li class="menu-item center"><a href="#" title="logo"><img class="logo2" src="IMAGENES/recipe realm.png" alt="Logo1" title="icono logo"></a></li>
                <li class="imag3" class="menu-item right"><a href="Inicio.html" title="menu"><img class="imagenes1" src="IMAGENES/casa.png" alt="Icono Derecho 1" title="icono casa"></a></li>
                <li class="menu-item right"><a href="index.html" title="regresar"><img class="imagenes" src="IMAGENES/salida.png" alt="Icono Derecho 2" title="icono salida"></a></li>
            </ul>
        </nav>
    </header>`;
    }
  }
  customElements.define('header-component', HeaderComponent);





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

  