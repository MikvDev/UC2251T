const prompt = require('prompt-sync')()
let robo = {
    nome: "02D2",
    modelo: "pirateado",
    anoDeFrabrica: 2000,
    falarOI: function () {
        console.log('------------------------------------');
        console.log(`🤖 bip bop!! olá ${humano}, Meu nome é ${this.nome}, sou um modelo ${this.modelo}, do ano ${this.anoDeFrabrica} `);
        console.log('------------------------------------');
    },
    dizerAlgoEngraçado: function () {
        console.log('------------------------------------');
        console.log(`🤖 bipp boop ! Por que o robô não contou segredo?
             Porque ele não queria vazar dados. 🗂️🔒`);
        console.log('------------------------------------');
    }

}

var humano = prompt(`Diga seu nome:`)
robo.falarOI()

setTimeout(() => console.log(`carregando..`), 2000)

setTimeout(() => robo.dizerAlgoEngraçado(), 5000)



// metodo é função