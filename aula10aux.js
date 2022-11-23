const precos = [12.99, 13.99, 27.99, 69.99, 46.99]
let i = 0

function gets(){
    const valor = precos[i]
    i++
    return valor
}

function print(texto){
    console.log(texto)
}

module.exports = {gets, print}
