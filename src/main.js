import { example } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";
//console.log(example, data);

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
});

const subMenuBtns = document.querySelectorAll(".submenu-btn");
subMenuBtns.forEach((subMenuBtn) => {
  subMenuBtn.addEventListener("click", () => {
    if (window.innerWidth < 800) {
      const subMenu = subMenuBtn.nextElementSibling;
      const height = subMenu.scrollHeight;

      if (subMenu.classList.contains("deploy")) {
        subMenu.classList.remove("deploy");
        subMenu.removeAttribute("style");
      } else {
        subMenu.classList.add("deploy");
        subMenu.style.height = height + "px";
      }
    }
  });
});

const home = document.getElementById("home");
const characters = document.querySelector("#characters");
const facts = document.querySelector("#facts");
const homeBtn = document.querySelector("#homeBtn");
const charactersBtn = document.querySelector("#charactersBtn");
const factsBtn = document.querySelector("#factsBtn");
const containerFlex = document.querySelector(".containerFlex");

characters.style.display = "none";
facts.style.display = "none";

homeBtn.addEventListener("click", () => {
  home.style.display = "";
  characters.style.display = "none";
  facts.style.display = "none";
});

charactersBtn.addEventListener("click", () => {
  home.style.display = "none";
  characters.style.display = "";
  facts.style.display = "none";
});

factsBtn.addEventListener("click", () => {
  home.style.display = "none";
  characters.style.display = "none";
  facts.style.display = "";
});

const dataRickAndMorty = data.results.map((rickAndMorty) => {
  const { id, name, status, species, type, gender, origin, location, image } =
    rickAndMorty;
  const newDataRickAndMorty = {
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
  };
  return newDataRickAndMorty;
});

const cardRickAndMorty = (cardArray) => {
  containerFlex.innerHTML = "";
  cardArray.forEach((card) => {
    const { id, name, status, species, type, gender, origin, location, image } =
      card;
    const typeValue = type != "" ? type : "Unknown";
    const originName = origin.name;
    const locationName = location.name;
    let containerCharacterCard = document.createElement("div");
    containerCharacterCard.className = "container__character-card";
    containerCharacterCard.id = `${name.replace(" ", "").toLocaleLowerCase()}`;
    containerCharacterCard.innerHTML;
    let characterCard = document.createElement("article");
    characterCard.className = "character-card";
    characterCard.innerHTML;
    let imgCharacter = document.createElement("img");
    imgCharacter.className = "imgCharacter";
    imgCharacter.src = image;
    let contentCard = document.createElement("div");
    contentCard.className = "content__card";
    contentCard.innerHTML;
    let idCharacter = document.createElement("h3");
    idCharacter.className = "idCharacter";
    idCharacter.innerHTML = id;
    let nameStatusCharacter = document.createElement("h2");
    nameStatusCharacter.className = "nameStatusCharacter";
    nameStatusCharacter.innerHTML = name + " - " + status;
    let speciesCharacter = document.createElement("p");
    speciesCharacter.className = "speciesCharacter";
    speciesCharacter.innerHTML = "Specie: " + species;
    let typeCharacter = document.createElement("p");
    typeCharacter.className = "typeCharacter";
    typeCharacter.innerHTML = "Type: " + typeValue;
    let genderCharacter = document.createElement("p");
    genderCharacter.className = "genderCharacter";
    genderCharacter.innerHTML = "Gender: " + gender;
    let originCharacter = document.createElement("p");
    originCharacter.className = "originCharacter";
    originCharacter.innerHTML = "Origin: " + originName;
    let locationCharacter = document.createElement("p");
    locationCharacter.className = "locationCharacter";
    locationCharacter.innerHTML = "Location: " + locationName;

    containerFlex.appendChild(containerCharacterCard);
    containerCharacterCard.appendChild(characterCard);
    characterCard.appendChild(imgCharacter);
    characterCard.appendChild(contentCard);
    contentCard.appendChild(idCharacter);
    contentCard.appendChild(nameStatusCharacter);
    contentCard.appendChild(speciesCharacter);
    contentCard.appendChild(typeCharacter);
    contentCard.appendChild(genderCharacter);
    contentCard.appendChild(originCharacter);
    contentCard.appendChild(locationCharacter);
  });
};
cardRickAndMorty(dataRickAndMorty); //llenado inicial
//sort
const dataSortByAlphabet = [...dataRickAndMorty];
const dataSortByLessPopular = [...dataRickAndMorty];
const sortByAlphabet = dataSortByAlphabet.sort((a, b) => {
  return a.name > b.name ? 1 : -1;
});
const dataSortByAlphabetReverse = [...sortByAlphabet]; // se crea la data de reverse en base al resultado de sort 
const sortByAlphabetReverse = dataSortByAlphabetReverse.reverse((a,b)=> {
  return a. name > b.name ? 1 : -1 ;
}); 
const sortByLessPopular = dataSortByLessPopular.sort((a, b) => {
  return a.id < b.id ? 1 : -1;
}); 
    
