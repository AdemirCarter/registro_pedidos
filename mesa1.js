//------- mesa 1
let valor1 = 0

let valor_mesa1 = document.querySelector('.titulo1')

valor_mesa1.textContent = 'Mesa 1 - R$ ' + valor1

//------- pastel
let pastel1 = document.querySelector('.pastel1')
let pastel_t1 = document.querySelector('.pastel_t1')
let pasteis1 = 0

pastel1.addEventListener('click', function() {
    valor1 += 3
    pasteis1 += 1

    valor_mesa1.textContent = 'Mesa 1 - R$ ' + valor1
    pastel_t1.textContent = 'pasteis: ' + pasteis1
})

//------- bolo
let bolo1 = document.querySelector('.bolo1')
let bolos_t1 = document.querySelector('.bolos_t1')
let bolos1 = 0

bolo1.addEventListener('click', function() {
    valor1 += 3
    bolos1 += 1

    valor_mesa1.textContent = 'Mesa 1 - R$ ' + valor1
    bolos_t1.textContent = 'bolos: ' + bolos1
})

//------- cafe
let cafe1 = document.querySelector('.cafe1')
let cafe_t1 = document.querySelector('.cafe_t1')
let cafes1 = 0

cafe1.addEventListener('click', function() {
    valor1 += 1
    cafes1 += 1

    valor_mesa1.textContent = 'Mesa 1 - R$ ' + valor1
    cafe_t1.textContent = 'cafes: ' + cafes1
})

//------- suco
let suco1 = document.querySelector('.suco1')
let sucos_t1 = document.querySelector('.suco_t1')
let sucos1 = 0

suco1.addEventListener('click', function() {
    valor1 += 2
    sucos1 += 1

    valor_mesa1.textContent = 'Mesa 1 - R$ ' + valor1
    sucos_t1.textContent = 'sucos: ' + sucos1
})

//------- caldo
let caldo1 = document.querySelector('.caldo1')
let caldo_t1 = document.querySelector('.caldo_t1')
let caldos1 = 0

caldo1.addEventListener('click', function() {
    valor1 += 2
    caldos1 += 1

    valor_mesa1.textContent = 'Mesa 1 - R$ ' + valor1
    caldo_t1.textContent = 'caldos de cana: ' + caldos1
})

//------- wolga
let wolga1 = document.querySelector('.wolga1')
let wolga_t1 = document.querySelector('.wolga_t1')
let wolgas1 = 0

wolga1.addEventListener('click', function() {
    valor1 += 2
    wolgas1 += 1

    valor_mesa1.textContent = 'Mesa 1 - R$ ' + valor1
    wolga_t1.textContent = 'wolgas: ' + wolgas1
})

//------- refri 600ml
let refri2501 = document.querySelector('.refri2501')
let refri250_t1 = document.querySelector('.refri250_t1')
let refris2501 = 0

refri2501.addEventListener('click', function() {
    valor1 += 3.5
    refris2501 += 1

    valor_mesa1.textContent = 'Mesa 1 - R$ ' + valor1
    refri250_t1.textContent = 'refris 250ml: ' + refris2501
})

//------- refri 600ml
let refri6001 = document.querySelector('.refri6001')
let refri600_t1 = document.querySelector('.refri600_t1')
let refris6001 = 0

refri6001.addEventListener('click', function() {
    valor1 += 6
    refris6001 += 1

    valor_mesa1.textContent = 'Mesa 1 - R$ ' + valor1
    refri600_t1.textContent = 'refris 600ml: ' + refris6001
})

//------- refri 1l
let refri1l1 = document.querySelector('.refri1l1')
let refri1l_t1 = document.querySelector('.refri1l_t1')
let refris1l1 = 0

refri1l1.addEventListener('click', function() {
    valor1 += 8
    refris1l1 += 1

    valor_mesa1.textContent = 'Mesa 1 - R$ ' + valor1
    refri1l_t1.textContent = 'refri 1l: ' + refris1l1
})

//------- limpar

let limpar1 = document.querySelector('.limpar1')

limpar1.addEventListener('click', function() {
    valor1 = 0
    pasteis1 = 0
    caldos1 = 0
    sucos1 = 0
    bolos1 = 0
    cafes1 = 0
    wolgas1 = 0
    refris2501 = 0
    refris6001 = 0
    refris1l1 = 0

    wolga_t1.textContent = 'wolgas: ' + wolgas1
    valor_mesa1.textContent = 'Mesa 1 - R$ ' + valor1
    pastel_t1.textContent = 'pasteis: ' + pasteis1
    bolos_t1.textContent = 'bolos: ' + bolos1
    cafe_t1.textContent = 'cafes: ' + cafes1
    sucos_t1.textContent = 'sucos: ' + sucos1
    caldo_t1.textContent = 'caldos de cana: ' + caldos1
    refri250_t1.textContent = 'refris 250ml: ' + refris2501
    refri600_t1.textContent = 'refris 600ml: ' + refris6001
    refri1l_t1.textContent = 'refri 1l: ' + refris1l1
})
