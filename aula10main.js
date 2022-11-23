/*
uma loja tem 5 modelos de HW, cada um com um valor
receba os 5 valores, imprima o maior valor
*/
const { gets, print} = require('./aula10aux')

//const precosHw = []

let maiorPrecoEncontrado = 0

for (let i = 0; i < 5; i++) {
    const precoHw = gets();
    if(precoHw>maiorPrecoEncontrado){
        maiorPrecoEncontrado=precoHw
    }
}

/*
let maiorPreco = 0

for (let i = 0; i < precosHw.length; i++) {
    const precoHw = precosHw[i];
    if(precoHw>maiorPreco){
        maiorPreco=precoHw
    }
}*/

print(maiorPrecoEncontrado)