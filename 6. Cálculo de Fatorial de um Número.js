function fatorial(n){
let fatorial = 1
for(let i=n;i>=1;i--){
    fatorial = fatorial*i
}
alert(`o fatorial do número ${n} é: ${fatorial}`)
}
let n = Number(prompt("Digite o número que deseja ver o fatorial: "))
let f = fatorial(n)
