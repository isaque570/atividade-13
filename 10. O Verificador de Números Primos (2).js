function divisores(número){
    let divisores = 0;
    for(let i=1;i<=número;i++){
        if(número % i === 0){
            divisores += 1;
        }
    }
    return  divisores;
}
let número = Number(prompt("Digite um número inteiro e positivo: "));
let divi = divisores(número);
if(divi === 2){ 
    alert("O número " + número + " é primo =)");
}
else{
    alert("O número " + número + " não é primo =(");
}