/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var alambrado;
    var alambradoX3;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    alambrado = ancho + ancho + largo + largo;
    alambrado = parseFloat (alambrado);
    alambradoX3 = alambrado *3;
    alambradox3 = parseFloat (alambradoX3);

    alert (" La cantidad necesaria de alambre son " + alambrado + " metros. Y si se quiere alambrar con tres hilos serian " + alambradoX3 + " metros " ); 




}
function Circulo () 
{
    var radio;
    var alambrado;
    var alambradoX3;


    radio = txtIdRadio.value;
    
    
    radio = parseFloat(radio);
    
    alambrado = radio * radio *3,14;
    alambrado = parseFloat (alambrado);
    alambradoX3 = alambrado *3;
    alambradox3 = parseFloat (alambradoX3);

    alert (" La cantidad necesaria de alambre son " + alambrado + " metros. Y si se quiere alambrar con tres hilos serian " + alambradoX3 + " metros " );
}
function Materiales () 
{
    var largo;
    var ancho;
    var cemento;
    var cal;
    var contrapiso;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    contrapiso = ancho + ancho + largo + largo;
    contrapiso = parseFloat (contrapiso);
    cal = contrapiso *3;
    cal = parseFloat (cal);
    cemento = contrapiso *2;
    cemento = parseFloat (cemento);


alert ( " Para la superficie del contrapiso se necesitan " + cal + " bolsas de cal y " + cemento + " bolsas de cemento. " )

}