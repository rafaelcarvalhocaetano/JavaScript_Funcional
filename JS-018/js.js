/*
	autor: Rafael Carvalho
	Descrição: Função para somar
	Função: Somar
*/

var x = 3;
var y = 3;
var t = 2;
var a = 1;

	function logicosAND(){
		if((x > y) && (y > a)){
			alert("VDD")
		}else{
			alert("FALSO");
		}
	}
	function logicosNt(){
		if(!(x > y) && (y > a)){
			alert("VDD")
		}else{
			alert("FALSO");
		}
	}
	function logicosOR(){
		if((x == t) && (x > y)){
			alert("VDD")
		}else{
			alert("FALSO");
		}
	}
	function logicosNot(){
		if(!(x == y)){
			alert("VDD");
		}else{
			alert("Falso");
		}
	}