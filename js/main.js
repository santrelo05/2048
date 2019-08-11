/*Math.floor(Math.random() * 16) + 1 */

let botones = Array.from(document.querySelectorAll(".boton"));
let cont = 0;
let fila = [1,2,3,4];
let colum = [4,8,12,16];
let pila = [],past=0,now=-1,global = 0;
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

function moveUp(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(botones[i+(4*j)].value!=" "){
                pila.push(parseInt(botones[i+(4*j)].value));
                botones[i+(4*j)].value = " ";
            }
        }
        sumarUp(i);
    }
    setElement();
}
function sumarUp(target){
    var longitud = pila.length;
    var posicion = 0;
    if(longitud>1){
        for(var i = 0; i<pila.length;i++){
            if(pila[i] == pila[i+1]){
                botones[target+(posicion*4)].value = pila[i] + pila[i+1];        
                posicion++;
                i++;
            }
            else{
                botones[target+(posicion*4)].value = pila[i];
                posicion++;
            }
        }
        
    }
    else if(longitud==1){
        botones[target].value = pila.pop();
       
    }
    pila=[];
}
