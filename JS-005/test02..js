//método confirm() retorna valores booleanos

var mensagem;
var retorno = confirm("Clique em um dos botões!");
if(retorno == true){
	mensagem = "Operação confirmada";
}else{
	mensagem = "Você cancelou a Operação";
}
document.write(mensagem);