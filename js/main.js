var element = document.getElementById("cuadro");

var mc = new Hammer(element);
mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

mc.on("swipeleft", function () { 
  
    moveLeft();
}); 

mc.on("swiperight", function () { 
    moveRight();
});

mc.on("swipeup", function () { 
    
    moveUp();
}); 

mc.on("swipedown", function () { 

    moveDown();
});


let botones = Array.from(document.querySelectorAll(".caja"));
var nameclass,suma;
let cont = 0;
let pila = [];
var posicion,extra;
var contayuda;
var pila1=[];
var tablero=[[0],[],[],[]]
var contboton=0;
var igual = 0;
var verf= 0;
var verfwin = 0;

window.onload = init;


function init(){
    for(i in botones){
        botones[i].classList.remove("caja");
        botones[i].classList.add("0");
    }

setElement();
setElement();
}

function setElement(){
    contboton=0;
    verfwin = verificarwin();
    verf = verificar();

    if(verfwin==0){
    if(verf==0){
    if(igual == 4){
    }
    else{
        while(cont < 1){
            let numero = Math.floor(Math.random() * 16) + 1;
            let valor = parseInt(botones[numero-1].classList[0]);
            if(valor === 0){
                let probab = Math.floor(Math.random() * 10) + 1;
                if(probab<10){
                botones[numero-1].src="img/2.png";
                botones[numero-1].classList.remove("0");
                botones[numero-1].classList.add("2");
                }else{
                    botones[numero-1].src="img/4.png";
                    botones[numero-1].classList.remove("0");
                    botones[numero-1].classList.add("4");
                }
                cont=1;
            }
        }
        cont = 0;
    }
    }
    else{
       alert("perdiste");
    }
    }
    else{
        alert("ganaste");
    } 
    igual = 0;
}

function moveRight(){
    for(var i=0;i<4;i++){
        for(var j=3;j>=0;j--){
            if(botones[j+(4*i)].classList[0]!="0"){
                pila.push(parseInt(botones[j+(4*i)].classList[0]));
                pila1.push(parseInt(botones[j+(4*i)].classList[0]));
                nameclass = botones[j+(4*i)].classList[0];
                botones[j+(4*i)].classList.remove(nameclass);
                botones[j+(4*i)].classList.add("0");
                botones[j+(4*i)].src = "img/0.png"
            } 
            else{
                pila1.push(undefined);
            }
        }
        sumar(i,3,-1,4,1);
    }
    setElement();
}
function moveLeft(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(botones[j+(4*i)].classList[0]!="0"){
                pila.push(parseInt(botones[j+(4*i)].classList[0]));
                pila1.push(parseInt(botones[j+(4*i)].classList[0]));
                nameclass = botones[j+(4*i)].classList[0];
                botones[j+(4*i)].classList.remove(nameclass);
                botones[j+(4*i)].classList.add("0");
                botones[j+(4*i)].src = "img/0.png"
            }
            else{
                pila1.push(undefined);
            }
        }
        sumar(i,0,1,4,1);
    }
    setElement();
}

function moveDown(){
    for(var i=0;i<4;i++){
        for(var j=3;j>=0;j--){
            if(botones[i+(4*j)].classList!="0"){
                pila.push(parseInt(botones[i+(4*j)].classList[0]));
                pila1.push(parseInt(botones[i+(4*j)].classList[0]));
                nameclass = botones[i+(4*j)].classList[0];
                botones[i+(4*j)].classList.remove(nameclass);
                botones[i+(4*j)].classList.add("0");
                botones[i+(4*j)].src = "img/0.png";
            }
            else{
                pila1.push(undefined);
            }
        }
        sumar(i,3,-1,1,4);
    }
    setElement();
}

function moveUp(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(botones[i+(4*j)].classList!="0"){
                pila.push(parseInt(botones[i+(4*j)].classList[0]));
                pila1.push(parseInt(botones[i+(4*j)].classList[0]));
                nameclass = botones[i+(4*j)].classList[0];
                botones[i+(4*j)].classList.remove(nameclass);
                botones[i+(4*j)].classList.add("0");
                botones[i+(4*j)].src = "img/0.png";
            }
            else{
                pila1.push(undefined);
            }
        }
        sumar(i,0,1,1,4);
    }
    setElement();
}

function sumar(target,posicion,extra,multi1,multi2){
    var longitud = pila.length;
    var contador = 0;
    for(var i = 0;i<pila1.length;i++){
        if(pila[i]==pila1[i]){
            contador++;
        }
    }
    if(contador==4){
        igual++;
    }
    if(longitud>1){
        for(var i = 0; i<pila.length;i++){
            if(pila[i] == pila[i+1]){
                igual--;
                suma = pila[i] + pila[i+1];
                nameclass = botones[(target*multi1)+(posicion*multi2)].classList[0];
                botones[(target*multi1)+(posicion*multi2)].classList.remove(nameclass);
                botones[(target*multi1)+(posicion*multi2)].classList.add(suma);
                botones[(target*multi1)+(posicion*multi2)].src= "img/"+suma+".png";     
                posicion= posicion + extra;
                i++;
            }
            else{
                nameclass = botones[(target*multi1)+(posicion*multi2)].classList[0];
                botones[(target*multi1)+(posicion*multi2)].classList.remove(nameclass);
                botones[(target*multi1)+(posicion*multi2)].classList.add(pila[i]);
                botones[(target*multi1)+(posicion*multi2)].src= "img/"+pila[i]+".png";
                posicion = posicion + extra;
            }
        }
        
    }   
    else if(longitud==1){

        suma = pila.pop();
        nameclass = botones[(target*multi1)+(posicion*multi2)].classList[0];
        botones[(target*multi1)+(posicion*multi2)].classList.remove(nameclass);
        botones[(target*multi1)+(posicion*multi2)].classList.add(suma);
        botones[(target*multi1)+(posicion*multi2)].src = "img/"+suma+".png";
    }
    pila=[];
    pila1=[];
}

function verificar(){
    for(var i = 0 ; i<15;i++){
        if(parseInt(botones[i].classList[0])== 0){
            return 0;
        }   
        if(parseInt(botones[i].classList[0]) == parseInt(botones[i+1].classList[0])){
            
            return 0;
        }
    }
    for(var i = 0 ; i<12;i++){
        if(parseInt(botones[i].classList[0])== 0){
            return 0;
        }   
        if(parseInt(botones[i].classList[0]) == parseInt(botones[i+4].classList[0])){
            return 0;
        }
    }
    

    return 1;

}
function verificarwin(){
    for(var i = 0 ; i<16;i++){
        if(parseInt(botones[i].classList[0]) == 2048){
            return 1;
        }   
    }
    return 0;
}
function ayuda(){

    if(contayuda==undefined){
        contayuda = 0 ;
    }

    if(contayuda==0){
    var juego = document.getElementById("cuadro");
    juego.classList.add("none");

    var ayud = document.getElementById("ayuda");
    ayud.classList.remove("none");
    contayuda = 1;
    }
    else if(contayuda==1){
    var juego = document.getElementById("cuadro");
    juego.classList.remove("none");

    var ayud = document.getElementById("ayuda");
    ayud.classList.add("none");
    contayuda = 0;

    }
}
function config(){
    var juego = document.getElementById("juego");
    juego.classList.add("none");

    var conf = document.getElementById("config");
    conf.classList.remove("none");
}
function volverconfig(){
    var juego = document.getElementById("juego");
    juego.classList.remove("none");

    var conf = document.getElementById("config");
    conf.classList.add("none");
}
