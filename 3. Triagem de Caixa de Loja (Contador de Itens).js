let soma = 0
for(let i=1;i<=10;i++){
    let produto = Number(prompt(`Digite o valor do produto ${i}: `))
    soma = soma + produto
}
alert(`A total a ser pago é: ${soma}`)