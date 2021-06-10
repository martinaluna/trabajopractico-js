/*2. Realiza un script que pida cadenas de texto hasta que se pulse 
“cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas 
concatenadas con un - (guión). */

var concatenar = "";
    
do {
    var cadena = prompt("Introduce un string:");
        
    if (concatenar == "") {

        concatenar+= cadena;   

    } else {
        concatenar += "-" + cadena;
        }
    
} while (confirm("Desea seguir?"));
    
document.write(concatenar);