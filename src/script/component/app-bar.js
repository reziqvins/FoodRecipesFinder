class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      
    <style>
    * {
      box-sizing: border-box;
    }
    :host {
      display: block;
      width: 100%;
      background-color: #FDCF88;
      padding : 10px
      }
    li{
      display: inline;
      margin-top: 30px;
      margin-right : 30px
    }
    
    nav {
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: fixed;
      background-color: #FDCF88;
    }
    .jumbotron{
      background-color: #FDCF88;
      padding: 150px;
      display: flex;
      justify-content: space-between;
      width : 100%
      height: auto;
      background: linear-gradient(#FDCF88, #FBE5C5);  
    }
    .jumbotronLogo{
      width: 430px;
      height: 400px;
      margin: auto;
    }
    jumbotronText{
      margin-left:100px;
    }
    .jumbotronButton{
      width: 70%;
        cursor: pointer;
        margin-left: auto;
        padding: 16px;
        background-color: #F86C4B;
        color: white;
        border: 0;
        text-transform: uppercase;
        border-radius: 30px;
    }
    
      .jumbotronButton:hover {
        background-color: #85BC3C
      }
      nav a:hover{
        color: #F86C4B;
        font-weight: bold;
        cursor : pointer;
      }
      span.yellow{
        color: #F9A930;
      }
      span.green{
        color: #85BC3C;
      }
      span.red{
        color: #F86C4B;
      }
      h3{
        margin-left:20px;
        margin-top : 10px;
      }
      @media screen and (max-width: 1000px) {

        .jumbotron{
          display: block;
          padding: 10%;
        }
      .jumbotronLogo{
        width: 330px;
        height: 300px;
        margin-left: 10em;
        justify-content: center;
        }
        .jumbotronText{
          margin-left: 20px;
          text-align: center;
        }
        .jumbotronButton{
            font-size: small;
        }
        h3{
          font-size: small;
        }
        li{
          font-size : small;
        }
      }
      @media screen and (max-width: 550px){
        .jumbotron{
          display: block;
          padding: 10%;
        }
        .jumbotronLogo{
          width: 230px;
          height: 200px;
          margin-left : 3em;
         }
        .jumbotronText{
          margin-left: 10px;
          text-align: center;
          font-size: x-small;
        }
        .jumbotronButton{
          font-size: x-small;
      }
        h3{
          font-size: x-small;
          margin-top: 10px;
        }
        li{
          font-size : x-small;
          margin-right : 10px;
        }
        p{
          font-size : x-small;
        }
      }

  </style>
  <header>
<nav>
<div class="navbarBrand">
<h3 style="" ><span class="red">Food</span> <span class="yellow">recipes</span> <span class="green">Finder</span></h3>
</div>
  <div class="navbarMenu">
  <ul>
  <li> <a >Home</a></li>
  <li> <a > Newest Recipt</a></li>
  <li> <a > Most Searched</a></li>
</ul>
  </div>
</nav>
<div class="jumbotron">
  <div class="jumbotronBrand">
    <img class ="https://res.cloudinary.com/dap6ohre8/image/upload/v1723693599/iseng/baner_jjgxnd.png" alt="">
  </div>
  <div class="jumbotronText">
    <h1 style=> Confused looking for food recipes?</h1>
    <p>get the latest recipes from different countries</p>
    <button class="jumbotronButton"><a onclick="scrollSearch()"> Search recipes Now</a></button>
  </div>
</div>
</header>
    `;
  }
}

customElements.define("app-bar", AppBar);
