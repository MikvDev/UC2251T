// 5. Dado um array de nomes = ["Ana", "Bruno", "Carlos","Sofia"], faça:
// ➡ Converta todos os nomes para maiúsculas.
// ➡ Verifique se algum nome contém a letra "a".
// ➡ Adicione um novo nome "Lucas" ao final.
// ➡ Remova o nome do começo.
// ➡ Mostre a lista atualizada de nomes.

let nomes = ["Ana", "Bruno", "Carlos", "Sofia"];
let nomesNovaLista = [];

nomesNovaLista[0] = nomes[0].toUpperCase();
nomesNovaLista[1] = nomes[1].toUpperCase();
nomesNovaLista[2] = nomes[2].toUpperCase();
nomesNovaLista[3] = nomes[3].toUpperCase();


let contemA = nomesNovaLista[0].includes("a") || nomesNovaLista[1].includes("a") || nomesNovaLista[2].includes("a") || nomesNovaLista[3].includes("a");
console.log(`Algum contem 'a'?  ${contemA} `);
// se for antes de deixar maiúsculo vai ser true, se for depois de ficar maiúsculas false  
nomesNovaLista.push("LUCAS");
nomesNovaLista.shift();
console.log(`Lista nova: ${nomesNovaLista}`);
