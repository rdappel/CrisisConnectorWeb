class HomePage extends HTMLElement {
  
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `

      <style>
      /* Basic container styles */
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        position: relative;
      }
  
      .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
      }
  
      .left-side {
        text-align: left;
      }
  
      .title, .subtitle {
        color: white;
      }
  
      .title {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
  
      .subtitle {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
      }
  
      /* Apply the same styles as before for the LOVE text and Get Started button */
  
      /* Floating image styles */
      .floating-image {
        width: 40%;
        animation: float 3s ease-in-out infinite;
      }
  
      /* Define the floating animation */
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }
  
      /* Media query for mobile devices */
      @media screen and (max-width: 768px) {
        .content {
          flex-direction: column;
        }
  
        .floating-image {
          width: 80%;
          margin-top: 2rem;
        }
      }
  
      </style>
  
      <div class="container">
        <div class="content">
          <div class="left-side">
            <h1 class="title">HotlineConnect: Quick access to verified hotlines.</h1>
            <p class="subtitle">Get timely access to vital support during emergencies with our streamlined mobile app.</p>
            <button class="get-started">Get Started</button>
          </div>
          <img class="floating-image" src="../Assets/Icons/CrisCon.svg" alt="Floating image">
        </div>
      </div>



   
      `;

    }
  }
  
  customElements.define('home-page', HomePage);
  