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
    const { id, name, status, species, type, gender, origin, location, image, episode } = rickAndMorty;
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
        episode
    };
    console.log(newDataRickAndMorty);
    return newDataRickAndMorty;
});