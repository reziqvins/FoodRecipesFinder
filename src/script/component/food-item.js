class FoodItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      display: block;
      margin-bottom: 18px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
    }
    
    .food-image {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      object-position: center;
    }
    
    .food-info {
      padding: 24px;
    }
    
    .food-info > h2 {
      font-weight: lighter;
    }
    
    .food-info > p {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10; /* number of lines to show */
    }
    li{
      margin-left: 30px;
    }
    li.p{
      margin-top: 100 px;
    }
    .intruction{
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10; /* number of lines to show */
    }    
    
  </style>
  
      <div class="food-info">
        <h2>${this._food.strMeal}</h2>
        <img class="food-image" src="${this._food.strMealThumb}" alt="Food Image">
        <div class="ingredients">
        <p style="margin-bottom:10px ;"><b>Ingredients</b></p>
        <ul>
          <li>${this._food.strIngredient1} : ${this._food.strMeasure1}</li>
          <li>${this._food.strIngredient2} : ${this._food.strMeasure2}</li>
          <li>${this._food.strIngredient3} : ${this._food.strMeasure3}</li>
          <li>${this._food.strIngredient4} : ${this._food.strMeasure4} </li>
          <li>${this._food.strIngredient5} : ${this._food.strMeasure5} </li>
          <li>${this._food.strIngredient6} : ${this._food.strMeasure6}</li>
         
        </ul>
      </div>
      <div class="intruction">
      <p style="margin-bottom:10px ;"><b> Instruction </b></p>
        <p>${this._food.strInstructions}</p>
    </div>
      </div>
      
      
    `;
  }
}

customElements.define("food-item", FoodItem);
