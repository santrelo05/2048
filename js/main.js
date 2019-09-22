var nameclass,suma;
let cont = 0;
let pila = [];
var posicion,extra;
var pila1=[];
var igual = 0;
var verf= 0;
var verfwin = 0;
var puntaje=0;
var record=[0,0,0,0,0,0,0,0,0,0];
var mxrecord=0;
let botones;
var element;
var Record;
var Puntaje;
var NombreUsuario;
var recname=[];
var recpoint=[];
var recmundial=[];

window.onload = init;

function init(){
    var firebaseConfig = {
    apiKey: "AIzaSyA4-vQKzh6DY8aRkkvOrwFVauk1TsKv5cQ",
    authDomain: "roadto2048.firebaseapp.com",
    databaseURL: "https://roadto2048.firebaseio.com",
    projectId: "roadto2048",
    storageBucket: "roadto2048.appspot.com",
    messagingSenderId: "863459540195",
    appId: "1:863459540195:web:fc39aaef51c0e76e9019d6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    botones = Array.from(document.querySelectorAll(".caja"));
    recname = Array.from(document.querySelectorAll(".nameRec"));
    recpoint = Array.from(document.querySelectorAll(".pointRec"));
    Puntaje = document.getElementById("Puntaje");
    element = document.getElementById("cuadro");
    Record =  document.getElementById("Record");
       
    for(i in botones){
        botones[i].classList.remove("caja");
        botones[i].classList.add("0");
    }
    setElement();
    setElement();
    setTimeout(hideLoader, 2 * 1000);
}


function hideLoader() {
    document.getElementById("loading").classList.add("none");
    document.getElementById("Login").classList.remove("none");
}

function setElement(){
   
   
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
          

            record.push(puntaje);
            record.sort((a,b)=>b-a);
            record.pop();
            

            var ref = firebase.database().ref("Usuarios/"+NombreUsuario+"/record");
            ref.update({
                v0 : record[0],
                v1 : record[1],
                v2 : record[2],
                v3 : record[3],
                v4 : record[4],
                v5 : record[5],
                v6 : record[6],
                v7 : record[7],
                v8 : record[8],
                v9 : record[9],
            });
            var obj = {
                "nombre" : NombreUsuario,
                "puntaje": puntaje
            };
            
            recmundial.push(obj);
            recmundial.sort((a,b)=>b.puntaje-a.puntaje);
            recmundial.pop();
            for(i in recmundial){
                var ref = firebase.database().ref("Record/v"+i);
                ref.update({
                  "nombre" : recmundial[i].nombre,
                  "puntaje" : recmundial[i].puntaje
                });
            }


            puntaje = 0;
            Record.innerHTML = "Record: "+record[0];
            Puntaje.innerHTML="Puntaje:<br>"+puntaje;
            topcol();
            cambiodenone('juego','perdiste');
        }
    }
    else{
        record.push(puntaje);
        record.sort((a,b)=>b-a);
        record.pop();

        var ref = firebase.database().ref("Usuarios/"+NombreUsuario+"/record");
        ref.update({
            v0 : record[0],
            v1 : record[1],
            v2 : record[2],
            v3 : record[3],
            v4 : record[4],
            v5 : record[5],
            v6 : record[6],
            v7 : record[7],
            v8 : record[8],
            v9 : record[9],
        });
        var obj = {
            "nombre" : NombreUsuario,
            "puntaje": puntaje
        };
        
        recmundial.push(obj);
        recmundial.sort((a,b)=>b.puntaje-a.puntaje);
        recmundial.pop();
        for(i in recmundial){
            var ref = firebase.database().ref("Record/v"+i);
            ref.update({
              "nombre" : recmundial[i].nombre,
              "puntaje" : recmundial[i].puntaje
            });
        }

        puntaje = 0;
        Record.innerHTML = "Record: "+record[0];
        Puntaje.innerHTML="Puntaje:<br>"+puntaje;
        topcol();
        cambiodenone('juego','ganaste');
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
                puntaje+=suma;
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
    Puntaje.innerHTML="Puntaje:<br>"+puntaje;
    pila=[];
    pila1=[];
}

