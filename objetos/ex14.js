let filme = 
{
    nome: "Coraline",
    ano:  2000,
    listaDePersonagens: [
        "Coraline","Mãe da coraline","Pai da coraline","Gato","Wibye","Mãe do outro mundo","Pai do outro mundo ","Wibye do outro mundo"
    ],
    JaOlhou: true,
    TipoDeFilme: "Animação",
    listaDoElenco:[
        'Henry Selick','Dakota Fanning','Teri Hatcher','Jennifer Saunders','Ian McShane','Carlinhos Maia','Sergio Malandro','Faustão'
    ]
    
}
filme.listaDoElenco[0] = "xuxa"
console.log(filme.listaDoElenco)

for(let i = 0; i < filme.listaDoElenco.length; i++)
    {
    
     console.log(`${filme.listaDePersonagens[i]} ${filme.listaDoElenco[i]} `)
    }

    l// usar um for in para 
    