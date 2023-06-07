class footerApp extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
      <style>
      footer{
        background-color: #FDCF88;
        text-align: center;
        padding:30px;
      }
      @media screen and (max-width: 550px){
        footer{
        font-size: smaller;
        }
      }
    </style>
    <footer>
  <p>Copyright 2022 By Muhammad Reziq Darusman</p>
    </footer>
    `;

    }
  }
  
  customElements.define('footer-app', footerApp);
