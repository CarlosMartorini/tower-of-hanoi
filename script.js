/* CRIAÇÃO DAS TORRES */
function torreUm(){
    let novaTorre = document.createElement("div");
    novaTorre.setAttribute("id", "torreUm");
    let destino = document.getElementById("torres");
    destino.appendChild(novaTorre);
}
torreUm()
function torreDois(){
    let novaTorre = document.createElement("div")
    novaTorre.setAttribute("id", "torreDois");
    let destino = document.getElementById("torres");
    destino.appendChild(novaTorre);
}
torreDois()
function torreTres(){
    let novaTorre = document.createElement("div")
    novaTorre.setAttribute("id", "torreTres");
    let destino = document.getElementById("torres");
    destino.appendChild(novaTorre);
}
torreTres()
/* CRIAÇÃO DAS TORRES */


/* CRIAÇÃO DOS DISCOS */

const getTower = document.getElementById('torreUm');

const addDisc = (disc, color, width) => {
    disc = document.createElement('div');
    getTower.appendChild(disc);
    disc.setAttribute("id", "discs");
    disc.style.backgroundColor = color;
    disc.style.width = width;
}

addDisc('disc1', '#a52a5a', '180px');
addDisc('disc2', '#000090', '220px');
addDisc('disc3', '#9400d3', '260px');
addDisc('disc4', '#329237', '300px');

/* CRIAÇÃO DOS DISCOS */


/* SELEÇÃO DAS TORRES */


/* SELEÇÃO DAS TORRES */


/* LÓGICA DE JOGO / VERIFICAÇÕES */


/* LÓGICA DE JOGO / VERIFICAÇÕES */


/* CONDIÇÃO DE VITÓRIA */


/* CONDIÇÃO DE VITÓRIA */


/* BOTÃO PARA REINICIAR O JOGO */


/* BOTÃO PARA REINICIAR O JOGO */