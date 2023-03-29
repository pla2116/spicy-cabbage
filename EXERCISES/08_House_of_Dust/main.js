let array_one = [
    "a house of wood",
    "a house of brick",
    "a house of broken dishes",
    "a house of discarded clothing",
    "a house of dust"
  ];
  
let array_two = [
    "among other houses",
    "among small hills",
    "among high montains",
    "by a river",
    "by an abandoned lake"
  ];
  
  // let randomElement = arrayName[Math.floor(Math.random()*arrayName.length)];
  
  function renderPoem() {
    // select random element from array 01
    let elementFromArrayOne = array_one[Math.floor(Math.random()*arrayName.length)];

    // select a random element from array 2
    let elementFromArrayTwo = array_two[Math.floor(Math.random()*arrayName.length)];

    // use querySelector to grab the div with a class of poem
    let poem = document.querySelector('.poem')

    // create a new element ... paragraph tag

    // add the text attribute

    // append that paragraph to the div with a class of poem
  }
  
  let btn = document.querySelector("button");
  btn.addEventListener("click", renderPoem);
  