//Todos são primitivos exceto os objetos. 

var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

//VERIFICAR TIPO DE DADOS 

console.log(typeof nome);
// retorna string

//STRING (Você pode somar números com strings, o resultado final é sempre uma string. )

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';