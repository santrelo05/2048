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

let botones = Array.from(document.querySelectorAll(".boton"));
let boton = Array.from(document.querySelectorAll(".boto"));
let cont = 0;
let fila = [1,2,3,4];
let colum = [4,8,12,16];
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
        let valor = botones[numero-1].value;
        if(valor === " "){
            let probab = Math.floor(Math.random() * 10) + 1;
            if(probab<10){
            botones[numero-1].value = "2";
            botones[numero-1].classList.add("verde");
            }else{
            botones[numero-1].value = "4";
            botones[numero-1].classList.add("verde");
            }
            cont=1;
        }
    }
    cont = 0;
}

function moveRight(){
    for(var i=0;i<4;i++){
        for(var j=3;j>=0;j--){
            if(botones[j+(4*i)].value!=" "){
                pila.push(parseInt(botones[j+(4*i)].value));
                botones[j+(4*i)].value = " ";
                botones[j+(4*i)].classList.remove("verde");
            } 
        }
        sumar(i,3,-1,4,1);
    }
    setElement();
}
function moveLeft(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(botones[j+(4*i)].value!=" "){
                pila.push(parseInt(botones[j+(4*i)].value));
                botones[j+(4*i)].value = " ";
                botones[j+(4*i)].classList.remove("verde");
            } 
        }
        sumar(i,0,1,4,1);
    }
    setElement();
}

function moveDown(){
    for(var i=0;i<4;i++){
        for(var j=3;j>=0;j--){
            if(botones[i+(4*j)].value!=" "){
                pila.push(parseInt(botones[i+(4*j)].value));
                botones[i+(4*j)].value = " ";
                botones[i+(4*j)].classList.remove("verde");
            }
        }
        sumar(i,3,-1,1,4);
    }
    setElement();
}

function moveUp(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(botones[i+(4*j)].value!=" "){
                pila.push(parseInt(botones[i+(4*j)].value));
                botones[i+(4*j)].value = " ";
                botones[i+(4*j)].classList.remove("verde");
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
                botones[(target*multi1)+(posicion*multi2)].value = pila[i] + pila[i+1]; 
                botones[(target*multi1)+(posicion*multi2)].classList.add("verde");       
                posicion= posicion + extra;
                i++;
            }
            else{
                botones[(target*multi1)+(posicion*multi2)].value = pila[i];
                botones[(target*multi1)+(posicion*multi2)].classList.add("verde"); 
                posicion = posicion + extra;
            }
        }
        
    }
    else if(longitud==1){
        botones[(target*multi1)+(posicion*multi2)].value = pila.pop();
        botones[(target*multi1)+(posicion*multi2)].classList.add("verde"); 
    }
    pila=[];
}
