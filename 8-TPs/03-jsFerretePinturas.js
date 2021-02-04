/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
  var fahrenheit;
  var centigrados;
  
  fahrenheit = txtIdTemperatura.value;
  fahrenheit = parseFloat (fahrenheit);
  centigrados = (fahrenheit - 32) *5/9;
  centigrados = parseFloat (centigrados);
  

  alert ( fahrenheit + " Fahrenheit son " + centigrados + " Centigrados.");

}

function CentigradosFahrenheit () 
{
 	
    var fahrenheit;
    var centigrados;
    
    centigrados = txtIdTemperatura.value;
    centigrados = parseFloat (centigrados);
    fahrenheit = (centigrados * 9/5) + 32;
    fahrenheit = parseFloat (fahrenheit);
    
  
    alert ( centigrados + " centigrados son " + fahrenheit + " Fahrenheit.");
}
