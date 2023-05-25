// Div onde aparecerão os números falados
//valores limites do jogo
let maior = 1000;
let menor = 1;
//
let numMaior = document.getElementById('maior-valor');
let numMenor = document.getElementById('menor-valor');

numMaior.innerHTML = maior;
numMenor.innerHTML = menor;

let numAleatorio = geraNumAleatorio();


function geraNumAleatorio (){
      return parseInt(Math.random() * maior+1)
}





