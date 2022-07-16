function calculadora () {
    const operacao = Number(prompt('Escolha uma operação:  \n 1- Soma(+) \n 2- Subtração (-) \n 3- Multiplicação (*) \n 4- Divisão real (/) \n 5- Divisão Inteira (%) \n 6- Potenciação (**)'))

    //Validação da operação
    if (!operacao ||operacao >= 7) {
        alert('Esta não é uma operação válida')
        calculadora()
    }
    else {

    let n1 = Number(prompt('Digite o primeiro número'))
    let n2 = Number(prompt('Digite o segundo número'))
    let resultado;

    //Validação das variáveis
    if (!n1 || !n2) {
        alert('Números inválidos!')
        calculadora()
    }
    else {
        //Operações
    if (operacao == 1) {
      function  soma () {
        resultado = n1 + n2;
        alert (`${n1} + ${n2} = ${resultado}`)
        }
        soma ()
        novaOperacao()
    }
    else if (operacao == 2) {
        function  subtraçao () {
            resultado = n1 - n2;
            alert (`${n1} - ${n2} = ${resultado}`)
            }
        subtraçao ()
        novaOperacao()
    }
    else if (operacao == 3){
        function  multiplicaçao () {
            resultado = n1 * n2;
            alert (`${n1} * ${n2} = ${resultado}`)
            }
        multiplicaçao()
        novaOperacao()
    }
    else if (operacao == 4){
        function  divisaoReal () {
            resultado = n1 / n2;
            alert (`${n1} / ${n2} = ${resultado}`)
            }
        divisaoReal()
        novaOperacao()
    }
    else if (operacao == 5){
        function  divisaoInteira () {
            resultado = n1 % n2;
            alert (`O resto da divisão entre ${n1} e ${n2} é: ${resultado}`)
            }
        divisaoInteira()
        novaOperacao()
    }
    else if (operacao == 6){
        function  potenciacao () {
            resultado = n1 ** n2;
            alert (`${n1} elevado a ${n2} é igual a: ${resultado}`)
            }
        potenciacao()
        novaOperacao()
    }
    //Operações
    
    //Função nova operação
    function novaOperacao() {
       let opcao = Number(prompt('Deseja fazer outra operação? \n 1- Sim \n 2- Não'))
        if (opcao == 1) {
            calculadora()
        }
        else if (opcao == 2){
            alert('Até mais!')
        }
        else {
            alert ('Este não é um número válido!')
            novaOperacao()
        }
      }

} //Fecha o else da validação das variaveis
} // Fecha o else da validação da operação
} // Fecha a funcão da calculadora
calculadora()