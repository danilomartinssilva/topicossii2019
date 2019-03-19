//Armazena parâmetros de entrada
/* const primeiroParametro = process.argv[0];
const segundoParametro = process.argv[1];

const nome = process.argv[2];
const sobrenome = process.argv[3];
 */


console.log("Digite os parâmetros corretamente")
/* console.log(primeiroParametro);
console.log(segundoParametro)
console.log(nome);
console.log(sobrenome); */

const valor = process.argv[2];

Fatorial(valor);

function Fatorial(a){    
    let sum =1
    for(let i=a;i>=1;i--){
        sum *= i;
    }
    console.log(sum);
}