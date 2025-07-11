function mostrarPergunta(tipo){
    let pergunta = ""
    if( tipo === "soft")
        {
        pergunta = "Vocês tiveram muita dificuldade em alguma UC? Se sim, qual e por que?"
    }else if(tipo === "hard"){
        pergunta = "Qual linguagem de programação vocês mais gostam?"
    }else{
        pergunta = "tipo desconhecido"
    }
    

document.getElementById("pergunta").textContent =  pergunta
// abre uma caixa de prompt para o usuario digitar


const resposta = prompt(pergunta)

    if(resposta)
{
    document.getElementById("resposta").textContent = `Sua resposta:  ${resposta}`

}else{
    document.getElementById("resposta").textContent = "Nenhuma resposta fornecida"
  
}
}


    
// perguntas:
// Qual linguagem de programação vocês mais gostam?
// Vocês tiveram muita dificuldade em alguma UC? Se sim, qual e por que? 