//filter
const filterSelect = (dataArray, property, value) => {
   return dataArray.filter(cardFilter => cardFilter[property] === value)
}

//let kkk
const genderSelect = document.querySelector("#genderSelect");
const speciesSelect = document.querySelector("#speciesSelect");
const statusSelect = document.querySelector("#statusSelect");
genderSelect.addEventListener("change", () => {
  const filtered = filterSelect(dataRickAndMorty, "gender", genderSelect.options[genderSelect.selectedIndex].value);
    if (filtered.length > 0) {
       cardRickAndMorty(filtered);
    }
});

speciesSelect.addEventListener("change", () => {
  const filtered = filterSelect(dataRickAndMorty, "species", speciesSelect.options[speciesSelect.selectedIndex].value);
    if (filtered.length > 0) {
      cardRickAndMorty(filtered);
    }
});

statusSelect.addEventListener("change", () => {
  const filtered = filterSelect(dataRickAndMorty, "status", statusSelect.options[statusSelect.selectedIndex].value);
    if (filtered.length > 0) {
     cardRickAndMorty(filtered);
    }
});
/*
const newFilter =  (dataFilter) => {
   return cardRickAndMorty(filterGender, filterSpecies); 
};*/


//filtro del filtro

const buttonClear = document.querySelector("#buttonClear");
buttonClear.addEventListener("click", () => {
  cardRickAndMorty(dataRickAndMorty);
  selectAll.forEach((selector) => {
    selector.value = "";
  });
});

buttonClear.style.display = "none";

const selectAll = document.querySelectorAll("select");
let dataSelectAll = [...dataRickAndMorty];
const filterSelectAll = () => {
  let selected = [];
  selectAll.forEach((selector) => {
    selector.addEventListener("change", (multiEvent) => {
    }
    /*selector.addEventListener("change", (multiEvent) => {
      if(multiEvent.target.value !== "" && multiEvent.target.name !== "sortBy") {
        const filterSelectAll = dataSelectAll.filter((newFilter) => {
          //return newFilter[multiEvent.target.name] === multiEvent.target.value;
          console.log( multiEvent.target.name === multiEvent.target.value )
        })
        buttonClear.style.display = "";
        dataSelectAll = [...filterSelectAll];
        
      } else if (multiEvent.target.value === "alphabet" && multiEvent.target.name === "sortBy") {
        buttonClear.style.display = "";
        dataSelectAll = sortByAlphabet(dataSelectAll);
      } else if (multiEvent.target.value === "alphabetReverse" && multiEvent.target.name === "sortBy") {
        buttonClear.style.display = "";
        dataSelectAll = sortByAlphabetReverse(dataSelectAll);
      } else if (multiEvent.target.value === "lessPopular" && multiEvent.target.name === "sortBy") {
        buttonClear.style.display = "";
        dataSelectAll = sortByLessPopular(dataSelectAll);
      } else {
        buttonClear.style.display = "";
        dataCharacters = [...dataRickAndMorty];
      }
      
      
      if (dataSelectAll.length > 0) {
        cardRickAndMorty(dataSelectAll);
      } else {
        containerFlex.innerHTML = "<span style='color: white'>Nobody exists on purpose. Nobody belongs anywhere. Like what you looking for...Burp</span>";
      }
    });*/
  });
}
  






const sortBy = document.querySelector("#sortBy")
sortBy.addEventListener("change", (select) => {
    switch (select.target.value) {
      case "all":
        cardRickAndMorty(dataRickAndMorty);
        break;
      case "alphabet":
        cardRickAndMorty(sortByAlphabet);
        break;
        case "alphabetReverse":
          cardRickAndMorty(sortByAlphabetReverse);
          break;
      case "lessPopular":
        cardRickAndMorty(sortByLessPopular);
        break;
  
      default:
        break;
    }
  });