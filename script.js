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
criarTorre("torreBackground");
criarTorre("torreBackground");
criarTorre("torreBackground");
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

const towerOne = document.querySelectorAll("#torreUm");
const towerTwo = document.querySelectorAll("#torreDois");
const towerThree = document.querySelectorAll("#torreTres");

let towerSelectedOrigin;
let towerSelectedDestiny;

const selectTower = (event) => {

    let towerSelected = event.currentTarget;
   

    console.log(event.currentTarget, 
                event.currentTarget.childElementCount, 
                event.currentTarget.childNodes[1],
                counter, 
                selectDestinyTower
                );

    if (counter === 1) {
        counter++;
        towerSelectedOrigin = towerSelected;
    } else if (counter === 2) {
        counter = 1;
        towerSelectedDestiny = towerSelected;
        checkWidthDisc(towerSelectedOrigin, towerSelectedDestiny);
        // changeTower(towerSelectedOrigin, towerSelectedDestiny);
        selectDestinyTower = false;
    }

    if (counter === 2) {
        selectDestinyTower = true;
    }

    
}

for (let i = 0; i < towerOne.length; i++) {
    towerOne[i].addEventListener("click", selectTower);
}

for (let i = 0; i < towerTwo.length; i++) {
    towerTwo[i].addEventListener("click", selectTower);
}

for (let i = 0; i < towerThree.length; i++) {
    towerThree[i].addEventListener("click", selectTower);
}

/* SELEÇÃO DAS TORRES */


/* LÓGICA DE JOGO / VERIFICAÇÕES */

const changeTower = (origin, destiny) => { 
    let getOrigin = origin;
    
    if (selectDestinyTower === true) {
        let getLastDisc = getOrigin.childNodes[1];
        destiny.appendChild(getLastDisc);
    }
    
}

const checkWidthDisc = (origin, destiny) => {
    let getOrigin = origin
    let getDestiny = destiny;
    
    if (getDestiny.childNodes[1] === undefined) {
        changeTower(origin, destiny);
    } else if (getDestiny.childNodes[1].clientWidth > getOrigin.childNodes[1].clientWidth) {
        changeTower(origin, destiny);
    } else if (getDestiny.childNodes[1].clientWidth < getOrigin.childNodes[1].clientWidth) {
        console.log('Não pode ser efetuada a troca');
    }
}

/* LÓGICA DE JOGO / VERIFICAÇÕES */


/* CONDIÇÃO DE VITÓRIA */

const win = () => {
    let getTowerThree = towerThree;
    if (getTowerThree.childElementCount === 5) {
        console.log("You Win!!!");
    }
}

/* CONDIÇÃO DE VITÓRIA */


/* BOTÃO PARA REINICIAR O JOGO */


/* BOTÃO PARA REINICIAR O JOGO */