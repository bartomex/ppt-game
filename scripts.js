
const gameForm = document.querySelector('#game-form');
const labels = document.querySelectorAll(".poder");

const ganador = document.querySelector('.ganador');
const player1Pick = document.querySelector('.player1-pick');
const player2Pick = document.querySelector('.player2-pick');
const player1Img = document.querySelector('.player1-img');
const player2Img = document.querySelector('.player2-img');
const regresa = document.querySelector('.return');

//SECTIONS
const resultSection = document.querySelector('.anuncio-ganador');
const eleccionPoderes = document.querySelector('.eleccion-poderes');

//LO QUE QUITO DE PANTALLA PARA DAR AL GANADOR

const header = document.querySelector("header");
const titulo = document.querySelector(".titulo");

function juego() {
  const computerSelection = computerPick();
  const playerSelection = gameForm.selection.value;
  const ganadorInfo = jugar(playerSelection, computerSelection);  //AQUI CONECTA EL TIRO DE LA COMPU A LA VAR DEL JUEGO
  imprimeGanador(ganadorInfo);
}

function computerPick() {
  const options = ['Hamehameha', 'Kienzan', 'BigBang'];
  let computerSelection = Math.floor(Math.random() * 2.99);
  computerSelection = options[computerSelection];
  return computerSelection;
}

function jugar (player1, player2) {      //AQUI SE HACE LA LOGICA
  if(player1 === 'Hamehameha' && player2 === 'BigBang' ||
     player1 === 'BigBang' && player2 === 'Kienzan' ||
     player1 === 'Kienzan' && player2 === 'Hamehameha' ){
    return {
      ganador: 'El Retador',
      player1Pick: player1,
      player2Pick: player2
    }
  } else if(player1 === 'BigBang' && player2 === 'Hamehameha' ||
            player1 === 'Kienzan' && player2 === 'BigBang' ||
            player1 === 'Hamehameha' && player2 === 'Kienzan'){
      return {
        ganador: 'La Computadora',
        player1Pick: player1,
        player2Pick: player2
      }
  } else {
    return {
      ganador: 'Empataron.',
      player1Pick: player1,
      player2Pick: player2
    }
  }
}

function imprimeGanador(ganadorInfo) {
  audioAtaques.pause();
  audioAtaques.currentTime = 0;
  audioAtaques.play();

  titulo.style.display = "none";
  eleccionPoderes.style.display = 'none';
  resultSection.style.display = 'block';
  regresa.style.display = 'block';
  ganador.innerText = 'El ganador de las esferas del dragon es: \n' + ganadorInfo.ganador;
  player1Pick.innerText = ganadorInfo.player1Pick;
  player2Pick.innerText = ganadorInfo.player2Pick;
  player1Img.src = 'DragonBall/' + ganadorInfo.player1Pick + '.jpg';
  player2Img.src = 'DragonBall/' + ganadorInfo.player2Pick + '.jpg';
}

for(let i = 0; i < labels.length; i++) {
  labels[i].addEventListener("click", function() {

    salto.pause();
    salto.currentTime = 0;
    salto.play();

    for(let k = 0; k < labels.length; k++) {
      labels[k].classList.remove("active");
    }
    labels[i].classList.add("active");
  })
}


// AUDIOS
const audioAtaques = document.querySelector('.audios');
const salto = document.querySelector('.salto');
