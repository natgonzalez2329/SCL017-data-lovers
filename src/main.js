import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


let leading = 1;
viewSlider(leading);

function nextSlider(n){
viewSlider(leading+=n);
}


function viewSlider(n){
    let i;
    let slider = document.getElementsByClassName("my-slider");
   
setInterval (function time(){
    viewSlider(leading + 1)
},4000);

    if( n > slider.lenght){
        leading = 1;
    }
    if (n < 1){
        leading= slider.lenght();
    }
 for(i = 0; i < slider,length; i++){
     slider[i].style.display = "none"
 }
    
    slider[leading-1].style.display = "block";

}
