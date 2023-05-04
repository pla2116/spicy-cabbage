console.log('this works')

//---------- DATASET

const perfumes = [
  {
    name: "Colonia Intensa",
    brand: "Acqua di Parma",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Acqua Di Parma_Colonia Intensa.jpg"
  },
  
  {
    name: "Mandorlo di Sicilia",
    brand: "Acqua di Parma",
    color: "blue",
    image: "../../ASSETS/Perfumes/Acqua Di Parma_Mandorlo di Sicilia.jpg"
  },

  {
    name: "Peonia Nobile",
    brand: "Acqua di Parma",
    color: "pink",
    image: "../../ASSETS/Perfumes/Acqua Di Parma_Peonia Nobile.jpg"
  },
  
  {
    name: "B Balenciaga Skin",
    brand: "Balenciaga",
    color: "pink",
    image: "../../ASSETS/Perfumes/Balenciaga_B Balenciaga Skin.jpg"
  },

  {
    name: "Flora Botanica",
    brand: "Balenciaga",
    color: "clear",
    image: "../../ASSETS/Perfumes/Balenciaga_Florabotanica.jpg"
  },

  {
    name: "Illusione: For Her",
    brand: "Bottega Veneta",
    color: "pink",
    image: "../../ASSETS/Perfumes/Bottega Veneta_Illusione For Her.jpg"
  },

  {
    name: "Illusione: For Him",
    brand: "Bottega Veneta",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Bottega Veneta_Illusione For Him.jpg"
  },

  {
    name: "Man in Black",
    brand: "Bulgari",
    color: "black",
    image: "../../ASSETS/Perfumes/Bulgari_Man in Black.jpg"
  },

  {
    name: "Super Cedar",
    brand: "Byredo",
    color: "clear",
    image: "../../ASSETS/Perfumes/Byredo_Super Cedar.jpg"
  },

  {
    name: "Tobacco Mandarin",
    brand: "Byredo",
    color: "pink",
    image: "../../ASSETS/Perfumes/Byredo_Tobacco Mandarin.jpg"
  },

  {
    name: "Vanille Antique",
    brand: "Byredo",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Byredo_Vanille Antique.jpg"
  },

  {
    name: "Pasha de Cartier",
    brand: "Cartier",
    color: "black",
    image: "../../ASSETS/Perfumes/Cartier_Pasha de Cartier.jpg"
  },

  {
    name: "Bleu de Chanel",
    brand: "Chanel",
    color: "blue",
    image: "../../ASSETS/Perfumes/Chanel_Bleu de Chanel.jpg"
  },

  {
    name: "Chance",
    brand: "Chanel",
    color: "green",
    image: "../../ASSETS/Perfumes/Chanel_Chance.jpg"
  },

  {
    name: "Coco Mademoiselle",
    brand: "Chanel",
    color: "pink",
    image: "../../ASSETS/Perfumes/Chanel_Coco Mademoiselle.jpg"
  },

  {
    name: "Coco Noir",
    brand: "Chanel",
    color: "black",
    image: "../../ASSETS/Perfumes/Chanel_Coco Noir.jpg"
  },

  {
    name: "Gabrielle Chanel Essence",
    brand: "Chanel",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Chanel_Gabrielle Chanel Essence.jpg"
  },

  {
    name: "No. 5 Leau",
    brand: "Chanel",
    color: "clear",
    image: "../../ASSETS/Perfumes/Chanel_No 5 Leau.jpg"
  },

  {
    name: "Play Green",
    brand: "Comme des Garcons",
    color: "clear",
    image: "../../ASSETS/Perfumes/Comme des Garcons_Play Green.jpg"
  },

  {
    name: "Original Vetiver",
    brand: "Creed",
    color: "green",
    image: "../../ASSETS/Perfumes/Creed_Original Vetiver.jpg"
  },

  {
    name: "Pure White",
    brand: "Creed",
    color: "clear",
    image: "../../ASSETS/Perfumes/Creed_Pure White.jpg"
  },

  {
    name: "Silver Mountain Water",
    brand: "Creed",
    color: "clear",
    image: "../../ASSETS/Perfumes/Creed_Silver Mountain Water.jpg"
  },

  {
    name: "Bobby",
    brand: "Dior",
    color: "pink",
    image: "../../ASSETS/Perfumes/Dior_Bobby.jpg"
  },

  {
    name: "Bobby",
    brand: "Dior",
    color: "pink",
    image: "../../ASSETS/Perfumes/Dior_Bobby.jpg"
  },

  {
    name: "Eau Sauvage",
    brand: "Dior",
    color: "green",
    image: "../../ASSETS/Perfumes/Dior_Eau Sauvage.jpg"
  },

  {
    name: "J'adore",
    brand: "Dior",
    color: "clear",
    image: "../../ASSETS/Perfumes/Dior_Jadore.jpg"
  },
];

//---------- RENDER PERFUMES TO PAGE

const ul = document.querySelector("ul");

function renderPerfumesToPage(results) {
  // iterate over data set
  for(let i = 0; i < results.length; i++){
    // create the list item
    let listItem = document.createElement('li');
    // add a class to each item of the results
    listItem.classList.add('card', results[i].color) // red
    // add perfume name
    let title = document.createElement('h3')
    title.textContent = results[i].name // Rose
    // add perfume brand
    let store = document.createElement('h4')
    store.textContent = results[i].brand // Balenciaga
    // add perfume color
    let color = document.createElement('p')
    color.classList.add(results[i].color)
    color.textContent = results[i].color

    // add perfume image
    let image = document.createElement('img')
    image.setAttribute('src', results[i].image)

    ul.appendChild(listItem)
    //listItem.appendChild(color)
    listItem.appendChild(image)
    listItem.appendChild(title)
    listItem.appendChild(store)

  }
}
renderPerfumesToPage(perfumes);

//---------- FILTER PERFUMES BY COLOR

let filterBtns = document.querySelector(".filters");
let cards = document.querySelectorAll(".card");

function filterFn(event) {
  console.log(event.target)
  if(event.target.classList.contains('filter-btn')){
    // select the current active button
    let activeBtn = filterBtns.querySelector('.active')
    activeBtn.classList.remove('active')

    // apply the active class to the target
    event.target.classList.add('active')

    const filterValue = event.target.getAttribute('data-filter') // yellow | red

    for(let i = 0; i < cards.length; i++){
      if(cards[i].classList.contains(filterValue) || filterValue === 'all'){
        cards[i].classList.remove('hide')
        cards[i].classList.add('show')
      } else {
        cards[i].classList.remove('show')
        cards[i].classList.add('hide')
      }

    }
  }
}
filterBtns.addEventListener("click", filterFn);