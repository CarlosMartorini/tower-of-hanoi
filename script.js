/* CRIAÇÃO DAS TORRES */


/* CRIAÇÃO DAS TORRES */


/* CRIAÇÃO DOS DISCOS */

const getContainer = document.getElementById('container');

const addDisc = (disc, color, width) => {
    disc = document.createElement('div');
    getContainer.appendChild(disc);
    disc.style.backgroundColor = color;
    disc.style.width = width;
    disc.style.height = '20px';
    disc.style.borderRadius = '10px';
}

addDisc('disc1', '#a52a5a', '40px');
addDisc('disc2', '#000090', '60px');
addDisc('disc3', '#9400d3', '80px');
addDisc('disc4', '#329237', '100px');

/* CRIAÇÃO DOS DISCOS */


/* SELEÇÃO DAS TORRES */


/* SELEÇÃO DAS TORRES */


/* LÓGICA DE JOGO / VERIFICAÇÕES */


/* LÓGICA DE JOGO / VERIFICAÇÕES */


/* CONDIÇÃO DE VITÓRIA */


/* CONDIÇÃO DE VITÓRIA */


/* BOTÃO PARA REINICIAR O JOGO */


/* BOTÃO PARA REINICIAR O JOGO */