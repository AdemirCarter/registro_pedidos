//------- mesa 2
let valor2 = 0

let valor_mesa2 = document.querySelector('.titulo2')

valor_mesa2.textContent = 'Mesa 2 - R$ ' + valor2

//------- pastel
let pastel2 = document.querySelector('.pastel2')
let pastel_t2 = document.querySelector('.pastel_t2')
let pasteis2 = 0

pastel2.addEventListener('click', function() {
    valor2 += 3
    pasteis2 += 1

    valor_mesa2.textContent = 'Mesa 2 - R$ ' + valor2
    pastel_t2.textContent = 'pasteis: ' + pasteis2
})

//------- bolo
let bolo2 = document.querySelector('.bolo2')
let bolos_t2 = document.querySelector('.bolos_t2')
let bolos2 = 0

bolo2.addEventListener('click', function() {
    valor2 += 3
    bolos2 += 1

    valor_mesa2.textContent = 'Mesa 2 - R$ ' + valor2
    bolos_t2.textContent = 'bolos: ' + bolos2
})

//------- cafe
let cafe2 = document.querySelector('.cafe2')
let cafe_t2 = document.querySelector('.cafe_t2')
let cafes2 = 0

cafe2.addEventListener('click', function() {
    valor2 += 1
    cafes2 += 1

    valor_mesa2.textContent = 'Mesa 2 - R$ ' + valor2
    cafe_t2.textContent = 'cafes: ' + cafes2
})

//------- suco
let suco2 = document.querySelector('.suco2')
let sucos_t2 = document.querySelector('.suco_t2')
let sucos2 = 0

suco2.addEventListener('click', function() {
    valor2 += 2
    sucos2 += 1

    valor_mesa2.textContent = 'Mesa 2 - R$ ' + valor2
    sucos_t2.textContent = 'sucos: ' + sucos2
})

//------- caldo
let caldo2 = document.querySelector('.caldo2')
let caldo_t2 = document.querySelector('.caldo_t2')
let caldos2 = 0

caldo2.addEventListener('click', function() {
    valor2 += 2
    caldos2 += 1

    valor_mesa2.textContent = 'Mesa 2 - R$ ' + valor2
    caldo_t2.textContent = 'caldos de cana: ' + caldos2
})

//------- wolga
let wolga2 = document.querySelector('.wolga2')
let wolga_t2 = document.querySelector('.wolga_t2')
let wolgas2 = 0

wolga2.addEventListener('click', function() {
    valor2 += 2
    wolgas2 += 1

    valor_mesa2.textContent = 'Mesa 2 - R$ ' + valor2
    wolga_t2.textContent = 'wolgas: ' + wolgas2
})

//------- refri 600ml
let refri2502 = document.querySelector('.refri2502')
let refri250_t2 = document.querySelector('.refri250_t2')
let refris2502 = 0

refri2502.addEventListener('click', function() {
    valor2 += 3.5
    refris2502 += 1

    valor_mesa2.textContent = 'Mesa 2 - R$ ' + valor2
    refri250_t2.textContent = 'refris 250ml: ' + refris2502
})

//------- refri 600ml
let refri6002 = document.querySelector('.refri6002')
let refri600_t2 = document.querySelector('.refri600_t2')
let refris6002 = 0

refri6002.addEventListener('click', function() {
    valor2 += 6
    refris6002 += 1

    valor_mesa2.textContent = 'Mesa 2 - R$ ' + valor2
    refri600_t2.textContent = 'refris 600ml: ' + refris6002
})

//------- refri 1l
let refri1l2 = document.querySelector('.refri1l2')
let refri1l_t2 = document.querySelector('.refri1l_t2')
let refris1l2 = 0

refri1l2.addEventListener('click', function() {
    valor2 += 8
    refris1l2 += 1

    valor_mesa2.textContent = 'Mesa 2 - R$ ' + valor2
    refri1l_t2.textContent = 'refri 1l: ' + refris1l2
})

//------- limpar

let limpar2 = document.querySelector('.limpar2')

limpar2.addEventListener('click', function() {
    valor2 = 0
    pasteis2 = 0
    caldos2 = 0
    sucos2 = 0
    bolos2 = 0
    cafes2 = 0
    wolgas2 = 0
    refris2502 = 0
    refris6002 = 0
    refris1l2 = 0

    wolga_t2.textContent = 'wolgas: ' + wolgas2
    valor_mesa2.textContent = 'Mesa 2 - R$ ' + valor2
    pastel_t2.textContent = 'pasteis: ' + pasteis2
    bolos_t2.textContent = 'bolos: ' + bolos2
    cafe_t2.textContent = 'cafes: ' + cafes2
    sucos_t2.textContent = 'sucos: ' + sucos2
    caldo_t2.textContent = 'caldos de cana: ' + caldos2
    refri250_t2.textContent = 'refris 250ml: ' + refris2502
    refri600_t2.textContent = 'refris 600ml: ' + refris6002
    refri1l_t2.textContent = 'refri 1l: ' + refris1l2
})
