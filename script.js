/* CRIAÇÃO DAS TORRES */
function criarTorre(torreId){
    let novaTorre = document.createElement("div");
    novaTorre.setAttribute("id", torreId);
    let destino = document.getElementById("torres");
    destino.appendChild(novaTorre);
}
criarTorre("torreUm");
criarTorre("torreDois");
criarTorre("torreTres");
/* CRIAÇÃO DAS TORRES */


/* CRIAÇÃO DOS DISCOS */

const getTower = document.getElementById('discos');

const addDisc = (discId, color) => {
    disc = document.createElement('div');
    getTower.appendChild(disc);
    disc.setAttribute("id", discId);
    disc.style.backgroundColor = color;
}

addDisc('disc1', '#a52a5a');
addDisc('disc2', '#000090');
addDisc('disc3', '#9400d3');
addDisc('disc4', '#329237');

/* CRIAÇÃO DOS DISCOS */


/* SELEÇÃO DAS TORRES */

let selectDestinyTower = false;

const tower = document.querySelectorAll("#torres");

const selectTower = (event) => {
    console.log(event.target);
}

for (let i = 0; i < tower.length; i++) {
    tower[i].addEventListener("click", selectTower);
}


/* SELEÇÃO DAS TORRES */


/* LÓGICA DE JOGO / VERIFICAÇÕES */


/* LÓGICA DE JOGO / VERIFICAÇÕES */


/* CONDIÇÃO DE VITÓRIA */


/* CONDIÇÃO DE VITÓRIA */


/* BOTÃO PARA REINICIAR O JOGO */


/* BOTÃO PARA REINICIAR O JOGO */