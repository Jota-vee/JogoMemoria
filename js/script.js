let imagens0 = [
    "img1.jpg", "img2.jpg" ,"img3.jpg" ,"img4.jpg" ,"img5.jpg" ,"img6.jpg" ,"img7.jpg" ,"img8.jpg" ,
    "img1.jpg", "img2.jpg" ,"img3.jpg" ,"img4.jpg" ,"img5.jpg" ,"img6.jpg" ,"img7.jpg" ,"img8.jpg" ];

let imagens1 = [];
let imagens3 = [];

let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
let img5 = document.querySelector("#img5");
let img6 = document.querySelector("#img6");
let img7 = document.querySelector("#img7");
let img8 = document.querySelector("#img8");
let img9 = document.querySelector("#img9");
let img10 = document.querySelector("#img10");
let img11 = document.querySelector("#img11");
let img12 = document.querySelector("#img12");
let img13 = document.querySelector("#img13");
let img14 = document.querySelector("#img14");
let img15 = document.querySelector("#img15");
let img16 = document.querySelector("#img16");

let imgs = [
    img1, img2 ,img3 ,img4 ,img5 ,img6 ,img7 ,img8 ,
    img9,img10,img11,img12, img13,img14,img15,img16];

let imgs2 = ["img1", "img2", "img3", "img4", "img5", "img6","img7","img8",
    "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16"
    ];



function embaralhar() {
    document.querySelector("#pontos").textContent = `pontuação: ${cont_ganhar}/8`;
    let cont = 0;
    let imagens =  imagens0.slice();
    while (imagens.length > 0) {
        let indice = Math.floor(Math.random() * imagens.length);
        let imagem = imagens.splice(indice, 1)[0];
        imagens1.push(imagem);
        cont++;
    }
};

let cont_ganhar = 0;
let cont_img = 0;
let im0 = [];
let im1 = [];
let im2 = [];

function trocar_imagem(id) {
    if(imagens3.includes(id)){
        return null;
    }
    if(cont_img==2){
        return null;
    };
    if(im2.length==1){
        if(id==im2[0]){
            return null;
        }
    }
    let index = imgs2.indexOf(id);
    let caminho = "img/"+imagens1[index];
    imgs[index].setAttribute("src",caminho);
    im0.push(caminho);
    im1.push(index);
    im2.push(id);
    cont_img ++;

    if(cont_img==2) {
        if(im0[0] == im0[1]) {
            imagens3.push(im2[0]);
            imagens3.push(im2[1]);
            cont_ganhar ++;
            cont_img = 0;
            im0 = [];
            im1 = [];
            im2 = [];
            document.querySelector("#pontos").textContent = `pontuação: ${cont_ganhar}/8`;
        }
        else {
            setTimeout(() => {
                imgs[im1[0]].setAttribute("src","img/img0.webp");
                imgs[im1[1]].setAttribute("src","img/img0.webp");
                cont_img = 0;
                im0 = [];
                im1 = [];
                im2 = [];
            }, 500);
        }
    }
};

function iniciar(){
    location.reload();
}

document.addEventListener('DOMContentLoaded', function() {
    embaralhar();
});
