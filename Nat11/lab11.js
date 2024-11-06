//1
function verificarCalificacion(){
    let grado = parseInt(document.getElementById("grado").value);
    let mensaje = "";
    if (grado >=0 && grado <=100){
        if (grado>=90) {
           mensaje = "Aprobado con Honores";
        } else if (grado>=70){
            mensaje = "Aprobado"; 
        } else {
            mensaje = "Reprobado"; 
        }
    }else{
        mensaje= "valor incorrecto";
    }
    document.getElementById("gradoSalida").innerHTML = mensaje;   
}
//2
function determinarParidad(){
    let parImpar = parseInt(document.getElementById("parImpar").value);
    let mensaje = "";
    if (parImpar % 2  == 0){
        mensaje = "El número es par";
        }else{
            mensaje =  "El número es impar";    
        }
        document.getElementById("parImparSalida").innerHTML = mensaje;
    }
//3
function evaluarDescuento(){
    let descuento = parseInt(document.getElementById("descuento").value);
    let precioFinal = descuento;
    if(descuento > 100000){
        precioFinal = descuento * 0.9;
    }
    document.getElementById("descuentoSalida").innerHTML = `Monto final a pagar:  $${precioFinal}`;
    }
    //4
    function jugarAdivinanza(){
        let adivinar = parseInt(document.getElementById("adivinar").value);
        let numeroAleatorio = Math.floor(Math.random() * 10) + 1; 
        let mensaje =  "";
        let  intentos = 0;
        for(intentos=0;  intentos<3; intentos++){
            if(adivinar ===  numeroAleatorio){
                mensaje = "¡Felicidades, adivinaste el número!";
                intentos = 3;
            }else{
                mensaje = `Siguelo intentando`;
                }
                document.getElementById("adivinarSalida").innerHTML = mensaje;
        }
        mensaje = `Lo siento, el número era ${numeroAleatorio}`;
   }
        
            