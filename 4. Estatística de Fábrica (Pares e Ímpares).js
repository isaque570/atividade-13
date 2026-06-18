let impar = 0
let par = 0
for(let i=1;i<=8;i++){
    let n = Number(prompt("Digite um número aleatório: "))
    if(i%2===0){
        par = par + 1
    }
    else{
        impar = impar + 1
    }
}
console.log(`A quantidade de números pares digitados é: ${par}`)
console.log(`A quantidade de números impares digitados é: ${impar}`)