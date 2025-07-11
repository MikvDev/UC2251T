

function tipoDeEvento(evento){

    switch(evento){
        case"aniversario":
        alert(`Salão de festas ou espaço kids!`)
        break
        case"formatura":
        alert(`Buffet com pista de dança`)
        break
        case"casamento": 
        alert(`Jardim ou igreja famosa!`)
        break
        case"festa surpresa":
        alert(`Casa de amigos ou rooftop `)
        break
        case"churrasco":
        alert(`Area externa ou parque!`)
        break
        default:
            alert(`opção invalida!`)

    }
}
let pergunta = prompt("Digite um evento que deseja!")
tipoDeEvento(pergunta)







































































































































































