import { filterSelect, sortData } from "./data.js";
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
//Data Lovers
const dataRickAndMorty = data.results.map((rickAndMorty) => { 
  const { id, name, status, species, type, gender, origin, location, image } =
    rickAndMorty; // saco grande
  const newDataRickAndMorty = { // saco chiquito = nuevo objeto 
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
//const dataSortByAlphabet = [...dataRickAndMorty]; 
//const dataSortByLessPopular = [...dataRickAndMorty];
/*const sortByAlphabet = (dataSortByAlphabet) => dataSortByAlphabet.sort((a, b) => {
  return a.name > b.name ? 1 : -1;
});
//const dataSortByAlphabetReverse = [...sortByAlphabet]; // se crea la data de reverse en base al resultado de sort 
const sortByAlphabetReverse = (dataSortByAlphabetReverse) => dataSortByAlphabetReverse.reverse((a,b)=> {
  return a. name > b.name ? 1 : -1 ;
}); 
const sortByLessPopular = (dataSortByLessPopular) => dataSortByLessPopular.sort((a, b) => {
  return a.id < b.id ? 1 : -1;
});*/ 

/*const sortBy = document.querySelector("#sortBy");
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
  });*/


//filter
/*const filterSelect = (dataArray, property, value) => {//refactorizacion funcion filter general-autobus de filter
   return dataArray.filter(cardFilter => cardFilter[property] === value)
};*/ //Export

/*const genderSelect = document.querySelector("#genderSelect");
const speciesSelect = document.querySelector("#speciesSelect");
const statusSelect = document.querySelector("#statusSelect");

 genderSelect.addEventListener("change", () => { // La data, la propiedad de cada objeto y la selecion de las opciones mediante el indice, y el valor.
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
});*/


//filtro del filtro
const buttonClear = document.querySelector("#buttonClear");
buttonClear.style.display = "none";

const selectAll = document.querySelectorAll("select"); // Evocamos todos los elementos select (querySñectprAll se puede llamar todas las clases y elementos)
let dataSelectAll = [...dataRickAndMorty]; // creamos una copia de la data (spread operator-operador de propagacion)
  selectAll.forEach((selector) => {    // va a recorrer los select
    selector.addEventListener("change", (multiEvent) => {  // la funcion contiene, el evento y la propiedad del select que necesitamos
      if(multiEvent.target.name !== "sortBy" && multiEvent.target.value !== "") { //van a entrar todos los select, excepto el de sort y los active.
        /*const filterSelectAll = dataSelectAll.filter((newFilter) => {
          //return newFilter[multiEvent.target.name] === multiEvent.target.value;
          console.log( multiEvent.target.name === multiEvent.target.value )
        })*/
        const {name, value} = multiEvent.target; //  Obtenemos atributos de select que queremos usar
        const dataFilteredSelectAll =  filterSelect(dataSelectAll, name, value); // Aplicamos el filtro general a la data y a las atributos de select
        buttonClear.style.display = "";
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
      } else if (multiEvent.target.value !== "") {// ademas si el value o valo es diferente a string vacio que son los active , que tenga la accion de evocar la data original.
        buttonClear.style.display = "";
        dataCharacters = [...dataRickAndMorty];
      }
      
      if (dataSelectAll.length > 0) {
        cardRickAndMorty(dataSelectAll);
      } else {
        containerFlex.innerHTML = "<span style='color: white'>Nobody exists on purpose. Nobody belongs anywhere. Like what you looking for...Burp</span>";
      }
    });
  });

  buttonClear.addEventListener("click", () => {
    dataSelectAll = [...dataRickAndMorty];
    selectAll.forEach((selector) => {// reinicia el selector a select active
      selector.value = "";
    });
    buttonClear.style.display = "none";
    cardRickAndMorty(dataSelectAll);
  });

  var ctx= document.getElementById("genderChart").getContext("2d");
        var myChart= new Chart(ctx,{
            type:'doughnut',
            data:{
                labels:['Female','Male','Genderless','unknown'],
                datasets:[{
                        label:'Num datos',
                        data:[73,372,6,42],
                        backgroundColor:[
                            'rgb(222, 53, 222)',
                            'rgb(53, 53, 222)',
                            'rgb(53, 222, 53)',
                            'rgb(245, 239, 239)'
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
          var ctx= document.getElementById("speciesChart").getContext("2d");
          var myChart= new Chart(ctx,{
              type:'doughnut',
              data:{
                  labels:['Alien','Animal','Cronenberg', 'Disiese','Human', 'Humanoid','Mytholog','Parasite','Poopybutthole','Robot','unknown','Vampire'], color:'rgb(66, 134, 244)', 
                  datasets:[{
                          label:'Datos',
                          data:[132,17,8,6,244,53,7,1,6,11,5,3],
                          backgroundColor:[
                              'rgb(100, 228, 62)',
                              'rgb(184, 140, 64)',
                              'rgb(235, 189, 25)',
                              'rgb(237, 128, 124)',
                              'rgb(126, 230, 190)',
                              'rgb(112, 98, 243)',
                              'rgb(121, 29, 164)',
                              'rgb(247, 208, 12)',
                              'rgb(206, 199, 165)',
                              'rgb(135, 133, 125)',
                              'rgb(245, 239, 239)',
                              'rgb(230, 9, 9)',
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
            var ctx= document.getElementById("statusChart").getContext("2d");
            var myChart= new Chart(ctx,{
                type:'doughnut',
                data:{
                    labels:['Alive','Dead','unknown'],
                    datasets:[{
                            label:'Num datos',
                            data:[281,147,65],
                            backgroundColor:[
                                'rgb(142, 220, 94)',
                                'rgb(0, 0, 0)',
                                'rgb(245, 239, 239)'
                            ]
                    }]
                },
                options:{
                  plugins: {
                    title: {
                        display: true,
                        text: 'Status',
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