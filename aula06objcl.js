/*
pessoa tem nome peso e altura
a pessoa é capaz de dizer seu imc ( imc = peso / ( altura * altura ) )
instancia jose que tenha 70kg e 1,75 de altura e peca para dizer o valor de seu imc
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura)
    }

    classificarImc(){
        const imc = this.calcularImc()
        if(imc<18.5){
            return ('abaixo do peso')
        }else if(imc>=18.5 && imc < 25){
            return ('peso ideal')
        }else if(imc>=25 && imc < 30){
            return ('acima do peso')
        }else if(imc>=30 && imc < 40){
            return ('obeso')
        }else{
            return ('obesidade grave')
        }
    }
}

const jose = new Pessoa('jose',70,1.75)
console.log(jose.classificarImc())
