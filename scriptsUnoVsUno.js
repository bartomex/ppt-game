//SECTIONS
const eleccionPoderes = document.querySelector('.eleccion-poderes'); //ELECCION JUG 1
const eleccionJugador2 = document.querySelector(".eleccion-jugador2"); //ELECCION JUG 2

const resultSection = document.querySelector('.anuncio-ganador');  //GANADOR

const gameForm = document.querySelector('#game-form');
const gameForm2 = document.querySelector('#game-form2');  //JUG 2
const labels = document.querySelectorAll(".poder");
const regresa = document.querySelector('.regresa');

// RESULTADOS
const ganador = document.querySelector('.ganador');
const player1Pick = document.querySelector('.player1-pick');
const player2Pick = document.querySelector('.player2-pick');
const player1Img = document.querySelector('.player1-img');
const player2Img = document.querySelector('.player2-img');

// AUDIOS
const audioAtaques = document.querySelector('.audios');
const salto = document.querySelector('.salto');

//ELEMENTOS PARA DESAPARECER Y APARECER
const titulo1 = document.querySelector(".eleccion-jug1");
const titulo2 = document.querySelector(".eleccion-jug2");  //TODAS LAS IMAGENES CUANDO TIRE EL JUG 2
const titulos = document.querySelector(".titulos");


//FUNCION PARA QUE EL JUG 2 ELIJA PERSONAJE
function tiro1() {
  displays();
}

function displays() {
  titulo1.style.display = "none";
  eleccionPoderes.style.display = "none";

  //APARECEN LAS OPCIONES PARA EL JUG 2
  titulo2.style.display = "block";
  eleccionJugador2.style.display = "flex";
}

 //OBTENER VALORES DE AMBOS JUGADORES
function jugar() {
  const playerSelection1 = gameForm.selection.value;  //TIRO 1
  const playerSelection2 = gameForm2.selection.value;  //TIRO 2

  const ganadorInfo = inicia(playerSelection1, playerSelection2);  //AQUI SE GUARDAN AMBOS TIROS

  imprimeGanador(ganadorInfo);
}

//COMPARACION DEL JUGADOR GANADOR
function inicia(player1, player2) {
  if(player1 === 'Hamehameha' && player2 === 'BigBang' ||
     player1 === 'BigBang' && player2 === 'Kienzan' ||
     player1 === 'Kienzan' && player2 === 'Hamehameha' ){
    return {
      ganador: 'Jugador 1',
      player1Pick: player1,
      player2Pick: player2
    }
  } else if(player1 === 'BigBang' && player2 === 'Hamehameha' ||
            player1 === 'Kienzan' && player2 === 'BigBang' ||
            player1 === 'Hamehameha' && player2 === 'Kienzan'){
      return {
        ganador: 'Jugador 2',
        player1Pick: player1,
        player2Pick: player2
    }
  } else {
    return {
      ganador: 'Empate',
      player1Pick: player1,
      player2Pick: player2
    }
  }
}

function imprimeGanador(ganadorInfo) {

  audioAtaques.pause();
  audioAtaques.currentTime = 0;
  audioAtaques.play();

  eleccionJugador2.style.display = 'none';
  titulos.style.display = 'none';
  resultSection.style.display = 'block';
  ganador.innerText = 'El ganador de las esferas del dragon es: \n' + ganadorInfo.ganador;
  player1Pick.innerText = ganadorInfo.player1Pick;
  player2Pick.innerText = ganadorInfo.player2Pick;
  player1Img.src = 'DragonBall/' + ganadorInfo.player1Pick + '.jpg';
  player2Img.src = 'DragonBall/' + ganadorInfo.player2Pick + '.jpg';
  regresa.style.display = "block";
}

//PARA MARCAR UN PODER
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
