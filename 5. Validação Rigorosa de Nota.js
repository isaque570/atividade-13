let nota = Number(prompt("Digite a nota do aluno: "))
while((nota<0)||(nota>10)){
    alert("Nota inválida")
    nota = Number(prompt("Digite a nota novamente: "))
}
alert("Nota válida")