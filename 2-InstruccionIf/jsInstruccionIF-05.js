/*

Galvan, Magali
Al ingresar una edad solo debemos informar si la persona NO es adolescente.

*/ 


function mostrar()
{
  
   var edad;

   edad = txtIdEdad.value;
   edad = parseInt (edad);


   if (edad >=13 && edad <=17 ) 
       
	{
		
	} 

	 else
    { 
		alert ("La persona no es adolescente")
	}	 
}//FIN DE LA FUNCIÓN