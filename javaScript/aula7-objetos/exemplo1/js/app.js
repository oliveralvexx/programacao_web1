/*
Objetos armazenam dados organizados, exemplo propriedade e valor
*/
//EXEMPLO 1
let aluno = {
    nome: "Carlos",
    idade: "20",
    curso: "desenvolvimento de sistemas",
}
for (let chave in aluno){
    console.log(`${chave}: ${aluno[chave]}`)
}

