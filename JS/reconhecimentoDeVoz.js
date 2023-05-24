 
 const Elementochute = document.getElementById('chute');

 
 window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
 const recognition = new SpeechRecognition();
 recognition.lang = 'pt-Br';
 recognition.start();


 recognition.addEventListener ('result', onSpeak);
 recognition.addEventListener('end', ()=> recognition.start());




function onSpeak (fala){
    const palpite = fala.results[0][0].transcript;
    exibeChuteNaTela(palpite);
    validaNumero(palpite)

}

function exibeChuteNaTela(chute){
    Elementochute.innerHTML = `
    <div> Você disse:</div>
       <span id="box">${chute}</span>
    `

}
