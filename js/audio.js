
let canvas;
let canvasContext;
let analyser;
let width;
let height;
let bufferLenght;
let dataArray;
let audioContext;

const tipoTempo = dominioTempo;
const tipoFrequencia = dominioFrequencia;

function funcao() {
 var audioCtx = AudioContext || webkitAudioContext;
 var audioContext = new audioCtx();

 var mediaElement = document.querySelector("#player");

 canvas = document.querySelector("#myCanvas");
 canvasContext = canvas.getContext("2d");

 width = canvas.width;
 height = canvas.height;

 var media = audioContext.createMediaElementSource(mediaElement);
 analyser = audioContext.createAnalyser();

 analyser.fftSize = 1024;

 bufferLenght = analyser.frequencyBinCount;

 dataArray = new Uint8Array(bufferLenght);

 media.connect(analyser);
 analyser.connect(audioContext.destination);
}

function dominioTempo() {
 canvasContext.fillstyle = "black";
 canvasContext.fillRect(0,0,width,height);
  analyser.getByteTimeDomainData(dataArray);//pegando bytes do audio pra preencher o vetor dataArray

  canvasContext.lineWidth = 2;
  canvasContext.strokeStyle = "#16c7ff";

  canvasContext.beginPath();//iniciar o desenho do grafico
  let sliceWidth = width / bufferLenght; //a distancia de cada um dos pontos
  let x = 0;

  for(let i = 0; i < bufferLenght; i++){
    let v  = dataArray[i] / 255;
    let y = v * height;// vai escalonar o valor do bite de forma que apresente no espaço disponivel
    if(i===0){
      canvasContext.moveTo(x,y);
    }else{
      canvasContext.lineTo(x,y);      
    }
    x += sliceWidth;
  }
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  canvasContext.stroke();
  requestAnimationFrame(dominioTempo)
}

function dominioFrequencia() {
  canvasContext.fillStyle = "black";
  canvasContext.fillRect(0, 0, width, height);
  analyser.getByteFrequencyData(dataArray);
  let barWidth = width / bufferLenght;
  let x = 0;

  for (let i = 0; i < bufferLenght; i++) {
    let v = dataArray[i]/255;
    let y = v * height;
    canvasContext.fillStyle="#16c7ff";
    //canvasContext.fillRect(x, height/2, barWidth, -y);
    //canvasContext.fillRect(x, height/2, barWidth, y);
    canvasContext.fillRect(x, height - y, barWidth, y);
    x += barWidth + 1;
  }
  requestAnimationFrame(dominioFrequencia);
}