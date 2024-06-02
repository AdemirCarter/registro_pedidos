let valor1 = 0
let valor2 = 0

let mesa1 = document.querySelector('.titulo1')
let mesa2 = document.querySelector('.titulo2')

mesa1.textContent = 'mesa 1 - ' + valor1
mesa2.textContent = 'mesa 2 - ' + valor2

let pastel1 = document.querySelector('.pastel1')
let pastel2 = document.querySelector('.pastel2')

let limpar1 = document.querySelector('.limpar1')
let limpar2 = document.querySelector('.limpar2')

pastel1.addEventListener('click', function() {
    valor1 += 3
    mesa1.textContent = 'mesa 1 - ' + valor1
})

pastel2.addEventListener('click', function() {
    valor2 += 3
    mesa2.textContent = 'mesa 2 - ' + valor2
})

limpar1.addEventListener('click', function() {
    valor1 = 0
    mesa1.textContent = 'mesa 1 - ' + valor1
})

limpar2.addEventListener('click', function() {
    valor2 = 0
    mesa2.textContent = 'mesa 2 - ' + valor2
})