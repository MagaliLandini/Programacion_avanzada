//Realice una concatenación entre dos cadenas literales para que devuelva su edad en un
//console.log( “” )
console.log('Mi edad es '+ '2' + '7');

//Utilice los elementos de valores numéricos para: Sumar, Restar, Dividir, multiplicar, dividir dos
//números.

let num1=5;
let num2=10;
let suma = num1 + num2;
let resta = num1 - num2;
let dividir = num1 / num2;
let multiplicar = num1 * num2;
console.log(suma,resta, dividir, multiplicar)

//Utilizando condicionales múltiples, realice un <script> que verifique la edad de Jubilación de
//una persona.
function jubilacion (edad){
    if ((edad > 65)){
        return 'Esta jubilado'
    }else{
        return  'No esta jubilado'
    }
}
 console.log(jubilacion(65))

//Ídem ejercicio anterior, verificando el sexo, siendo que la edad de Jubilación para el Hombre
//es de 65 años y la Mujer a los 60 años.

function jubulacion2 (edad, genero){
    if ((edad >= 60) && (genero == 'F')){
        return 'esta jubilada'
    }else if((edad >= 65) && (genero == 'M'))  {
        return 'Esta jubilado'

    } else{
        return 'La persona no esta jubilada'
    }
}

console.log(jubulacion2(67, 'M'))

//En el siguiente ejemplo se ven los BUCLES de interacción. 
//Realiza los cambios para generar un contador hasta el numero 10.
 let cuenta, edad;
 for (cuenta = 1; cuenta <= 10; cuenta ++){
    edad = prompt('introduzca su edad(en cifras).','');
    edad= parseInt(edad);
    if (edad < 18){
        alert('es usted menor de edad');
    }else{
        alert('es usted mayor de edad')
    }
 }

 //1. Modifique el ejemplo para que nuestra página tenga una serie de botones para cambiar el color de
//fondo, de forma que un botón nos de un fondo rojo, otro de fondo verde, azul, etc.

function cambiarColor(color){
    //document.bgColor="red" Esta deprecado, por lo que se va a utilizar la propiedad actual
   
    document.body.style.backgroundColor = color;
    
}

//Ejercicio: Modifique la matriz, para que cuando se ingrese un nombre que no existe en la lista
//arroje un alert “Nombre no existe en la lista”.

let nombres = new Array();
//a continuacion se crean y declaran 7 celdas

nombres[0] = "Nacho";
nombres[1] = "Arek";
nombres[2] = "Laura";
nombres[3] = "Sonia";
nombres[4] = "Gonzalo";
nombres[5] = "Eva";
nombres[6] = "Pedro";

//ahora se muestran las celdas para comprobar que han almacenado los valores correctos.
document.write(nombres[0]+"<br>");
document.write(nombres[1]+"<br>");
document.write(nombres[2]+"<br>");
document.write(nombres[3]+"<br>");
document.write(nombres[4]+"<br>");
document.write(nombres[5]+"<br>");
document.write(nombres[6]+"<br>");

//a continuacion se crea otra celda y luego se muestra su contenido para demostrar que el numero
//de celdas de la matriz se puede cambiar durante la ejecucion. Tecnicamente se dice que la matriz
//Es redimensionable dinamicamente.
nombres[7]="Manuel";
document.write(nombres[7]+ "<br>")

//Hacemos una funcion que busque si el nombre existe en el arry
function buscarNombre(nombre){
    if (!nombres.includes(nombre)){
        alert("El nombre no existe en la lista");
    }
}

buscarNombre('Sebastian');

//Existe un método denominado Date, realice una tabla que devuelva los valores discriminados.
//Obtención de datos de una fecha:metodo – getFullYears() , getYear(),
//getMohth(),getDate(),getHourse(),getMinutes(),getSeconds(),getMiliseconds(),getTime().
let fecha = new Date();
document.write("<br>");
document.write("Metodos de tipo Date con sus valores.<br>");
document.write('<table>');
document.write('<thead>');
document.write('<tr>');
document.write('<td>Metodo</td>');
document.write('<td>Valor</td>');
document.write('</tr>');
document.write('</thead>');
document.write('<tbody>');
document.write('<tr>');
document.write('<td>getFullYear</td>');
document.write('<td>'+fecha.getFullYear()+'</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td>getFullYears</td>');
document.write('<td>'+fecha.getFullYear()+'</td>');
document.write('</tr>');
document.write('<tr>');
//el metodo se encuentra deprecado
document.write('<td>getYear</td>');
document.write('<td>'+fecha.getYear()+'</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td>getMonth</td>');
document.write('<td>'+fecha.getMonth()+'</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td>getDate</td>');
document.write('<td>'+fecha.getDate()+'</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td>getHours</td>');
document.write('<td>'+fecha.getHours()+'</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td>getMinutes</td>');
document.write('<td>'+fecha.getMinutes()+'</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td>getSeconds</td>');
document.write('<td>'+fecha.getSeconds()+'</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td>getMilliseconds</td>');
document.write('<td>'+fecha.getMilliseconds()+'</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td>getTime</td>');
document.write('<td>'+fecha.getTime()+'</td>');
document.write('</tr>');
document.write('</tbody>');
document.write('</table>');