function verificar(){
    for(var i = 0 ; i<15;i++){
        if(parseInt(botones[i].classList[0]) == 0){
            return 0;
        }   
    }
    for(var i = 0 ; i < 4 ; i++){
        for(var j = 0; i < 3 ; i++){
            if(parseInt(botones[(i*4)+j].classList[0]) == parseInt(botones[(i*4)+(j+1)].classList[0])){
                return 0;
            }
        }
    }

    for(var i = 0 ; i<12;i++){
        if(parseInt(botones[i].classList[0]) == 0){
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

function reload(pantalla1,pantalla2){
    record.push(puntaje);
    record.sort((a,b)=>b-a);
    record.pop();
  

    var ref = firebase.database().ref("Usuarios/"+NombreUsuario+"/record");
    ref.update({
        v0 : record[0],
        v1 : record[1],
        v2 : record[2],
        v3 : record[3],
        v4 : record[4],
        v5 : record[5],
        v6 : record[6],
        v7 : record[7],
        v8 : record[8],
        v9 : record[9],
    });
    var obj = {
        "nombre" : NombreUsuario,
        "puntaje": puntaje
    };
    
    recmundial.push(obj);
    recmundial.sort((a,b)=>b.puntaje-a.puntaje);
    recmundial.pop();
    for(i in recmundial){
        var ref = firebase.database().ref("Record/v"+i);
        ref.update({
          "nombre" : recmundial[i].nombre,
          "puntaje" : recmundial[i].puntaje
        });
    }


    puntaje = 0;


    Record.innerHTML = "Record: "+record[0];
    Puntaje.innerHTML="Puntaje:<br>"+puntaje;
    cambiodenone(pantalla1,pantalla2);
    for(i in botones){
        nameclass = botones[i].classList[0];
        botones[i].classList.remove(nameclass);
        botones[i].classList.add("0");
        botones[i].src= "img/0.png";  
    }
    setElement();
    setElement();
}
function reload2(pantalla1,pantalla2){

    cambiodenone(pantalla1,pantalla2);
    for(i in botones){
        nameclass = botones[i].classList[0];
        botones[i].classList.remove(nameclass);
        botones[i].classList.add("0");
        botones[i].src= "img/0.png";  
    }
    setElement();
    setElement();
}


function cambiodenone(pantall1,pantalla2){
        document.getElementById(pantall1).classList.add("none");
        document.getElementById(pantalla2).classList.remove("none");
}

function empezarjuego(){
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

cambiodenone('pantinicial','juego');
}

function push(){
    var ref = firebase.database().ref('Usuarios/santi');
    var newPostRef = ref.push();
    newPostRef.set({
        contra: contra,
            record:{
            v0 : 0,
            v1 : 0,
            v2 : 0,
            v3 : 0,
            v4 : 0,
            v5 : 0,
            v6 : 0,
            v7 : 0,
            v8 : 0,
            v9 : 0,
            }
    });
}

function Registro(){
    var name = document.getElementById("username").value.toLowerCase();
    var contra = document.getElementById("contra").value.toLowerCase(); 
    var ref = firebase.database().ref("Usuarios");
        ref.once("value")
        .then(function(snapshot) {
    var hasname = snapshot.child(name).exists();
    if(hasname === true){
        alert("nombre en uso");
    }
    else{
        ref.child(name).set({
            contra: contra,
            record:{
            v0 : 0,
            v1 : 0,
            v2 : 0,
            v3 : 0,
            v4 : 0,
            v5 : 0,
            v6 : 0,
            v7 : 0,
            v8 : 0,
            v9 : 0,
            }
        });
        for(var i = 0 ; i<10; i++ ){
            var ref1 = firebase.database().ref("Record/v"+i);
            ref1.once("value")
            .then(function(snapshot) {
                var obj = {
                    "nombre" : snapshot.child("nombre").val(),
                    "puntaje": snapshot.child("puntaje").val()
                };
                recmundial.push(obj);
            });
        }
     
        Record.innerHTML = "Record: 0";
        NombreUsuario=name;
        cambiodenone('Registro','pantinicial');
    }
  });
 
}
function Login(){
    var name = document.getElementById("usernameL").value.toLowerCase();
    var contra = document.getElementById("contraL").value.toLowerCase();
    var ref = firebase.database().ref("Usuarios");
        ref.once("value")
        .then(function(snapshot) {
    var hasname = snapshot.child(name).exists();
    if(hasname===true){
        var pws = snapshot.child(name+'/contra').val();
        if(pws===contra){
            NombreUsuario = name;
            cambiodenone('Login','pantinicial');
         
            var ref = firebase.database().ref("Usuarios/"+NombreUsuario+"/record");
            ref.once("value")
            .then(function(snapshot) {
                for(i in record){
                    record[i] = snapshot.child("v"+i).val();
                }
                record.sort((a,b)=>b-a);
           
            Record.innerHTML = "Record: "+record[0];
            });
            for(var i = 0 ; i<10; i++ ){
                var ref = firebase.database().ref("Record/v"+i);
                ref.once("value")
                .then(function(snapshot) {
                    var obj = {
                        "nombre" : snapshot.child("nombre").val(),
                        "puntaje": snapshot.child("puntaje").val()
                    };
                    recmundial.push(obj);
                });
            }
            
        }
        else{
            alert("contraseña incorrecta");
        }
    }
    else{
        alert("usuario incorrecto");
    }     
    });
}

function topcol(){
    var r1 = document.getElementById("recordtit1");
    var r2 = document.getElementById("recordtit2");
    var mitopimg = document.getElementById("Mitop");
    mitopimg.src="img/colombiabrown.png";
    mitopimg.classList.remove("acortarimg");

    var mitopimg2 = document.getElementById("Mitop2");
    mitopimg2.src="img/thumbnail_worldwhite.png";
    r1.classList.remove("rr1");
    r2.classList.remove("rr2");
    for(i in recname){
        recname[i].innerHTML = recmundial[i].nombre;
        recpoint[i].innerHTML = recmundial[i].puntaje;
    }
}

function mitop(){
    var r1 = document.getElementById("recordtit1");
    var r2 = document.getElementById("recordtit2");

    var mitopimg = document.getElementById("Mitop");
    mitopimg.src="img/colombiawhite.png";
    mitopimg.classList.add("acortarimg");
    
    var mitopimg2 = document.getElementById("Mitop2");
    mitopimg2.src="img/thumbnail_worldbrown.png";
    

    r1.classList.add("rr1");
    r2.classList.add("rr2");

    for(i in recname){
        recname[i].innerHTML = NombreUsuario;
        recpoint[i].innerHTML = record[i];
    }







}