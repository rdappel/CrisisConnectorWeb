
class BottomNavigation extends HTMLElement {
  
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
      <style>
      @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Pacifico&display=swap');
      *{
        font-family: sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      nav{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        background: #8E2DE2;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  
        background: linear-gradient(to right, #4A00E0, #8E2DE2);
        opacity: 90%;
        padding: 12px;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 12%;
      }
      .nav-item{
        font-family: sans-serif;
        font-size: 20px;
        align-items: center;
        text-decoration: none;
        color: white;
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .nav-item img{
        display: block; 
        margin-bottom: 7px;
        width: 30px;
      }
    </style>    
    <nav>
        <a class="nav-item" href="#">
          <img src="../Assets/Icons/homeIcon.png"/>
          Home
        </a>  
      <a class="nav-item" href="#">
        <img src="../Assets/Icons/phone_call_icon.png"/>
        Hotlines
      </a>
    </nav>
      `;
    }
  }
  
  customElements.define('bottom-navigation', BottomNavigation);
  