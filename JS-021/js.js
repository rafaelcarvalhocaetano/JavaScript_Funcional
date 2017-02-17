/*
	autor: Rafael Carvalho
	Descrição: Função para somar
	Função: Somar
*/
function calcularIMC(){
	document.getElementById("formulario");

	var kilos = +formulario.kilos.value;
	var metros = +formulario.metros.value;
	var cm = +formulario.cm.value;

	var altura = (metros * 100 + cm) / 100;

	var imc = kilos / (altura * altura);

	formulario.imc.value = imc.toFixed(2);

}