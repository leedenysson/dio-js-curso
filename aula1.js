//---------------------------------------------- EX1


const preco = 10
const quantidade = 10
const valor = preco * quantidade
let porcento

if (quantidade >= 5 && quantidade <= 9) {
    porcento = 0.9
    promocao = '10%'
} else if (quantidade >= 10) {
    porcento = 0.85
    promocao = '15%'
} else {
    porcento = 0
    promocao = '0%'
}


precoFinal = valor * porcento


console.log('Preço R$: ' + valor.toFixed(2))
console.log('Desconto: ' + promocao)
console.log('Preço final R$: ' + precoFinal.toFixed(2))


//---------------------------------------------- EX2


const preco1 = 8
const preco2 = 8
const preco3 = 8
const media = (preco1 + preco2 + preco3) / 3


console.log('preco medio das 3 miniaturas: ' + media)
if (media < 5) {
    console.log('muito barato leva mais')
} else if (media > 4 && media < 8 ) {
    console.log('aceitavel leva só essas')
} else {
    console.log('muito caro não leva essas')
}