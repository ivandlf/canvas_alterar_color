var pantalla = document.querySelector ("canvas");
var pincel = pantalla.getContext("2d");
var colores = ["blue", "red", "green"];
var indiceColorActual = 0
pincel.fillStyle = "grey";
pincel.fillRect(0,8,600,400);


function dibujarCirculo(evento){

    var x = evento.pageX - pantalla.offsetLeft
    var y = evento.pageY - pantalla.offsetTop
    
    pincel.fillStyle = colores[indiceColorActual]
    pincel.beginPath()
    pincel.arc(x,y,10,0,2*3.14);
    pincel.fill()
}

pantalla.onclick = dibujarCirculo

function alterarColor (){
    indiceColorActual++;
    if(indiceColorActual>=colores.length){
        indiceColorActual=0;
    }
    return false;
}

pantalla.oncontextmenu = alterarColor