/*Math.floor(Math.random() * 16) + 1 */

let botones = Array.from(document.querySelectorAll(".boton"));
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
            }else{
            botones[numero-1].value = "4";
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
            } 
        }
        sumarRight(i,3,-1);
    }
    setElement();
}
function moveLeft(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(botones[j+(4*i)].value!=" "){
                pila.push(parseInt(botones[j+(4*i)].value));
                botones[j+(4*i)].value = " ";
            } 
        }
        sumarRight(i,0,1);
    }
    setElement();
}

function moveDown(){
    for(var i=0;i<4;i++){
        for(var j=3;j>=0;j--){
            if(botones[i+(4*j)].value!=" "){
                pila.push(parseInt(botones[i+(4*j)].value));
                botones[i+(4*j)].value = " ";
            }
        }
        sumarUp(i,3,-1);
    }
    setElement();
}

function moveUp(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(botones[i+(4*j)].value!=" "){
                pila.push(parseInt(botones[i+(4*j)].value));
                botones[i+(4*j)].value = " ";
            }
        }
        sumarUp(i,0,1);
    }
    setElement();
}
function sumarUp(target,posicion,extra){
    var longitud = pila.length;
    if(longitud>1){
        for(var i = 0; i<pila.length;i++){
            if(pila[i] == pila[i+1]){
                botones[target+(posicion*4)].value = pila[i] + pila[i+1];        
                posicion= posicion + extra;
                i++;
            }
            else{
                botones[target+(posicion*4)].value = pila[i];
                posicion = posicion + extra;
            }
        }
        
    }
    else if(longitud==1){
        botones[target+(posicion*4)].value = pila.pop();
       
    }
    pila=[];
}

function sumarRight(target,posicion,extra){
    var longitud = pila.length;
    if(longitud>1){
        for(var i = 0; i<pila.length;i++){
            if(pila[i] == pila[i+1]){
                botones[posicion+(target*4)].value = pila[i] + pila[i+1];        
                posicion= posicion + extra;
                i++;
            }
            else{
                botones[posicion+(target*4)].value = pila[i];
                posicion = posicion + extra;
            }
        }
        
    }
    else if(longitud==1){
        botones[posicion+(target*4)].value = pila.pop();
       
    }
    pila=[];
}
