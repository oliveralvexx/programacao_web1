/*
Arrays em Java Script
as variáveis conseguem armazenar apensa um valor enquanto os arrays conseguem armazenar vários


EXEMPLO 1 
let frutas = ["maçã","banana","uva"]
console.log(frutas)
//para retornar apenas um índice específico
console.log(frutas[0])

let frutas = ["maçã","banana","uva"]
for (let i = 0; i < frutas.length; i++) {
     console.log(frutas[i] + "\n")
}

MÉTODOS DOS ARRAYS
push() - Adiciona um item
pop() - remove o item final
shift() - remove o início
unshift() - adiciona no inicio
lenght() - conta o tamanho do array
*/

let frutas = ["maçã","banana","uva"]
frutas.push("morango")
frutas.unshift("goiaba")
frutas.pop()
for (let i = 0; i < frutas.length; i++) {
     console.log(frutas[i] + "\n")
}


