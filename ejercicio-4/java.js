/* Realizar una página con un script que calcule el valor de la letra de
un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
○ El número debe ser entre 0 y 99999999
○ Debemos calcular el resto de la división entera entre el número y el 
número 23. 
○ Según el resultado, de 0 a 22, le corresponderá una letra de las 
siguientes: (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
○ Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
○ Deberá de repetirse el proceso hasta que el usuario pulse «cancelar» */

var division = 0;

do {

    var num = prompt ("Ingrese su numero de DNI: ");

    if (Number(num)==num) {

        num = parseInt(num);

        if (num>=0 && num<=99999999) {
            division=num%23;

            switch (division) {
                case 0:
                    document.write ("DNI: "+num+", Valor en Letra = T // ");
                    break;
                case 1:
                    document.write ("DNI: "+num+", Valor en Letra = R //");
                    break;
                case 2:
                    document.write ("DNI: "+num+", Valor en Letra = W // ");
                    break;
                case 3:
                    document.write ("DNI: "+num+", Valor en Letra = A // ");
                    break;
                case 4:
                    document.write ("DNI: "+num+", Valor en Letra = G // ");
                    break;
                case 5:
                    document.write ("DNI: "+num+", Valor en Letra = M // ");
                    break;
                case 6:
                    document.write ("DNI: "+num+", Valor en Letra = Y // ");
                    break;
                case 7:
                    document.write ("DNI: "+num+", Valor en Letra = F // ");
                    break;
                case 8:
                    document.write ("DNI: "+num+", Valor en Letra = P // ");
                    break;
                case 9:
                    document.write ("DNI: "+num+", Valor en Letra = D // ");
                    break;
                case 10:
                    document.write ("DNI: "+num+", Valor en Letra = X // ");
                    break;
                case 11:
                    document.write ("DNI: "+num+", Valor en Letra = B // ");
                    break;
                case 12:
                    document.write ("DNI: "+num+", Valor en Letra = N // ");
                    break;
                case 13:
                    document.write ("DNI: "+num+", Valor en Letra = J // ");
                    break;
                case 14:
                    document.write ("DNI: "+num+", Valor en Letra = Z // ");
                    break;
                case 15:
                    document.write ("DNI: "+num+", Valor en Letra = S // ");
                    break;
                case 16:
                    document.write ("DNI: "+num+", Valor en Letra = Q // ");
                    break;
                case 17:
                    document.write ("DNI: "+num+", Valor en Letra = V // ");
                    break;
                case 18:
                    document.write ("DNI: "+num+", Valor en Letra = H // ");
                    break;
                case 19:
                    document.write ("DNI: "+num+", Valor en Letra = L // ");
                    break;
                case 20:
                    document.write ("DNI: "+num+", Valor en Letra = C // ");
                    break;
                case 21:
                    document.write ("DNI: "+num+", Valor en Letra = K // ");
                    break;
                case 22:
                    document.write ("DNI: "+num+", Valor en Letra = E // ");
                    break;
                    
                    default: alert ("No existe ningun valor valido.");
            }


        }

    } else {
        if(num!=undefined) {
            alert (num+" no es válido.");
        }
    }

} while (num!=undefined);
