const prompt = require('prompt-sync')()


function adicionarDetalhesPessoa(pessoa)
{
    
    
        
    
   const novaPessoa = {
        ...pessoa,
        comidasPreferidas: ["pizza","pão","maca"],
        
    }
    

  console.log(`O  nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidasPreferidas[0]} e ${novaPessoa.comidasPreferidas[1]}, e seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} que tem ${novaPessoa.melhorAmigo.idade} anos`);
  
}
const individuo = {
    
  nome: prompt('Digite '), 
  idade: Number(prompt('Digite ')),
 melhorAmigo:{
  nome:prompt('DIgite'),
  idade:prompt('Digite'),
 }
}




adicionarDetalhesPessoa(individuo)


// console.log('------------------------------------');
// console.log(` o nome da pessoa é ${individuo.nome} e suas comidas favoritas são ${individuo.comidasPreferidas}. Seu melhor amigo é ${individuo.melhorAmigo} e trabalha com ${individuo.profisao}`);
// console.log('------------------------------------');


// function adicionarDetalhesPessoa(pessoa)
// {
//     const novaPessoa = {
//         ...pessoa
//     }
// }