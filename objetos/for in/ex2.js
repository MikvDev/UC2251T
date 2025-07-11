let objeto = {
    marca: "sansang",
    modelo: "A01",
    armazenamento: "32G",
    ano:"",
    preco:"",
    cor:""
}

for( let campo in objeto)
{
 if(objeto[campo] === "" )
 {
    console.log('------------------------------------');
    console.log(`O campo ${campo} está vazio!  `);
    console.log('------------------------------------');
 }
}