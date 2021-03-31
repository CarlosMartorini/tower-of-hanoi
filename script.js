/* CRIAÇÃO DAS TORRES */
function criarColunaDaTorre(torreId){
    let novaTorre = document.createElement("div");
    novaTorre.setAttribute("id", torreId);
    let destino = document.getElementById("torres");
    destino.appendChild(novaTorre);
}
criarColunaDaTorre("torreUm");
criarColunaDaTorre("torreDois");
criarColunaDaTorre("torreTres");

function criarTorre(torreId){
    let img = document.createElement("IMG");
    img.src = "/assets/torre.png";
    img.setAttribute("id", "torreBG");
    document.getElementById(torreId).appendChild(img);
}
criarTorre("torreUm");
criarTorre("torreDois");
criarTorre("torreTres");
/* CRIAÇÃO DAS TORRES */


/* CRIAÇÃO DOS DISCOS */

const getTower = document.getElementById('torreUm');

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

/* POSICIONAMENTO DOS DISCOS */



/* POSICIONAMENTO DOS DISCOS */

/* SELEÇÃO DAS TORRES */

let selectDestinyTower = false;
let counter = 1;

const tower = document.querySelectorAll("#torres");

const selectTower = (event) => {
    console.log(event.currentTarget, 
                event.currentTarget.childElementCount, 
                event.currentTarget.lastElementChild,
                event.currentTarget.lastElementChild.clientWidth,
                counter, 
                selectDestinyTower
                );

    if (counter === 1) {
        counter++;
    } else if (counter === 2) {
        counter = 1;
        selectDestinyTower = false;
    }

    if (counter === 2) {
        selectDestinyTower = true;
    }
}

for (let i = 0; i < tower.length; i++) {
    tower[i].addEventListener("click", selectTower);
}

/* SELEÇÃO DAS TORRES */


/* LÓGICA DE JOGO / VERIFICAÇÕES */

const changeTower = (condition, destiny) => { //destiny = event.currentTarget
    if (condition === true) {
        let getDisc = document.getElementById('discos');
        let getLastDisc = getDisc.lastElementChild;
        getLastDisc.appendChild(destiny);
    }
    
}

const checkWidthDisc = (origin, destiny) => {
    let getOrigin = document.getElementById(origin)
    let getDestiny = document.getElementById(destiny);
    
    if (getDestiny.lastElementChild.clientWidth > getOrigin.lastElementChild.clientWidth) {
        changeTower(selectDestinyTower, selectTower);
    } else if (getDestiny.lastElementChild.clientWidth < getOrigin.lastElementChild.clientWidth) {
        //permanecer na mesma coluna
    }
}

/* LÓGICA DE JOGO / VERIFICAÇÕES */


/* CONDIÇÃO DE VITÓRIA */

const win = () => {
    let getTowerThree = document.getElementById("torreTres");
    if (getTowerThree.childElementCount === 4) {
        console.log("You Win!!!");
    }
}

/* CONDIÇÃO DE VITÓRIA */


/* BOTÃO PARA REINICIAR O JOGO */


/* BOTÃO PARA REINICIAR O JOGO */