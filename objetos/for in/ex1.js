// For in para objetos 
let formularios = {
    nome: "maria",
    email:"",
    cidade: ""
}

for(let campo in formularios) // usar para objetos
{
if(formularios[campo] === ""){
    console.log(`O campo ${campo} esta vazio! Por favor, preencha!`)
    
}
}
// vai alertar que o campo email e cidade esta vazio 