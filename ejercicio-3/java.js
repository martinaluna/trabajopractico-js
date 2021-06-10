/*3. Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo. 
Al salir con “cancelar” deberá indicarse la suma total de los números
introducidos. */

var sum = 0;

do {

    var num = prompt("Ingrese un numero: ");

    if (Number(num)==num){
        num = parseInt(num);
        sum=sum+num;
    }else {
        alert("El valor ingresado es incorrecto. Intentelo de nuevo.");
    }

} while (num!=undefined);

document.write("La suma de los numeros introducidos es: "+sum);sdadad

