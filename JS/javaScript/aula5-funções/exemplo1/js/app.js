//funções são blocos de códigos reutilizáveis

/*FUNÇÃO SIMPLES 
console.log("Função simples")
function saudacao(){
    console.log("Seja bem vindo")
}
saudacao()
*/ 

/*FUNÇÃO COM PARÂMETRO
let nomeUser = (prompt("Qual é o seu nome?"))
//o nome dentro da function é o parâmetro
function saudacao2(nome){
    console.log(`Seja bem vindo ${nome}`)
}
saudacao2(nomeUser)

EXEMPLO 2 - função com parâmetro com retorno 
function soma(num1,num2) {
    return num1 + num2
}
    console.log(`A soma dos número é: ${soma(4,4)}`)
*/

//EXEMPLO 3 - Arrow Function

let soma = (num1,num2) => {
    return num1 + num2
}
console.log(`A soma com arrow function é: ${soma(10,10)}`)