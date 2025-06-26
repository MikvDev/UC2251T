// serve para organizar valores de um array 
const vetor = 
 [
    "Alberto",
    "Miguel",
    "Beatriz"
 ]


 //console.log(`${vetor.sort()}`)


 
// const matriz = []

// matriz[0] = [1,2,3]
// matriz[1] = [4,5,6]
// matriz[2] = [7,8,9]

// console.log(matriz)


function main()
{
 var vetor = new Array(12);

 for(let count=0;
    count<vetor.length ;
     count++)
  vetor[count] = count;

 console.log(vetor);
}


main()