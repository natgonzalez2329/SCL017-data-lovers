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
    home.style.display = "block";
    characters.style.display = "none";
    facts.style.display = "none";
});

charactersBtn.addEventListener("click", () => {
    home.style.display = "none";
    characters.style.display = "block";
    facts.style.display = "none";
});

factsBtn.addEventListener("click", () => {
    home.style.display = "none";
    characters.style.display = "none";
    facts.style.display = "block";
});

//data export

/*"id": 
"name": 
"status": 
"species": 
"type":
"gender":
"origin": 
"location": 
"image":
"episode":*/
//console.log (data.results);

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
    nameStatusCharacter.innerHTML = name + "-" + status;
    let speciesCharacter = document.createElement("p");
    speciesCharacter.className = "speciesCharacter";
    speciesCharacter.innerHTML = species;
    let typeCharacter = document.createElement("p");
    typeCharacter.className = "typeCharacter";
    typeCharacter.innerHTML = typeValue;
    let genderCharacter = document.createElement("p");
    genderCharacter.className = "genderCharacter";
    genderCharacter.innerHTML = gender;
    let originCharacter = document.createElement("p");
    originCharacter.className = "originCharacter";
    originCharacter.innerHTML = originName;
    let locationCharacter = document.createElement("p");
    locationCharacter.className = "locationCharacter";
    locationCharacter.innerHTML = locationName;
    
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

//sortBy
const sortByName = dataRickAndMorty.sort((a,b) => {
    return (a.name > b.name) ? 1 : -1;
});
console.log(sortByName);
const sortByLessPopular = dataRickAndMorty.sort((a,b) => {
    return (a.id < b.id) ? 1 : -1;
});
console.log(sortByLessPopular);
