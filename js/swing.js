function controlarBalanco() {
  let balanco = document.querySelector("#balanco");
  balanco.innerHTML = renderBalanco();

  retornaBalanco();
}

function renderBalanco() {
  let template = `<h3 style="text-align: center;">Balanço</h3>
  <input class="balancoEditor" id=pannerSlider type="range" min="-1" max="1" step="0.1" value=0/>`;
  return template;
}


function retornaBalanco() {
  let Context = AudioContext || webkitAudioContext;
  
  let audioContext = new Context();
  
  let playerPanner = document.querySelector("#player");
  let pannerSlider = document.querySelector("#pannerSlider");
  
  playerPanner.addEventListener("play", () => audioContext.resume());
  
  let media = audioContext.createMediaElementSource(playerPanner);
  
  let pannerNode = audioContext.createStereoPanner();
  media.connect(pannerNode);
  pannerNode.connect(audioContext.destination);
  
  pannerSlider.oninput = function(evt) {
    pannerNode.pan.value = evt.target.value;
  }
}