const usuario = {
    nome: 'julio',
    email: 'prof@gmail.com',
    cargo:'professor'

}

const novoUsuario = {
    ...usuario,
    nome:'jorge',
    idade: 28,
    email: 'profjorge@gmail.com'


}
console.log(novoUsuario);


const pessoa = {
    nome: 'Miguel',
    idade: 21,
    temGato: false,
    cpf: 3746339005,
    numero: 98764323,
    
}
const novaPessoa = {
    ...pessoa,
    temGato:true
    
}