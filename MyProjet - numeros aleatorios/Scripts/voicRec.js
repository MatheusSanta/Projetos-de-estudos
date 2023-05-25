
// variável da Div onde serão inseridos os valores
let elementoChute = document.getElementById('chute');
// Parte do API de reconhecimento de voz
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br', 'us-EN';
recognition.start();

recognition.addEventListener('result', aoFalar);
recognition.addEventListener('end', ()=>recognition.start());

function aoFalar (fala){
    let palpite = fala.results[0][0].transcript;
    escreveFala(palpite);
    validaChute(palpite);

}

function escreveFala (audio){
    elementoChute.innerHTML = `<div>Você disse: </div>
    <span id="box" class="num-inicial"> ${audio} </span>`
}