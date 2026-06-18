let n = Number(prompt("Digite um número: "))
let fatorial = 1
for(let i=n;i>=1;i--){
    fatorial = fatorial*i
}
alert(`o fatorial do número ${n} é: ${fatorial}`)