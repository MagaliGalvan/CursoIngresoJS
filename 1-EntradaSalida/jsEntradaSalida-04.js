/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//txtIdNombre

	var nombreDelEmpleado;
	
	nombreDelEmpleado = prompt("Ingrese el nombre");
	txtIdNombre.value = nombreDelEmpleado;
	

}



/*
entradas: prompt, id.value o document.getelemtbyid("...").value
procesos: concatenar (+)
salidas: alert, cosole.log, document.write, id.value o document.getelemtbyid("...").value

*/