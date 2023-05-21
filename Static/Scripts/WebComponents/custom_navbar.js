class CustomNavbar extends HTMLElement {
  
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
    <style>
    a {
      text-decoration: none;
      color: #1E1E23;
      opacity:1;
      font-family: Arial, sans-serif;
      font-size: 1.7em;
      transition: 200ms;
      font-weight: bold;
    }
    a:hover {
      opacity:0.5;
    }
    ul {
      padding: 0;
      list-style-type: none;
    }
    
    nav {
      margin-top: 2%;
      height: 65px;
    }
    #menuToggle {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 40px;
      right: 25px;
      z-index: 1;
      -webkit-user-select: none;
      user-select: none;
    }
    
    #menuToggle input {
      width: 40px;
      height: 32px;
      position: absolute;
      cursor: pointer;
      opacity: 0;
      z-index: 2;
      right: 0; 
    }
    
    #menuToggle span {
      display: flex;
      width: 29px;
      height: 2px;
      margin-bottom: 5px;
      position: relative;
      background: #ffffff !important;
      border-radius: 3px;
      z-index: 1;
      transform-origin: 5px 0px;
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                  opacity 0.55s ease;
    }
    
    #menuToggle span:first-child
    {
      transform-origin: 0% 0%;
    }

    #menuToggle span:nth-child(2) {
      width: 40px;
    }
    
    #menuToggle span:nth-last-child(2)
    {
      transform-origin: 0% 100%;
      width: 40px;
    }
    
    #menuToggle input:checked ~ span
    {
      opacity: 1;
      transform: rotate(45deg) translate(-3px, -1px);
      background: #36383F;
    }
    #menuToggle input:checked ~ span:nth-last-child(3)
    {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
    
    #menuToggle input:checked ~ span:nth-last-child(2)
    {
      transform: rotate(-45deg) translate(0, -1px);
    }
   
    
    #menu {
      position: fixed;
      top: 65px;
      right: 0;
      width: 15%;
      height: 15%;
      font-color: #ffffff;
      box-shadow: 0 0 10px #85888C;
      margin: 0;
      padding: 50px 0;
      background: linear-gradient(to right, #0f0c29, #302b63, #24243e); 
      -webkit-font-smoothing: antialiased;
      transform-origin: 100% 0;
      transform: translateX(100%);
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
      z-index: 999;
    }
    
    @media screen and (max-width: 768px) {
      #menu {
        width: 250px;
        height: 220px;
        background: linear-gradient(to right, #0f0c29, #302b63, #24243e); 
        
        
      }
    }

    #menuToggle input:checked ~ #menu {
      display: block;
      transform: translateX(0);
    }
    
    #menu li
    {
      padding: 10px 30px;
      transition-delay: 2s;
    }
    
    #menu li a {
      color: #ffffff;
    }
    
    #menuToggle input:checked ~ ul
    {
      transform: none;
    }

      #menu li {
        padding: 10px 20px;
        margin-left: 25px;
        font-size: 1.2em;
    }
  }
    

    .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }

    .logo-image {
      margin-top: -25px;
      width: 90px;
    }
    </style>
  <nav role="navigation">
      <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
         <span></span>
         <span></span>
         <span></span>

      <ul id="menu">
          <li><a href="/">Home</a></li>
          <li><a href="../Hotlines">Hotline</a></li>
          <li><a href="../Resources">Resources</a></li>
      </ul>
      
      </div>
      <div class="logo-container">
        <img class="logo-image" src="../Assets/Icons/Logo1.png" alt="Brand Logo">
    </div>
  </nav>
    `;

  }
}

customElements.define('nav-bar', CustomNavbar);
