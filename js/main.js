/*Math.floor(Math.random() * 16) + 1 */

let botones = Array.from(document.querySelectorAll(".boton"));
let cont = 0;
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
