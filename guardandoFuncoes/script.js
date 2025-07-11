import Swal from "sweetalert2"

function dancar(){
    Swal("Dança dança gatinho 🐈🐈🐈🐈")
}

function chamarHeroi(nomeDoHeroi){
    Swal(nomeDoHeroi.toUpperCase() + "!!!")
}
function criarApelido(nome,animal){
    Swal.fire({
        title: 'bdhabfhsb',
        input:'digite aqui!!'
    })
}
function moedasTotais(p, g){
return parseFloat(p) +parseFloat(g)*5
}

function mostrarMoedas(){
    let p = prompt("Quantas moedas pequenas você tem, meu camarada??")
    let g = prompt("Quantas moedas grandes você tem, meu compadre??")
    let moedaTotal = moedasTotais(p,g)
    Swal("Você fez"+ moedaTotal +"pontos em moedas !"  )
}
function mostrarCodinome(){
    let objeto = prompt("Digite um objeto ai")
    let numero = prompt("Digite um numero ai")
    Swal(`Seu codinome é ${objeto}${numero}`)
}
function mostrarChocolate(){
    let grana  = parseFloat(prompt("Quantos reais você tem?"))
    let calcularChocolate = grana / 2.50
        Swal(`Você pode comprar ${calcularChocolate} com ${grana} reais `)
}