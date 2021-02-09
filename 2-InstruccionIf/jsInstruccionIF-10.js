
/*

Galvan, Magali

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	
	//nota = Math.round(Math.random()*10);  // Devuelve un valor entre 0 y 10
    nota = Math.floor(Math.random() * 11); //Devuelve un valor entre 0 y 10


	if (nota >= 9 )
	{
	alert("La Nota es: " + nota + ". EXCELENTE")
	}
	else{
		if (nota >= 4 )
		{
			alert("La Nota es: " + nota + ". APROBO")
		}
		else{
			alert("La Nota es: " + nota + ". Vamos, la proxima se puede")
		}
	}


}//FIN DE LA FUNCIÓN