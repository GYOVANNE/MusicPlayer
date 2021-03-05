const elvisTrack01 = "./musics/1.1.mp3";
const elvisTrack02 = "./musics/1.2.mp3";
const elvisTrack03 = "./musics/1.3.mp3";
const  elvisTrack04 = "./musics/1.4.mp3";

const u2Track01 = "./musics/2.1.mp3";
const u2Track02 = "./musics/2.2.mp3";
const u2Track03 = "./musics/2.3.mp3";
const u2Track04 = "./musics/2.4.mp3";

const beatlesTrack01 = "./musics/3.1.mp3";
const beatlesTrack02 = "./musics/3.2.mp3";
const beatlesTrack03 = "./musics/3.3.mp3";
const beatlesTrack04 = "./musics/3.4.mp3";


function visualizarFrequencia(tipo){

	if(tipo == tipoTempo){
		requestAnimationFrame(dominioTempo);
	}
	else if(tipo == tipoFrequencia){
		requestAnimationFrame(dominioFrequencia);
	}
}

function exibirBotoes(){
	let botoes = document.querySelector("#botoes");
	botoes.innerHTML = renderBotoes();	
}

function clicou(musica) {
	let alerta = document.querySelector("#playerMusic");
	alerta.innerHTML = render(musica);
	let canvas = document.querySelector("#canvas");
	canvas.innerHTML = renderCanvas();
	funcao();
	controlarVolume();
	controlarBalanco();
	exibirBotoes();
}

function render(musica) {
	let template = `<audio id="player" class="audio" controls crossorigin="anonymous" autoplay="true">
	<source src="${musica}"></source>
	</audio>
	`;
	return template;
}
function renderCanvas() {
	let template = `<canvas class="canvas-bar" id="myCanvas" width="800" height="100">`;
	return template;
}


function renderBotoes() {
	let template = `<h3 style="text-align: center;">Domínio de Visualização</h3><p><button style="border-radius: 20px;" class=" btn btn-dark" onclick="visualizarFrequencia(tipoFrequencia)">Frequência</button>
	<button style="border-radius: 20px;" class=" btn btn-dark" onclick="visualizarFrequencia(tipoTempo)">Tempo</button>`;
	return template;
}