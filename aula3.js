 /*
debito 10% de desconto
pix e dinheiro 15% de desconto
credito de ate 2x, mesmo preco
acima de 2x, juros de 10%
 */

function aplicarDesconto(valor, desconto){
    return ( valor - ( valor * ( desconto / 100 ) ) )
}

function aplicarJuros(valor, desconto){
    return ( valor + ( valor * ( desconto / 100 ) ) )
}

const precoCarrinho = 100
const formaPagamento = 3

if( formaPagamento === 1){
    console.log(aplicarDesconto(precoCarrinho,10))
}else if(formaPagamento === 2){
    console.log(aplicarDesconto(precoCarrinho,15))
}else if(formaPagamento === 3){
    console.log(precoCarrinho)
}else if(formaPagamento === 4){
    console.log(aplicarJuros(precoCarrinho,10))
}else(
    console.log('Selecione uma forma de pagamento valida!')
)