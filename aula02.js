//-------------------------------

function calcularSoma(mini1, mini2, mini3){
    return mini1 + mini2 + mini3
}

function quantidadeDesconto(soma){
    if(soma > 149 && soma < 400){
        return 0.9
    }else if(soma > 399){
        return 0.8
    }else{
        return 1
    }
}

function main(){
    const mini1 = 300
    const mini2 = 100
    const mini3 = 100
    const somaTotal = calcularSoma(mini1, mini2, mini3) // OK 
    console.log('preco dos carrinhos é: ' + somaTotal)
    let precoFinal = somaTotal * quantidadeDesconto(somaTotal)
    console.log('preco final da compra é: ' + precoFinal)
}

main()


console.log() //-------------------------------


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


console.log() //-------------------------------


function calcularMedia(prec1, prec2, prec3){
    soma2 = prec1 + prec2 + prec3
    return soma2 / 3
}

function decidirCompra(media2){
    if (media2 < 5) {
        return 'muito barato leva mais' 
    } else if (media2 > 4 && media2 < 8 ) {
        return 'aceitavel leva só essas'
    } else {
        return 'muito caro não leva essas'
    }
}

function main2(){
    const prec1 = 3
    const prec2 = 8
    const prec3 = 4
    const mediaa = calcularMedia(prec1, prec2, prec3)
    console.log('preco medio das 3 miniaturas: ' + mediaa)
    const decisao = decidirCompra(mediaa)
    console.log(decisao)
}

main2()