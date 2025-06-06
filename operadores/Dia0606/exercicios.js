// Exercicios 0606

// testando operadores ❗
//==========================================================================================//
// caso  1

// var 
let idade = 12// a idade da pessoa 
let assinaturaPaga = true// se tem a assinatura 


// checando as consições 

let podeEntrar = (idade >= 18) && (assinaturaPaga == true) // os dois tem que ser true, como dois interupitores ligados 

//console.log(podeEntrar) // true se a pessoa pode entrar, e false se não pode 



// caso 2 

// var 

let idadeDaPessoa = 20
let documentos = true

let comprarBebida = ( idadeDaPessoa >= 18 ) && (documentos == true )


//console.log(comprarBebida)


// caso 3 


// var
let clienteVip = true
let comprar = 50 


// compras
let podeUsarCupom = (comprar >= 100) || ( clienteVip == true) 

//console.log(podeUsarCupom) 

// caso 4

let idoso = false
let PCD = false


//estacionar 
let vagaEspecial = (idoso == true) || (PCD == true)


//console.log( "A pessoa pode estacioanar?",vagaEspecial)



// const idade = 14 
// const verificacão = idade >= 18
// const assinaturaPaga =  

// caso 5 


//var 

var temControle = true
var consoleConetadATv = false 



// jogar 
var jogar = (temControle == true) || (consoleConetadATv == true)
//console.log("Você pode jogar?", temControle)


//caso 6 

// var 

var usuarioLogado = false 
var temPermissãoADM = true

// Entrar 

var entrar = (usuarioLogado == true) && ( temPermissãoADM == true)


//console.log("usuario pode entrar? ==> ",entrar);

//caso 7

//var

var nota1 = 10
var nota2 = 4
var nota3 = 6 
var NR = 8
var NF = 6


//calculo das notas

var calculofinal = (NF >= 7 ) 
var calculoRecuperação = (NR  >= 8 ) 
var calculoTrabalhos = ( nota1 >= 6 ) && (nota2 >= 6 ) 

// 
var aprovacao = (calculofinal == true) 



console.log(calculofinal);

