function validaChute (chute){

    let numero =+ chute;

    if(numIsNan(numero)){
        if(chute.toUpperCase()==='GAME OVER'){
            document.body.innerHTML = `<h2>GAME OVER</h2>
            <button id="botaoJogar">Jogue Novamente</button>`

            let botao = document.getElementById('botaoJogar');
            botao.addEventListener('click', ()=>{
                location.reload();

            
        })}else{
        elementoChute.innerHTML += `
           <div> O valor acima é inválido</div>
        `
    }}
    numCorreto(numero);
    outOfScope(numero);
    dicaMaior (numero);
    dicaMenor(numero);

    return chute
}

function numIsNan (numero) {
    return Number.isNaN(numero)
}

function outOfScope (numero){
    if(numero>1000 || numero < 1){
        elementoChute.innerHTML += `<div>O número dito deve estar entre <span class="num-inicial"> ${menor}</span> e <span class="num-inicial">${maior}</span></div>`
    } 

    return
}

function dicaMenor (numero){
    if(numero>numAleatorio){
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>'
    }

    return 

}
function dicaMaior (numero){
    if (numero<numAleatorio){
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>'
    }

    return
    
}
function numCorreto (numero){
    if(numero === numAleatorio){
            document.body.innerHTML = `<h2>Acertou Miserável!!
            !<br> O número secreto era <span class="num-inicial"> ${numero}</span> </h2>
            <button id="botaoJogar">Jogue Novamente</button>`

            let botao = document.getElementById('botaoJogar');
            botao.addEventListener('click', ()=>{
                location.reload();
            })   
        }
    }
