//-------------- mesa 1
let valor1 = 0
let mesa1 = document.querySelector('.titulo1')

mesa1.textContent = 'mesa 1 - R$ ' + valor1

let pastel1 = document.querySelector('.pastel1')
let bolo1 = document.querySelector('.bolo1')
let caldo1 = document.querySelector('.caldo1')
let wolga1 = document.querySelector('.wolga1')
let bebida1_1 = document.querySelector('.b250-1')
let bebida2_1 = document.querySelector('.b600-1')
let bebida3_1 = document.querySelector('.b1l-1')
let agua1 = document.querySelector('.agua1')
let limpar1 = document.querySelector('.limpar1')

pastel1.addEventListener('click', function() {
    valor1 += 3
    mesa1.textContent = 'mesa 1 - R$ ' + valor1
});

bolo1.addEventListener('click', function() {
    valor1 += 3
    mesa1.textContent = 'mesa 1 - R$ ' + valor1
});

caldo1.addEventListener('click', function() {
    valor1 += 2
    mesa1.textContent = 'mesa 1 - R$ ' + valor1
});

wolga1.addEventListener('click', function() {
    valor1 += 2
    mesa1.textContent = 'mesa 1 - R$ ' + valor1
});

bebida1_1.addEventListener('click', function() {
    valor1 += 3.5
    mesa1.textContent = 'mesa 1 - R$ ' + valor1
});

bebida2_1.addEventListener('click', function() {
    valor1 += 6
    mesa1.textContent = 'mesa 1 - R$ ' + valor1
});

bebida3_1.addEventListener('click', function() {
    valor1 += 8
    mesa1.textContent = 'mesa 1 - R$ ' + valor1
});

agua1.addEventListener('click', function() {
    valor1 += 2
    mesa1.textContent = 'mesa 1 - R$ ' + valor1
});

limpar1.addEventListener('click', function() {
    valor1 = 0
    mesa1.textContent = 'mesa 1 - R$ ' + valor1
});

//-------------- mesa 2

let valor2 = 0
let mesa2 = document.querySelector('.titulo2')

mesa2.textContent = 'mesa 2 - R$ ' + valor2

let pastel2 = document.querySelector('.pastel2')
let bolo2 = document.querySelector('.bolo2')
let caldo2 = document.querySelector('.caldo2')
let wolga2 = document.querySelector('.wolga2')
let bebida1_2 = document.querySelector('.b250-2')
let bebida2_2 = document.querySelector('.b600-2')
let bebida3_2 = document.querySelector('.b1l-2')
let agua2 = document.querySelector('.agua2')
let limpar2 = document.querySelector('.limpar2')

pastel2.addEventListener('click', function() {
    valor2 += 3
    mesa2.textContent = 'mesa 2 - R$ ' + valor2
});

bolo2.addEventListener('click', function() {
    valor2 += 3
    mesa2.textContent = 'mesa 2 - R$ ' + valor2
});

caldo2.addEventListener('click', function() {
    valor2 += 2
    mesa2.textContent = 'mesa 2 - R$ ' + valor2
});

wolga2.addEventListener('click', function() {
    valor2 += 2
    mesa2.textContent = 'mesa 2 - R$ ' + valor2
});

bebida1_2.addEventListener('click', function() {
    valor2 += 3.5
    mesa2.textContent = 'mesa 2 - R$ ' + valor2
});

bebida2_2.addEventListener('click', function() {
    valor2 += 6
    mesa2.textContent = 'mesa 2 - R$ ' + valor2
});

bebida3_2.addEventListener('click', function() {
    valor2 += 8
    mesa2.textContent = 'mesa 2 - R$ ' + valor2
});

agua2.addEventListener('click', function() {
    valor2 += 2
    mesa2.textContent = 'mesa 2 - R$ ' + valor2
});

limpar2.addEventListener('click', function() {
    valor2 = 0
    mesa2.textContent = 'mesa 2 - R$ ' + valor2
});