import { example } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

console.log(example, data);

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

/* const filterGenderFemale = dataRickAndMorty.filter(
  (genderFilter) => genderFilter.gender === "Female"
);
const filterGenderMale = dataRickAndMorty.filter(
  (genderFilter) => genderFilter.gender === "Male"
);
const filterGenderUnknown = dataRickAndMorty.filter(
  (genderFilter) => genderFilter.gender === "unknown"
);

const filterStatusAlive = dataRickAndMorty.filter(
  (statusFilter) => statusFilter.status === "Alive"
);
const filterStatusDead = dataRickAndMorty.filter(
  (statusFilter) => statusFilter.status === "Dead"
);
const filterStatusUnknown = dataRickAndMorty.filter(
  (statusFilter) => statusFilter.status === "unknown"
);

const filterSpeciesAlien = dataRickAndMorty.filter(
  (speciesFilter) => speciesFilter.species === "Alien"
);
const filterSpeciesAnimal = dataRickAndMorty.filter(
  (speciesFilter) => speciesFilter.species === "Animal"
);
const filterSpeciesCronenberg = dataRickAndMorty.filter(
  (speciesFilter) => speciesFilter.species === "Cronenberg"
);
const filterSpeciesDisease = dataRickAndMorty.filter(
  (speciesFilter) => speciesFilter.species === "Disease"
);
const filterSpeciesHuman = dataRickAndMorty.filter(
  (speciesFilter) => speciesFilter.species === "Human"
);
const filterSpeciesHumanoid = dataRickAndMorty.filter(
  (speciesFilter) => speciesFilter.species === "Humanoid"
);
const filterSpeciesMytholog = dataRickAndMorty.filter(
  (speciesFilter) => speciesFilter.species === "Mytholog"
);
const filterSpeciesParasite = dataRickAndMorty.filter(
  (speciesFilter) => speciesFilter.species === "Parasite"
);
const filterSpeciesPoopybutthole = dataRickAndMorty.filter(
  (speciesFilter) => speciesFilter.species === "Poopybutthole"
);
const filterSpeciesRobot = dataRickAndMorty.filter(
  (speciesFilter) => speciesFilter.species === "Robot"
);
const filterSpeciesUnknown = dataRickAndMorty.filter(
  (speciesFilter) => speciesFilter.species === "unknown"
);
const filterSpeciesVampire = dataRickAndMorty.filter(
  (speciesFilter) => speciesFilter.species === "Vampire"
);*/

const dataSortByName = [...dataRickAndMorty];
const dataSortByLessPopular = [...dataRickAndMorty];
const sortByName = dataSortByName.sort((a, b) => {
  return a.name > b.name ? 1 : -1;
});
const sortByLessPopular = dataSortByLessPopular.sort((a, b) => {
  return a.id < b.id ? 1 : -1;
}); 

//let dataReturnFilter = dataRickAndMorty;//cambia de valor segun resultado de cada select
//console.log(dataReturnFilter.length);
const filterSelect = (dataArray, property, value) => {
   return dataArray.filter(cardFilter => cardFilter[property] === value);
};

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
//genderSelect.addEventListener("change", (select) => {
  // switch (select.target.value) {
  //   case "Female":
  //     cardRickAndMorty(filterGenderFemale);
  //     break;
  //   case "Male":
  //     cardRickAndMorty(filterGenderMale);
  //     break;
  //   case "unknown":
  //     cardRickAndMorty(filterGenderUnknown);
  //     break;

  //   default:
  //     break;
  // }
//});
/*speciesSelect.addEventListener("change", (select) => {
  switch (select.target.value) {
    case "Alien":
      cardRickAndMorty(filterSpeciesAlien);
      break;
    case "Animal":
      cardRickAndMorty(filterSpeciesAnimal);
      break;
    case "Cronenberg":
      cardRickAndMorty(filterSpeciesCronenberg);
      break;
    case "Disease":
      cardRickAndMorty(filterSpeciesDisease);
      break;
    case "Human":
      cardRickAndMorty(filterSpeciesHuman);
      break;
    case "Humanoid":
      cardRickAndMorty(filterSpeciesHumanoid);
      break;
    case "Mytholog":
      cardRickAndMorty(filterSpeciesMytholog);
      break;
    case "Parasite":
      cardRickAndMorty(filterSpeciesParasite);
      break;
    case "Poopybutthole":
      cardRickAndMorty(filterSpeciesPoopybutthole);
      break;
    case "Robot":
      cardRickAndMorty(filterSpeciesRobot);
      break;
    case "unknown":
      cardRickAndMorty(filterSpeciesUnknown);
      break;
    case "Vampire":
      cardRickAndMorty(filterSpeciesVampire);
      break;

    default:
      break;
  }
});*/
/*statusSelect.addEventListener("change", (select) => {
  switch (select.target.value) {
    case "Alive":
      cardRickAndMorty(filterStatusAlive);
      break;
    case "Dead":
      cardRickAndMorty(filterStatusDead);
      break;
    case "unknown":
      cardRickAndMorty(filterStatusUnknown);
      break;

    default:
      break;
  }
});*/
const sortBy = document.querySelector("#sortBy")
sortBy.addEventListener("change", (select) => {
    switch (select.target.value) {
      case "all":
        cardRickAndMorty(dataRickAndMorty);
        break;
      case "alphabet":
        cardRickAndMorty(sortByName);
        break;
      case "lessPopular":
        cardRickAndMorty(sortByLessPopular);
        break;
  
      default:
        break;
    }
  });