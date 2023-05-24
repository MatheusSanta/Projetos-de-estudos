let menorValor = 1
let maiorValor = 1000;

const numeroAleatorio = geraNumero ();
console.log(numeroAleatorio)

let elementoMenor = document.getElementById('menor-valor')
let elementoMaior = document.getElementById('maior-valor');

let box = document.getElementById('box');

let botaoJogar = document.getElementById('botaoJogar');


elementoMenor.innerHTML = 1;
elementoMaior.innerHTML = 1000;







function geraNumero (){
    return parseInt(Math.random() * maiorValor + 1);
};