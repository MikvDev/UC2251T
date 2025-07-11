function modoDeTransporte(transporte){
    switch(transporte){
        
        case "carro":
            alert(`Não esqueça de revisar o combustivel!`)
        break
        case "onibus":
            alert(`Fique de olho no ponto e na carteira!`)
        break
        case "bicicleta":
            alert(`Use capacete e respeite as regras de transito!`)
        break
        case "metro":
            alert(`Evite horarios de pico para viajar tranquilo!`)
        break
        case "andar a pé":
            alert(`Aproveite para escutar musica e relaxar..`)
        break
        default:
            alert(`Meio de transporte invalido ou não reconhecido!!`)


        
    }
}

let pergunta = prompt("digite um meio de transporte!").toLocaleLowerCase()

modoDeTransporte(pergunta )