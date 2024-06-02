let valor1 = 0
let mesa1 = document.querySelector('.titulo1')

mesa1.textContent = 'mesa 1 - R$ ' + valor1

//-------------- mesa 1

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
    valor1 += 3
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
