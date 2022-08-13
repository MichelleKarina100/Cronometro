var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var contador_vuelta = 1;
function inicio () {
	control = setInterval(cronometro,10);
	document.getElementById("inicio").disabled = true;
	document.getElementById("parar").disabled = false;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = false;
}
function parar () {
	// const res = await fetch("http://localhost:4111/cronometro", {
	// 	method: "POST",
	// 	body: JSON.stringify({
	// 		horas: horas,
	// 		minutos: minutos,
	// 		segundos: segundos,
	// 		centesimas: centesimas,
	// 	}),
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// });
	// const data = await res.json();
	// console.log(data);
	

	clearInterval(control);
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = false;
	console.log(centesimas, segundos, minutos, horas);
    var array_tabla = [
	   ,[ "Vuelta "+contador_vuelta ," : "+ horas +"h : ", minutos+"m: ", segundos+"s: ", centesimas+"ms"]
   ]
   
   var tabla = document.getElementById("tabla-cronometro");
   tabla.border = 1
   array_tabla.map(function(x){
	   var tr = document.createElement("tr")
	   tr.className = "row-cronometro";
	   x.map(function(y){
		   var th = document.createElement("th")
		   th.innerHTML = y
		   th.className = "column-cronometro";
		   tr.appendChild(th)
	   })
	   tabla.appendChild(tr)
   	})
   	document.getElementById("contenedor-tabla").appendChild(tabla)
   	contador_vuelta++;

	
	// return await res.json();
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	document.getElementById("inicio").disabled = false;
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = true;
	document.getElementById("tabla-cronometro").innerHTML = "";
	contador_vuelta = 1;
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}