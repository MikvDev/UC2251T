let escola = 
{
    alunos: {
    aluno1:{
        nome: "Miguel",
        idade: "12",
        diciplina:{
            matematica:{
                notas:{
                    provaDeMatematica:5,
            }
        },
            portugues: {
                notas:{
                    provaDePortugues:9
                }
            }
    }
    },
    aluno2: {
        nome: "joao",
        idade: 34,
        diciplina:{
            matematica:{
                notas:{
                    provaDeMatematica:5,
            }
        },
            portugues:{
                notas:{
                     provaDePortugues:2,
                }
            },
        }
    },
    aluno3: {
        nome: "Mariza",
        idade: 76,
        diciplina:{
            matematica:{
                notas:{
                    provaDeMatematica:5,
            }
        },
        portugues:{
            notas:{
                provaDePortugues:3
            }
        }

    }
    }

}
}
console.log(escola.alunos.aluno3.diciplina.matematica.notas.provaDeMatematica)