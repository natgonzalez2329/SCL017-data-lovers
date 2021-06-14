import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", () => {
    menu.classList.toggle("show");
});

const subMenuBtns = document.querySelectorAll(".submenu-btn");
subMenuBtns.forEach((subMenuBtn) => {
    subMenuBtn.addEventListener("click", () => {
        if(window.innerWidth < 800){
           const subMenu = subMenuBtn.nextElementSibling;
           const height = subMenu.scrollHeight;

           if(subMenu.classList.contains("deploy")) {
             subMenu.classList.remove("deploy");
             subMenu.removeAttribute("style");
           }else {
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

const dataRickAndMorty = data.results.map(rickAndMorty => {
    const { id, name, status, species, type, gender, origin, location, image } = rickAndMorty;
    const newDataRickAndMorty = {
        id,
        name,
        status,
        species,
        type,
        gender,
        origin,
        location,
        image
    };
    return newDataRickAndMorty;
});

dataRickAndMorty.forEach((card) => {
    const {id, name, status, species, type, gender, origin, location, image } = card;
    const typeValue = type != "" ? type : "Unknown";
    const originName = origin.name;
    const locationName = location.name;
    let containerCharacterCard = document.createElement("div");
    containerCharacterCard.className = "container__character-card";
    containerCharacterCard.id = `${name.replace(" ","").toLocaleLowerCase()}`;
    containerCharacterCard.innerHTML;
    let characterCard= document.createElement("article");
    characterCard.className = "character-card"
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
   
    characters.appendChild(containerCharacterCard);
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

const filterGenderFemale = dataRickAndMorty.filter((genderFilter) =>  genderFilter.gender === "Female");
const filterGenderMale = dataRickAndMorty.filter((genderFilter) =>  genderFilter.gender ===  "Male");
const filterGenderUnknown = dataRickAndMorty.filter((genderFilter) =>  genderFilter.gender === "unknown");
//console.log(filterGenderFemale);
//console.log(filterGenderMale);
//console.log(filterGenderUnknown);
const filterStatusAlive = dataRickAndMorty.filter((statusFilter) =>  statusFilter.status === "Alive");
const filterStatusDead = dataRickAndMorty.filter((statusFilter) =>  statusFilter.status === "Dead");
const filterStatusUnknown = dataRickAndMorty.filter((statusFilter) =>  statusFilter.status === "unknown");
//console.log(filterStatusAlive);
//console.log(filterStatusDead);
//console.log(filterStatusUnknown);
const filterSpeciesAlien = dataRickAndMorty.filter((speciesFilter) =>  speciesFilter.species === "Alien");
const filterSpeciesAnimal = dataRickAndMorty.filter((speciesFilter) =>  speciesFilter.species === "Animal");
const filterSpeciesCronenberg = dataRickAndMorty.filter((speciesFilter) =>  speciesFilter.species === "Cronenberg");
const filterSpeciesDisease = dataRickAndMorty.filter((speciesFilter) =>  speciesFilter.species === "Disease");
const filterSpeciesHuman = dataRickAndMorty.filter((speciesFilter) =>  speciesFilter.species === "Human");
const filterSpeciesHumanoid  = dataRickAndMorty.filter((speciesFilter) =>  speciesFilter.species === "Humanoid");
const filterSpeciesMytholog = dataRickAndMorty.filter((speciesFilter) =>  speciesFilter.species === "Mytholog");
const filterSpeciesParasite = dataRickAndMorty.filter((speciesFilter) =>  speciesFilter.species === "Parasite");
const filterSpeciesPoopybutthole = dataRickAndMorty.filter((speciesFilter) =>  speciesFilter.species === "Poopybutthole");
const filterSpeciesRobot = dataRickAndMorty.filter((speciesFilter) =>  speciesFilter.species === "Robot");
const filterSpeciesUnknown = dataRickAndMorty.filter((speciesFilter) =>  speciesFilter.species === "unknown");
const filterSpeciesVampire = dataRickAndMorty.filter((speciesFilter) =>  speciesFilter.species === "Vampire");
//console.log(filterSpeciesAlien);
//console.log(filterSpeciesAnimal);
//console.log(filterSpeciesCronenberg);
//console.log(filterSpeciesDisease);
//console.log(filterSpeciesHuman);
//console.log(filterSpeciesHumanoid);
//console.log(filterSpeciesMytholog);
//console.log(filterSpeciesParasite);
//console.log(filterSpeciesPoopybutthole);
//console.log(filterSpeciesRobot);
//console.log(filterSpeciesUnknown);
//console.log(filterSpeciesVampire);

const dataSortByName = [...dataRickAndMorty];
const dataSortByLessPopular = [...dataRickAndMorty];
const sortByName = dataSortByName.sort((a,b) => {
    return (a.name > b.name) ? 1 : -1;
});
const sortByLessPopular = dataSortByLessPopular.sort((a,b) => {
    return (a.id < b.id) ? 1 : -1;
});
console.log(sortByName);
console.log(sortByLessPopular);

