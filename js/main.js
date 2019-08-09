/*Math.floor(Math.random() * 16) + 1 */

let botones = Array.from(document.querySelectorAll(".boton"));
let cont = 0;
let fila = [1,2,3,4];
let colum = [4,8,12,16];
let pila = [],blank=0;
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
    var global = 3;
    for(var i=0;i<4;i++){
        if(botones[i+(4*global)].value!=" "){
            pila.push(parseInt(botones[i+(4*global)].value));
            botones[i+(4*global)].value =" ";
        }
        if(global==0){
        global = 4;
            if(pila.length>1){
                sumarUp(i);
            }
            else{
                let x = pila.pop();
                if(x===undefined){
                    botones[i].value = " ";  
                }
                else{
                    botones[i].value = x; 
                }
            }
        }else{
            i--;
        }
        global--;
    }
}
function sumarUp(target){
    let longitud = pila.length;
    bank=pila.pop();
    
        for(var i=0;i<longitud-1;i++){
            let now = pila.pop();
            if(blank === now){
                botones[target].value= blank+now;
                blank = 0;
            }
            else{
                botones[target].value = blank;
                blank = now;
            }
        }
}
