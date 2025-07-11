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
