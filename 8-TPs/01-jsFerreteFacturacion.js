/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseFloat (precioUno);
    precioDos = parseFloat (precioDos);
    precioTres = parseFloat (precioTres);
    resultado = precioUno + precioDos + precioTres;
    resultado = parseFloat (resultado);

    alert (" La suma de los precios es " + resultado);



    
}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var promedio;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseFloat (precioUno);
    precioDos = parseFloat (precioDos);
    precioTres = parseFloat (precioTres);
    promedio = (precioUno + precioDos + precioTres) / 3;
    promedio = parseFloat (promedio);

    alert (" El promedio de los precios es " + promedio);
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    
    precioUno = parseFloat (precioUno);
    precioDos = parseFloat (precioDos);
    precioTres = parseFloat (precioTres);
    resultado = precioUno + precioDos + precioTres;
    precioFinal = resultado + (resultado *21/100);
    precioFinal = parseFloat (precioFinal);

    alert (" El precio final de los precios es " + precioFinal);
	
}