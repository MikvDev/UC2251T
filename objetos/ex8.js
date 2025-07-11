let aluno = {
    nome:"Miguel",
    idade:19,
    escola:"Villa Lobos",
    seApresentar: function()
    {
        console.log(`Meu nome é ${aluno.nome}, eu tenho ${aluno.idade} anos e sou da escola ${aluno.escola}.`)
        console.log(`Meu nome é ${this.nome}, eu tenho ${this.idade} anos e sou da escola ${this.escola}.`)
    }

}
aluno.seApresentar()
// como deletar ??
delete aluno.idade // ***
console.log(aluno)
//alt z qurebra o texto