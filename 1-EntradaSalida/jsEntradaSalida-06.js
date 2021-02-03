/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1;
	var num2;
    var suma;

    num1 = txtIdNumeroUno.value;
    num2 = txtIdNumeroDos.value;


    num1 = parseFloat(num1);
    num2 = parseFloat(num2);


   //alert(num1);
   //alert(num2);

    suma = num1 + num2;

    
    suma = parseFloat (suma); 


   


    alert ("La suma es: " + suma);
 

}

