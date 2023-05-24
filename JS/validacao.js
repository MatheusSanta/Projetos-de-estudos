function validaNumero (chute){
    const numero = +chute;
    if(verificaEntrada(numero)){
        Elementochute.innerHTML += '<div>O valor é inválido!</div>'
        return
    }
    if (verificaMaiorMenor(numero)) {
       Elementochute.innerHTML+= `
        <div>O valor deve ser entre ${menorValor} e ${maiorValor}</div>
       `
       return
    }
    if (numero === numeroAleatorio){
        document.body. innerHTML = `
            <h2>Acertou Miserável!!!!</h2>
            <h3>O número era <span class="num-inicial"> ${numeroAleatorio} </span></h3>
            <br>
            <button id="botaoJogar">Clique aqui para jogar novamente</button>
        `
        let botaoJogar = document.getElementById('botaoJogar');

        botaoJogar.addEventListener('click',()=>{
            document.location.reload();
        })

    } 

    numeroMaior(numero);
    numeroMenor(numero);


}

function verificaEntrada(numero) {
    return Number.isNaN(numero);
}

function verificaMaiorMenor (numero){       
    return numero > maiorValor || numero < menorValor 
}
function numeroMaior (numero) {
    if(numero<1000 && numero>numeroAleatorio)
    Elementochute.innerHTML += '<div>O número secreto é menor </div>'
    return
}
function numeroMenor (numero) {
    if(numero>1 && numero<numeroAleatorio)
    Elementochute.innerHTML += '<div>O número secreto é maior </div>'
    return 
}
