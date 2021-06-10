/*Ejercicio 1: Pide una nota (número). Muestra la calificación según la nota.
 0-3: Muy deficiente
 3-5: Insuficiente
 5-6: Suficiente
 6-7: Bien
 7-9: Notable
 9-10: Sobresaliente */


do {

    var num = prompt ("Ingrese una nota entre 3 y 10:");

    if (Number(num) == num) {

        num = parseInt(num);
        
        if (num<= 3 ) {
            alert ("NOTA: Muy deficiente.");
        } 
        else if (num>3 && num<=5) {
            alert ("NOTA: Insuficiente.");
        } 
        else if (num == 6) {
            alert ("NOTA: Suficiente.");
        }
        else if (num == 7){
            alert ("NOTA: Bien.");
        }
        else if (num>7 && num<=9) {
            alert  ("NOTA: Notable.");
        }
        else if (num == 10) {
            alert  ("NOTA: Sobresaliente.");
        } 
        else {
            alert ("Nota no valida.");
        }
    }
} while (confirm("Desea seguir?"));

alert ("Usted a ingresado Cancelar. Refresque el sitio web.");



