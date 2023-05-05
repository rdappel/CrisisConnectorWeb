class CustomNavbar extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
        <style>
          /* styles.css */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: Arial, sans-serif;
          }
          
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #673AB7;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to top, #512DA8, #673AB7);  /* Chrome 10-25, Safari 5.1-6 */
            background: #000428;
            padding: 0 1rem;
            position: relative;
          }
          
          .logo-wrapper {
            position: relative;
            z-index: 2;
          }
          
          .navbar-brand img {
            height: 80px;
            width: auto;
          }
          
          .nav {
            display: flex;
            align-items: center;
            list-style: none;
          }
          
          .nav-item {
            position: relative;
          }
          
          .nav-link {
            display: inline-block;
            padding: 0.5rem 1rem;
            text-decoration: none;
            color: #fff;
            transition: transform 0.5s;
            transform-origin: center;
            backface-visibility: hidden;
          }
          
          .nav-link::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.1);
            transform: rotateX(90deg);
            transition: transform 0.5s;
            transform-origin: center;
            backface-visibility: hidden;
          }
          
          .nav-link:hover {
            transform: rotateX(90deg);
          }
          
          .nav-link:hover::before {
            transform: rotateX(0deg);
          }

          .nav-open {
            background: linear-gradient(150deg, #000428, purple); 
          }
          
          .nav-toggle {
            display: none;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 30px;
            
            height: 21px;
            cursor: pointer;
            position: relative;
          }
          
          .nav-toggle span {
            height: 3px;
            width: 100%;
            background-color: #000;
            transition: all 0.3s ease;
          }
          
          .nav-toggle:hover span {
            background-color: #0088cc;
          }
          
          .nav-toggle span:nth-child(2) {
            width: 100%;
          }
          
          .nav-toggle span:nth-child(3) {
            width: 100%;
          }
          
          
          
          @media (max-width: 768px) {
            .nav {
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              flex-direction: column;
              background-color: #333;
              display: none;
            }
          
            .nav-toggle {
              display: flex;
            }
  
            .nav-open {
                display: flex;
              }
          }
        </style>
  
        <header class="navbar">
            <div class="logo-wrapper">
                <a href="#" class="navbar-brand">
                    <img src="../Assets/Icons/CrisCon.svg" alt="Brand Logo">
                </a>
            </div>
            <nav>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Resources</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Help</a>
                    </li>
                </ul>
            </nav>
            <button class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
          </button>
      </header>
    `; // end of shadowRoot.innerHTML
  }

  connectedCallback() {
    this.setupHamburgerMenu();
  }

  setupHamburgerMenu() {
    const navToggle = this.shadowRoot.querySelector(".nav-toggle");
    const nav = this.shadowRoot.querySelector(".nav");

    navToggle.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
                
  
  