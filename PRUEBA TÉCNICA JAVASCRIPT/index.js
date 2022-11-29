//se crea los variables de array1 y arra2
var array1=[],array2=[];

//resultado de la operacion
var array_unidos=[],array_difirencia=[],array_repetidos = [],array_simetrica = [];

//se crea un array con la letras de abecedario para sacar aleatoriamente
var array_letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


//se captura el evento de click
document.getElementById("Generar_array").addEventListener("click", Generar_array);


//genera los array aletorios y lo dibuja en pantalla
function Generar_array() {
    for (let index = 0; index < 10; index++) {
        array1[index]=array_letras[Math.floor(Math.random()*26)];  
        array2[index]=array_letras[Math.floor(Math.random()*26)];  
    }
    document.getElementById("arrays").innerHTML = "<h4 class='centrado'> array 1 = "+array1+"<br> array 2 = "+array2+"</h4>";

    //limpiamos array
    array_repetidos = [];
    array_difirencia = [];
    array_simetrica = [];

    //llama a la funcion de aciones
    aciones(array1,array2);
    document.getElementById("container").style.display = "block";

}


//funcion de union de los dos array, resive como parametro los dos array
function aciones(array1,array2){
    array_unidos=array1.concat(array2);
    document.getElementById("union").innerHTML = "<h4 class='centrado'>"+valores_unicos(array_unidos)+"</h4>";

    array1.forEach((value,index)=>{
        //preguntamos si esta repetido
        if(array2.indexOf(value)!=-1) {
            array_repetidos.push(value);
        }else{
            array_simetrica.push(value);
        }
    });

    document.getElementById("interseccion").innerHTML = "<h4 class='centrado'>"+valores_unicos(array_repetidos)+"</h4>";
    document.getElementById("diferencia_simetrica").innerHTML = "<h4 class='centrado'>"+valores_unicos(array_simetrica)+"</h4>";
    
    array1.forEach((value,index)=>{
        //preguntamos si el valor array1 se encuentra en array2
        if(array2.indexOf(value)==-1) {
            array_difirencia.push(value);
        }
    });

    array2.forEach((value,index)=>{
        //preguntamos si el valor array1 se encuentra en array2
        if(array1.indexOf(value)==-1) {
            array_difirencia.push(value);
        }
    });

    document.getElementById("diferencia").innerHTML = "<h4 class='centrado'>"+valores_unicos(array_difirencia)+"</h4>";
}

function valores_unicos(array){
    var unicos=[];
    for(var i = 0; i < array.length; i++) {
 
        const elemento = array[i];
   
        if (!unicos.includes(array[i])) {
         unicos.push(elemento);
        }
    }

    return unicos;
}


