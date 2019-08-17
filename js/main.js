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


let botones = Array.from(document.querySelectorAll("img"));
var nameclass,suma;
let cont = 0;
let pila = [];
var posicion,extra;
window.onload = init;

function init(){
setElement();
setElement();

}

function setElement(){
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

function moveRight(){
    for(var i=0;i<4;i++){
        for(var j=3;j>=0;j--){
            if(botones[j+(4*i)].classList[0]!="0"){
                pila.push(parseInt(botones[j+(4*i)].classList[0]));
                nameclass = botones[j+(4*i)].classList[0];
                botones[j+(4*i)].classList.remove(nameclass);
                botones[j+(4*i)].classList.add("0");
                botones[j+(4*i)].src = "img/0.png"
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
                nameclass = botones[j+(4*i)].classList[0];
                botones[j+(4*i)].classList.remove(nameclass);
                botones[j+(4*i)].classList.add("0");
                botones[j+(4*i)].src = "img/0.png"
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
                nameclass = botones[i+(4*j)].classList[0];
                botones[i+(4*j)].classList.remove(nameclass);
                botones[i+(4*j)].classList.add("0");
                botones[i+(4*j)].src = "img/0.png";
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
                nameclass = botones[i+(4*j)].classList[0];
                botones[i+(4*j)].classList.remove(nameclass);
                botones[i+(4*j)].classList.add("0");
                botones[i+(4*j)].src = "img/0.png";
            }
        }
        sumar(i,0,1,1,4);
    }
    setElement();
}

function sumar(target,posicion,extra,multi1,multi2){
    var longitud = pila.length;
    if(longitud>1){
        for(var i = 0; i<pila.length;i++){
            if(pila[i] == pila[i+1]){
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
}

