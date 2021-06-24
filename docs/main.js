import { filterSelect, sortData, computeStats } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

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
const charts = document.querySelector("#charts");
const facts = document.querySelector("#facts");
const homeBtn = document.querySelector("#homeBtn");
const charactersCardsBtn = document.querySelector("#charactersCardsBtn");
const charactersChartsBtn = document.querySelector("#charactersChartsBtn");
const factsBtn = document.querySelector("#factsBtn");
const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
const containerFlex = document.querySelector(".containerFlex");

charts.style.display = "none";
characters.style.display = "none";
scrollToTopBtn.style.display = "none";
facts.style.display = "none";

homeBtn.addEventListener("click", () => {
  home.style.display = "";
  characters.style.display = "none";
  scrollToTopBtn.style.display = "none";
  charts.style.display = "none";
  facts.style.display = "none";
});

charactersCardsBtn.addEventListener("click", () => {
  home.style.display = "none";
  characters.style.display = "";
  scrollToTopBtn.style.display = "";
  charts.style.display = "none";
  facts.style.display = "none";
});

charactersChartsBtn.addEventListener("click", () => {
  home.style.display = "none";
  characters.style.display = "none";
  scrollToTopBtn.style.display = "none";
  charts.style.display = "";
  facts.style.display = "none";
});

factsBtn.addEventListener("click", () => {
  home.style.display = "none";
  characters.style.display = "none";
  scrollToTopBtn.style.display = "none";
  charts.style.display = "none";
  facts.style.display = "";
});

//scrollToTop
window.onscroll = () => scrollFunction();
const scrollFunction = () => {
  if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
    scrollToTopBtn.style.display = "";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}
const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
scrollToTopBtn.addEventListener("click", scrollToTop);

//Data Lovers
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
cardRickAndMorty(dataRickAndMorty);

//filter multiselect
const buttonClear = document.querySelector("#buttonClear");
const percentage = document.querySelector("#percentage");
buttonClear.style.display = "none";

const selectAll = document.querySelectorAll("select"); 
let dataSelectAll = [...dataRickAndMorty];
  selectAll.forEach((selector) => {
    selector.addEventListener("change", (multiEvent) => {
      if(multiEvent.target.name !== "sortBy" && multiEvent.target.value !== "") {
        const {name, value} = multiEvent.target; 
        const dataFilteredSelectAll =  filterSelect(dataSelectAll, name, value);
        buttonClear.style.display = "";
        percentage.style.display = "";
        dataSelectAll = [...dataFilteredSelectAll];
      } else if (multiEvent.target.name === "sortBy" && multiEvent.target.value === "alphabet") {
        buttonClear.style.display = "";
        dataSelectAll = sortData.sortByAlphabet(dataSelectAll);
      } else if (multiEvent.target.name === "sortBy" && multiEvent.target.value === "alphabetReverse") {
        buttonClear.style.display = "";
        dataSelectAll = sortData.sortByAlphabetReverse(dataSelectAll);
      } else if (multiEvent.target.name === "sortBy" && multiEvent.target.value === "lessPopular") {
        buttonClear.style.display = "";
        dataSelectAll = sortData.sortByLessPopular(dataSelectAll);
      } else if (multiEvent.target.value !== "") {
        buttonClear.style.display = "";
        dataSelectAll = [...dataRickAndMorty];
      }
      
      if (dataSelectAll.length > 0) {
        percentage.innerHTML = computeStats.percentageFilter(dataSelectAll) + "%";
        cardRickAndMorty(dataSelectAll);
      } else {
        containerFlex.innerHTML = "<span style='color: yellow; font-family: monospace; font-size: 2rem'>Nobody exists on purpose. Nobody belongs anywhere."
                                  +  "Like what you looking for...Burp. Try something else!</span>";
      }
    });
  });

  buttonClear.addEventListener("click", () => {
    dataSelectAll = [...dataRickAndMorty];
    selectAll.forEach((selector) => {
      selector.value = "";
    });
    buttonClear.style.display = "none";
    percentage.style.display = "none";
    cardRickAndMorty(dataSelectAll);
  });

//charts
const genderDataChart = computeStats.getDataProperty(dataRickAndMorty, "gender");
const speciesDataChart = computeStats.getDataProperty(dataRickAndMorty, "species");
const statusDataChart = computeStats.getDataProperty(dataRickAndMorty, "status");


const genderChart= document.getElementById("genderChart").getContext("2d");
new Chart(genderChart,{
    type:'doughnut',
    data:{
        labels:genderDataChart.propertyKeys,
        datasets:[{
                label:'Num datos',
                data:genderDataChart.propertyValues,
                backgroundColor:[
                    'rgb(106, 211, 235)',
                    'rgb(237, 69, 209)',
                    'rgb(247, 247, 99)',
                    'rgb(85, 212, 109)'
                ]
        }]
    },
    options:{
      plugins: {
        title: {
            display: true,
            text: 'Gender',
            color: 'rgb(230, 230, 9)',
        }
    },
        scales:{
            yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
            }]
        }
    }
  });
const speciesChart= document.getElementById("speciesChart").getContext("2d");
new Chart(speciesChart,{
  type:'doughnut',
  data:{
      labels:speciesDataChart.propertyKeys, color:'rgb(66, 134, 244)', 
      datasets:[{
              label:'Datos',
              data:speciesDataChart.propertyValues, color:'rgb(66, 134, 244)', 
              backgroundColor:[
                  'rgb(96, 79, 204)',
                  'rgb(85, 212, 109)',
                'rgb(247, 247, 99)',
                'rgb(237, 69, 209)',
                'rgb(106, 211, 235)',
                  'rgb(250, 115, 95)',
                  'rgb(34, 18, 245)',
                  'rgb(60, 250, 147)',
                  'rgb(202, 252, 73)',
                  'rgb(250, 60, 112)',
                  'rgb(250, 85, 60)',
                  'rgb(230, 20, 1)',
              ]
      }]
  },
  options:{
    plugins: {
      title: {
          display: true,
          text: 'Species',
          color: 'rgb(230, 230, 9)',
      }
  },
      scales:{
          yAxes:[{
                  ticks:{
                      beginAtZero:true
                  }
          }]
      }
  }
});
const statusChart= document.getElementById("statusChart").getContext("2d");
new Chart(statusChart,{
    type:'doughnut',
    data:{
        labels:statusDataChart.propertyKeys,
        datasets:[{
                label:'Num datos',
                data:statusDataChart.propertyValues,
                backgroundColor:[
                    'rgb(0, 250, 141)',
                    'rgb(245, 239, 239)',
                    'rgb(0, 0, 0)'
                ]
        }]
    },
    options:{
      plugins: {
        title: {
            display: true,
            text: 'Status',
            color: 'rgb(230, 230, 9)',
            size: '50px'
        }
    },
        scales:{
            yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
            }]
        }
    }
  });
