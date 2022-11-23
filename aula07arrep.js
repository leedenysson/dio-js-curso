const nome = 'lee denysson gomes mansur'

nome.indexOf

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}


//-----------------------

const notas = [5,4,6,2,4,1,4,6]

notas.push(9)

let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}

console.log(soma)
const media = soma / notas.length
console.log(media)

//-----------------------