var a = 10;
var b = 20;
document.write("Soma: "+(a+b)+"<br>");
document.write("multiplicação: "+(a*b)+"<br>");
document.write("Subtração: "+(a-b)+"<br>");
document.write("Divisão: "+(a/b)+"<br>");
document.write("Modulo: "+(a%b)+"<br>");
document.write("Incremento de A : "+(a++)+"<br>");
document.write("Decremento de B : "+(b--)+"<br>");
document.write("Incremento de A : "+(++a)+"<br>");
document.write("Decremento de B : "+(--b)+"<br>");

//----------------------------------------------------

alert("Vamos calcular a área de um terreno.");
var a = prompt("Digite a largura em metros");
var b = prompt("Digite o comprimento em metros");
var s = a * b;
alert(s);
document.write("A área do terreno é de "+s+" metros<br>");
