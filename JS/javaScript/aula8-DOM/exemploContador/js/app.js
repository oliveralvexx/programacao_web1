let valorElemento = document.getElementById("valor")
let bntmais = document.getElementById("mais")
let bntmenos = document.getElementById("menos")

let contador = 0 

bntmais.addEventListener('click', () => {
    contador++
    valorElemento.textContent = contador

})
bntmenos.addEventListener('click', () => {
    contador--
    valorElemento.textContent = contador
})
