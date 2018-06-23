window.onload

function calcular(){
	var capital = document.getElementById("capital").value;
	var tempo = document.getElementById("tempo").value;
	var rendimento = document.getElementById("rend").value;
	var juros = document.getElementById("juros").value;
	var montante = 0;
	var final = 0;
	var x;
	var resposta = new Array(tempo);

	juros = Number(juros) + 1;
	for(x=1; x<=tempo; x++){
		montante = capital*(Math.pow(juros,x));
		final = montante+capital;
		document.getElementById("resposta").innerHTML = document.getElementById("resposta").innerHTML + montante + "<br>"
		}
	rendimento = montante-capital; 
	document.getElementById("rend").innerHTML = rendimento;	
		
}