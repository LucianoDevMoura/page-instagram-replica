let imgCapa = document.getElementById('img');
let currentImg = 0;

const imagens = [
    'img/instacapa.png',
    'img/insta2.png',
    'img/insta3.png',
    'img/screenshot4-2x.png',
];

function trocaImg() {
    imgCapa.src = imagens[currentImg];
    currentImg = (currentImg + 1) % imagens.length;  
    setTimeout(trocaImg, 4000);
}

trocaImg();

