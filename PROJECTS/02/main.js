let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
}

const perfumes = [
    {
      name: "Mandorlo di Sicilia",
      color: "blue",
      image:
        "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
    },
    {
      name: "Acqua Di Gio",
      color: "orange",
      image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
    }
  ];