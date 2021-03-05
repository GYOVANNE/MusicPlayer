function controlarVolume() {
  let volume = document.querySelector("#volume");
  volume.innerHTML = renderVolume();
  retornaVolume();
}

function renderVolume() {
  let template = `<h3 style="text-align: center;">Volume</h3>
   <input id="gainSlider" type="range" min="0" max="2" step="0.1"/>`;
  return template;
}

function retornaVolume() {
  let context = AudioContext || webkitAudioContext;
  audioContext = new context();
  
  let gainExample = document.querySelector("#player");
  let gainSlider = document.querySelector("#gainSlider");
  
  gainExample.addEventListener("play", () => audioContext.resume());
  
  let gainMedia = audioContext.createMediaElementSource(gainExample);

  let gainNode = audioContext.createGain();
  
  gainMedia.connect(gainNode);
  gainNode.connect(audioContext.destination)
  
  
  gainSlider.oninput = function(evt) {
    gainNode.gain.value = evt.target.value;
  }
}