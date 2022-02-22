import itens from './model/dataset.js';
import foodsModel from './model/foods.js';

foodsModel.load(itens);
let foods = foodsModel.readAll();

function initFoodsCard() {

    for (let item of foods) {

        const view = createFoodCardItem(item);

        //let itensCardapio = document.querySelector('.itens-cardapio');
        let itensCardapio = document.getElementById("itens-cardapio");
        itensCardapio.insertAdjacentHTML('beforeend', view);
    }
}

function createFoodCardItem(item) {

    const view = `<div class="col-md-3 col-sm-12 my-2">
                    
  
                    <div class="card-center" >
                      <h5 class="card-header">${item.name}</h5>
                      <div class="card-body">
                      <img src="${item.image}" class="card-img-top" alt="." class="w-100" style="height: 400px;">
                      <h5 class="card-title my-2 py-2">${item.description}</h5>
                      
                      <h5 class="card-title">${item.price}</h5>
                      <a href="#" class="btn btn-primary">Quero este!</a>
                    </div>
                    </div>
                  </div>`;

    return view;
}


// Captar o evento de submissão do formulário e adicionar o item no cartão (card).
// const foodForm = document.querySelector('#foodForm');
const foodForm = document.getElementById("foodForm");

foodForm.onsubmit = function(event) {
    // Previnir que o modal fique abrindo e fechando em loop.
    event.preventDefault();

    let newFood = Object.fromEntries(new FormData(foodForm));
    foodsModel.create(newFood);

    const foodCard = createFoodCardItem(newFood);
    let itensCardapio = document.getElementById("itens-cardapio");
    itensCardapio.insertAdjacentHTML('beforeend', foodCard);
}

initFoodsCard();