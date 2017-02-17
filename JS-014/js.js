/*
	autor: Rafael Carvalho
	Descrição: Função para somar
	Função: Somar
*/

var i = 10;
var r = 30;

function somar(){
	var so = r + i;
	alert(so);

	for(var t = 0; t <= 3; t++){
		alert(t);
	}
	var num = prompt("informe um número");
	for(var t = 0; t <= num; t++){

		var nome = prompt("Informe seu nome");
		alert(nome);
		alert(t);
	}
}