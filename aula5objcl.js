/*
carros
marca, cor, km/L
dado a quantidade percorrida em km e preço do combustivel, nos de o valor gasto no percurso
*/

class Carro{
    marca;
    cor;
    kml;

    constructor(marca, cor, kml){
        this.marca = marca
        this.cor = cor
        this.kml = kml
    }

    calcularGasto(distancia, precoCombustivel){
        return distancia / this.kml * precoCombustivel
    }
}
// marca - cor - kml
const fox = new Carro('Volks','Preto',10)

//distancia e preco gasolina
console.log(fox.calcularGasto(200,4.99).toFixed(2))