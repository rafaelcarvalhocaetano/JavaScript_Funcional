/*
	autor: Rafael Carvalho
	Descrição: Função para somar
	Função: Somar
*/
var idade = 20;
function a(){

	var x = (idade >= 18 ) ? "Maior de Idade" : "Menor de idade"
	alert(x);
}
function b(){
	var idade = 19, sexo="Masc", natural = "Diadema";
	alert(idade+', '+sexo+', '+natural);
}
function dados(){
	Pessoa = {
		nome: "Rafel"
	}
	alert(Pessoa.nome);
	delete Pessoa.nome;
	alert(Pessoa.nome);
}

var tipo = new Number(31);
alert(tipo instanceof Number);

//titulo

alert(this.document.title);

function oi(){
	var n = 30;
	alert(this.n);
}
function type(){
	alert(typeof(3));
}
window.alert("Chamando Função");


