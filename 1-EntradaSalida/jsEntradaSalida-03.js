/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreDelAlumno;
	var edadDelAlumno;
	
	//nombreIngresado=txtIdNombre.value;
	nombreDelAlumno=document.getElementById("txtIdNombre").value;
	edadDelAlumno=prompt("Ingrese la edad del alumno");

	alert("Usted se llama " + nombreDelAlumno + " Y tiene " + edadDelAlumno);
	//onsole.log("Usted se llama " + nombreDelAlumno + " Y tiene " + edadDelAlumno);
	//document.write("Usted se llama " + nombreDelAlumno + " Y tiene " + edadDelAlumno);



	

}


