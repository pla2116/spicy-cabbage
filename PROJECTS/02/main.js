console.log('this works')

//---------- DATASET

const perfumes = [
  {
    name: "Colonia Intensa",
    brand: "Acqua di Parma",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Acqua Di Parma_Colonia Intensa.jpg.jpg"
  },
  
  {
    name: "Mandorlo di Sicilia",
    brand: "Acqua di Parma",
    color: "blue",
    image: "../../ASSETS/Perfumes/Acqua Di Parma_Mandorlo di Sicilia.jpg.jpg"
  },

  {
    name: "Peonia Nobile",
    brand: "Acqua di Parma",
    color: "pink",
    image: "../../ASSETS/Perfumes/Acqua Di Parma_Peonia Nobile.jpg.jpg"
  },
  
  {
    name: "B Balenciaga Skin",
    brand: "Balenciaga",
    color: "pink",
    image: "../../ASSETS/Perfumes/Balenciaga_B Balenciaga Skin.jpg.jpg"
  },

  {
    name: "Flora Botanica",
    brand: "Balenciaga",
    color: "clear",
    image: "../../ASSETS/Perfumes/Balenciaga_Florabotanica.jpg.jpg"
  },

  {
    name: "Illusione: For Her",
    brand: "Bottega Veneta",
    color: "pink",
    image: "../../ASSETS/Perfumes/Bottega Veneta_Illusione For Her.jpg.jpg"
  },

  {
    name: "Illusione: For Him",
    brand: "Bottega Veneta",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Bottega Veneta_Illusione For Him.jpg.jpg"
  },

  {
    name: "Man in Black",
    brand: "Bulgari",
    color: "black",
    image: "../../ASSETS/Perfumes/Bulgari_Man in Black.jpg.jpg"
  },

  {
    name: "Super Cedar",
    brand: "Byredo",
    color: "green",
    image: "../../ASSETS/Perfumes/Byredo_Super Cedar.jpg.jpg"
  },

  {
    name: "Tobacco Mandarin",
    brand: "Byredo",
    color: "pink",
    image: "../../ASSETS/Perfumes/Byredo_Tobacco Mandarin.jpg.jpg"
  },

  {
    name: "Vanille Antique",
    brand: "Byredo",
    color: "orange",
    image: "../../ASSETS/Perfumes/Byredo_Vanille Antique.jpg.jpg"
  },

  {
    name: "Pasha de Cartier",
    brand: "Cartier",
    color: "black",
    image: "../../ASSETS/Perfumes/Cartier_Pasha de Cartier.jpg.jpg"
  },

  {
    name: "Bleu de Chanel",
    brand: "Chanel",
    color: "blue",
    image: "../../ASSETS/Perfumes/Chanel_Bleu de Chanel.jpg.jpg"
  },

  {
    name: "Chance",
    brand: "Chanel",
    color: "green",
    image: "../../ASSETS/Perfumes/Chanel_Chance.jpg.jpg"
  },

  {
    name: "Coco Mademoiselle",
    brand: "Chanel",
    color: "pink",
    image: "../../ASSETS/Perfumes/Chanel_Coco Mademoiselle.jpg.jpg"
  },

  {
    name: "Coco Noir",
    brand: "Chanel",
    color: "black",
    image: "../../ASSETS/Perfumes/Chanel_Coco Noir.jpg.jpg"
  },

  {
    name: "Gabrielle Chanel Essence",
    brand: "Chanel",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Chanel_Gabrielle Chanel Essence.jpg.jpg"
  },

  {
    name: "No. 5 Leau",
    brand: "Chanel",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Chanel_No 5 Leau.jpg.jpg"
  },

  {
    name: "Play Green",
    brand: "Comme des Garcons",
    color: "clear",
    image: "../../ASSETS/Perfumes/Comme des Garcons_Play Green.jpg.jpg"
  },

  {
    name: "Original Vetiver",
    brand: "Creed",
    color: "green",
    image: "../../ASSETS/Perfumes/Creed_Original Vetiver.jpg.jpg"
  },

  {
    name: "Pure White",
    brand: "Creed",
    color: "clear",
    image: "../../ASSETS/Perfumes/Creed_Pure White.jpg.jpg"
  },

  {
    name: "Silver Mountain Water",
    brand: "Creed",
    color: "clear",
    image: "../../ASSETS/Perfumes/Creed_Silver Mountain Water.jpg.jpg"
  },

  {
    name: "Bobby",
    brand: "Dior",
    color: "pink",
    image: "../../ASSETS/Perfumes/Dior_Bobby.jpg.jpg"
  },

  {
    name: "Eau Sauvage",
    brand: "Dior",
    color: "green",
    image: "../../ASSETS/Perfumes/Dior_Eau Sauvage.jpg.jpg"
  },

  {
    name: "J'adore",
    brand: "Dior",
    color: "clear",
    image: "../../ASSETS/Perfumes/Dior_Jadore.jpg.jpg"
  },

  {
    name: "Kyoto",
    brand: "Diptyque",
    color: "pink",
    image: "../../ASSETS/Perfumes/Diptyque_Kyoto.jpg.jpg"
  },

  {
    name: "Orpheon",
    brand: "Diptyque",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Diptyque_Orpheon.jpg"
  },

  {
    name: "Light Blue",
    brand: "Dolce Gabbana",
    color: "blue",
    image: "../../ASSETS/Perfumes/Dolce Gabbana_Light Blue.jpg.jpg"
  },

  {
    name: "Acqua Di Gioia",
    brand: "Giorgio Armani",
    color: "green",
    image: "../../ASSETS/Perfumes/Giorgio Armani_Acqua di Gioia.jpg.jpg"
  },

  {
    name: "Ocean Di Gioia",
    brand: "Giorgio Armani",
    color: "blue",
    image: "../../ASSETS/Perfumes/Giorgio Armani_Ocean di Gioia.jpg.jpg"
  },

  {
    name: "1921",
    brand: "Gucci",
    color: "green",
    image: "../../ASSETS/Perfumes/Gucci_1921.jpg.jpg"
  },

  {
    name: "Guilty Black",
    brand: "Gucci",
    color: "green",
    image: "../../ASSETS/Perfumes/Gucci_Guilty Black.jpg.jpg"
  },

  {
    name: "Guilty Pour Femme",
    brand: "Gucci",
    color: "pink",
    image: "../../ASSETS/Perfumes/Gucci_Guilty Pour Femme.jpg.jpg"
  },

  {
    name: "Guilty",
    brand: "Gucci",
    color: "clear",
    image: "../../ASSETS/Perfumes/Gucci_Guilty.jpg.jpg"
  },

  {
    name: "Eau des Merveilles Bleue",
    brand: "Hermes",
    color: "blue",
    image: "../../ASSETS/Perfumes/Hermes_Eau des Merveilles Bleue.jpg.jpg"
  },

  {
    name: "Le Jardin de Monsieur Li",
    brand: "Hermes",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Hermes_Le Jardin de Monsieur Li.jpg.jpg"
  },

  {
    name: "Twilly",
    brand: "Hermes",
    color: "pink",
    image: "../../ASSETS/Perfumes/Hermes_Twilly.jpg.jpg"
  },

  {
    name: "Un Jardin Sur Le Toit",
    brand: "Hermes",
    color: "green",
    image: "../../ASSETS/Perfumes/Hermes_Un Jardin Sur Le Toit.jpg.jpg"
  },

  {
    name: "L'Eau d'Issey",
    brand: "Issey Miyake",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Issey Miyake.jpg.jpg"
  },

  {
    name: "Pure Nectar",
    brand: "Issey Miyake",
    color: "pink",
    image: "../../ASSETS/Perfumes/Issey Miyake_Pure Nectar.jpg.jpg"
  },

  {
    name: "Nashi Blossom",
    brand: "Jo Malone",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Jo Malone_Nashi Blossom.jpg.jpg"
  },

  {
    name: "Sakura Cherry Blossom",
    brand: "Jo Malone",
    color: "pink",
    image: "../../ASSETS/Perfumes/Jo Malone_Sakura Cherry Blossom.jpg.jpg"
  },

  {
    name: "Star Magnolia",
    brand: "Jo Malone",
    color: "clear",
    image: "../../ASSETS/Perfumes/Jo Malone_Star Magnolia.jpg.jpg"
  },

  {
    name: "Wood Sage Sea Salt",
    brand: "Jo Malone",
    color: "clear",
    image: "../../ASSETS/Perfumes/Jo Malone_Wood Sage Sea Salt.jpg.jpg"
  },

  {
    name: "Flower",
    brand: "Kenzo",
    color: "pink",
    image: "../../ASSETS/Perfumes/Kenzo_Flower.jpg.jpg"
  },

  {
    name: "Back to Black",
    brand: "Kilian",
    color: "black",
    image: "../../ASSETS/Perfumes/Kilian_Back to Black.jpg.jpg"
  },

  {
    name: "Good Girl Gone Bad",
    brand: "Kilian",
    color: "clear",
    image: "../../ASSETS/Perfumes/Kilian_Good Girl Gone Bad.jpg.jpg"
  },

  {
    name: "Love Don't Be Shy",
    brand: "Kilian",
    color: "orange",
    image: "../../ASSETS/Perfumes/Kilian_Love Dont Be Shy.jpg.jpg"
  },

  {
    name: "Vodka on the Rocks",
    brand: "Kilian",
    color: "blue",
    image: "../../ASSETS/Perfumes/Kilian_Vodka on the Rocks.jpg.jpg"
  },

  {
    name: "Passage",
    brand: "L Artisan Parfumeur",
    color: "black",
    image: "../../ASSETS/Perfumes/L Artisan Parfumeur_Passage.png.jpg"
  },

  {
    name: "Santal 33",
    brand: "Le Labo",
    color: "clear",
    image: "../../ASSETS/Perfumes/Le Labo_Santal 33.jpg.jpg"
  },

  {
    name: "Jazz Club",
    brand: "Maison Margiela",
    color: "orange",
    image: "../../ASSETS/Perfumes/Maison Margiela_Replica_Jazz Club.jpg.jpg"
  },

  {
    name: "Daisy Dream Daze",
    brand: "Marc Jacobs",
    color: "orange",
    image: "../../ASSETS/Perfumes/Marc Jacobs_Daisy Dream Daze.jpg.jpg"
  },

  {
    name: "Daisy Dream",
    brand: "Marc Jacobs",
    color: "blue",
    image: "../../ASSETS/Perfumes/Marc Jacobs_Daisy Dream.jpg.jpg"
  },

  {
    name: "Daisy Kiss",
    brand: "Marc Jacobs",
    color: "pink",
    image: "../../ASSETS/Perfumes/Marc Jacobs_Daisy Kiss.jpg.jpg"
  },

  {
    name: "Daisy",
    brand: "Marc Jacobs",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Marc Jacobs_Daisy.jpg.jpg"
  },

  {
    name: "724",
    brand: "Maison Francis Kurkjian",
    color: "clear",
    image: "../../ASSETS/Perfumes/MFK_724.jpg.jpg"
  },

  {
    name: "Aqua Celestia",
    brand: "Maison Francis Kurkjian",
    color: "blue",
    image: "../../ASSETS/Perfumes/MFK_Aqua Celestia.jpg.jpg"
  },

  {
    name: "Oud",
    brand: "Maison Francis Kurkjian",
    color: "blue",
    image: "../../ASSETS/Perfumes/MFK_Oud.jpg.jpg"
  },

  {
    name: "Rouge 540",
    brand: "Maison Francis Kurkjian",
    color: "pink",
    image: "../../ASSETS/Perfumes/MFK_Rouge 540.jpg.jpg"
  },

  {
    name: "Pink Bouquet",
    brand: "Moschino",
    color: "pink",
    image: "../../ASSETS/Perfumes/Moschino_Pink Bouquet.jpg.jpg"
  },

  {
    name: "Pink Fresh Couture",
    brand: "Moschino",
    color: "pink",
    image: "../../ASSETS/Perfumes/Moschino_Pink Fresh Couture.jpg.jpg"
  },

  {
    name: "Toy 2 Bubble Gum",
    brand: "Moschino",
    color: "pink",
    image: "../../ASSETS/Perfumes/Moschino_Toy 2 Bubble Gum.jpg.jpg"
  },

  {
    name: "Angel",
    brand: "Mugler",
    color: "blue",
    image: "../../ASSETS/Perfumes/Mugler_Angel.jpg.jpg"
  },

  {
    name: "For Her",
    brand: "Narciso Rodriguez",
    color: "black",
    image: "../../ASSETS/Perfumes/Narcisco Rodriguez_For Her.jpg.jpg"
  },

  {
    name: "Musc Noir Rose",
    brand: "Narciso Rodriguez",
    color: "pink",
    image: "../../ASSETS/Perfumes/Narcisco Rodriguez_Musc Noir Rose.jpg.jpg"
  },

  {
    name: "Pure Musc",
    brand: "Narciso Rodriguez",
    color: "clear",
    image: "../../ASSETS/Perfumes/Narcisco Rodriguez_Pure Musc.jpg.jpg"
  },

  {
    name: "Essence",
    brand: "Narciso Rodriguez",
    color: "clear",
    image: "../../ASSETS/Perfumes/Narciso Rodriguez_Essence.jpg.jpg"
  },

  {
    name: "Changing Constance",
    brand: "Penhaligon",
    color: "orange",
    image: "../../ASSETS/Perfumes/Penhaligon_Changing Constance.jpg.jpg"
  },

  {
    name: "Fox",
    brand: "Penhaligon",
    color: "pink",
    image: "../../ASSETS/Perfumes/Penhaligon_Fox.png.jpg"
  },

  {
    name: "Juniper Sling",
    brand: "Penhaligon",
    color: "clear",
    image: "../../ASSETS/Perfumes/Penhaligon_Juniper Sling.jpg.jpg"
  },

  {
    name: "Lily of the Valley",
    brand: "Penhaligon",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Penhaligon_Lily of the Valley.jpg.jpg"
  },

  {
    name: "The Coveted Duchess Rose",
    brand: "Penhaligon",
    color: "pink",
    image: "../../ASSETS/Perfumes/Penhaligon_The Coveted Duchess Rose.jpg.jpg"
  },

  {
    name: "The Impudent Cousin Matthew",
    brand: "Penhaligon",
    color: "green",
    image: "../../ASSETS/Perfumes/Penhaligon_The Impudent Cousin Matthew.jpg.jpg"
  },

  {
    name: "Candy",
    brand: "Prada",
    color: "orange",
    image: "../../ASSETS/Perfumes/Prada_Candy.jpg.jpg"
  },

  {
    name: "Luna Rossa",
    brand: "Prada",
    color: "black",
    image: "../../ASSETS/Perfumes/Prada_Luna Rossa.jpg.jpg"
  },

  {
    name: "Polo Black",
    brand: "Ralph Lauren",
    color: "black",
    image: "../../ASSETS/Perfumes/Ralph Lauren_Polo Black.jpg.jpg"
  },

  {
    name: "Romance",
    brand: "Ralph Lauren",
    color: "clear",
    image: "../../ASSETS/Perfumes/Ralph Lauren_Romance.jpg.jpg"
  },

  {
    name: "Serge Noire",
    brand: "Serge Lutens",
    color: "black",
    image: "../../ASSETS/Perfumes/Serge Lutens.png.jpg"
  },

  {
    name: "Fille de Berlin",
    brand: "Serge Lutens",
    color: "clear",
    image: "../../ASSETS/Perfumes/Serge Lutens_Fille de Berlin.jpg.jpg"
  },

  {
    name: "Bitter Peach",
    brand: "Tom Ford",
    color: "orange",
    image: "../../ASSETS/Perfumes/Tom Ford_Bitter Peach.jpg.jpg"
  },

  {
    name: "Black Orchid",
    brand: "Tom Ford",
    color: "black",
    image: "../../ASSETS/Perfumes/Tom Ford_Black Orchid.jpg.jpg"
  },

  
  {
    name: "Lost Cherry",
    brand: "Tom Ford",
    color: "pink",
    image: "../../ASSETS/Perfumes/Tom Ford_Lost Cherry.jpg.jpg"
  },

  {
    name: "Vanille Fatale",
    brand: "Tom Ford",
    color: "black",
    image: "../../ASSETS/Perfumes/Tom Ford_Vanille Fatale.jpg.jpg"
  },

  {
    name: "Embrace",
    brand: "Vera Wang",
    color: "green",
    image: "../../ASSETS/Perfumes/Vera Wang_Embrace.jpg.jpg"
  },

  {
    name: "Bright Crystal",
    brand: "Versace",
    color: "pink",
    image: "../../ASSETS/Perfumes/Versace_Bright Crystal.jpg.jpg"
  },

  {
    name: "Crystal Noir",
    brand: "Versace",
    color: "black",
    image: "../../ASSETS/Perfumes/Versace_Crystal Noir.jpg.jpg"
  },

  {
    name: "Dylan Turquoise",
    brand: "Versace",
    color: "blue",
    image: "../../ASSETS/Perfumes/Versace_Dylan Turquoise.jpg.jpg"
  },

  {
    name: "Eros Flame",
    brand: "Versace",
    color: "pink",
    image: "../../ASSETS/Perfumes/Versace_Eros Flame.png.jpg"
  },

  {
    name: "Eros Pour Femme",
    brand: "Versace",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Versace_Eros Pour Femme.jpg.jpg"
  },

  {
    name: "Eros",
    brand: "Versace",
    color: "blue",
    image: "../../ASSETS/Perfumes/Versace_Eros.jpg.jpg"
  },

  {
    name: "Yellow Diamond Intense",
    brand: "Versace",
    color: "yellow",
    image: "../../ASSETS/Perfumes/Versace_Yellow Diamond Intense.jpeg.jpg"
  },

  {
    name: "Black Opium",
    brand: "YSL",
    color: "black",
    image: "../../ASSETS/Perfumes/YSL_Black Opium.jpg.jpg"
  },

  {
    name: "Libre",
    brand: "YSL",
    color: "orange",
    image: "../../ASSETS/Perfumes/YSL_Libre.jpg.jpg"
  },

  {
    name: "Mon Paris",
    brand: "YSL",
    color: "pink",
    image: "../../ASSETS/Perfumes/YSL_Mon Paris.jpg.jpg"
  },

  {
    name: "Y",
    brand: "YSL",
    color: "black",
    image: "../../ASSETS/Perfumes/YSL_Y.jpg.jpg"
  }
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
    let store = document.createElement('p')
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