alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
   chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
   if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`o número secreto é menor que ${chute}`);
        } else {
            alert(`o número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavreTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! vc descobiru o número secreto ${numeroSecreto} com ${tentativas} ${palavreTentativa}`);



//if(tentativas > 1){
//   alert(`Isso aí! vc descobiru o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//}else {
//  alert(`Isso aí! vc descobiru o número secreto ${numeroSecreto} com ${tentativas} /tentativa.`);
//}
