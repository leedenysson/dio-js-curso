const mini = {
    marca: 'hw',
    nome: 'honda civic',
    escala: 1.64,

    descrever: function(){
        console.log(`Carrinho ${this.nome} da ${this.marca}, em escala ${this.escala}`)
    }
}

mini.preco = 13.99

// console.log(mini)

//mini.descrever()

//console.log(mini['preco'])

mini['marca'] = 'mbx'
mini.marca = 'mbx'


//-------------------------------------------------------

class Mini {
    marca;
    nome;
    escala;

    constructor(marca, nome, escala){
        this.marca = marca;
        this.nome = nome;
        this.escala = escala;
    }

    descrever(){
        console.log(`Carrinho ${this.nome} da ${this.marca}, em escala ${this.escala}`)
    }
}


//const carrinho1 = new Mini()
//carrinho1.marca = 'HW'
//carrinho1.nome = 'Toyota AE86'
//carrinho1.escala = 1.64
const carrinho1 = new Mini('HW','Toyota AE86',1.64)

//const carrinho2 = new Mini()
//carrinho2.marca = 'MBX'
//carrinho2.nome = 'Trator'
//carrinho2.escala = 1.87
const carrinho2 = new Mini('MBX','Trator',1.87)

//carrinho1.descrever()
//carrinho2.descrever()

function compararEscala(c1, c2){
    if(c1.escala > c2.escala){
        console.log(`${c1.nome} tem a escala menor que ${c2.nome} `)
    } else if(c1.escala < c2.escala){
        console.log(`${c1.nome} tem a escala maior que ${c2.nome} `)
    } else {
        console.log(`${c1.nome} e ${c2.nome} tem a mesma escala`)
    }
}

compararEscala(carrinho1, carrinho2)