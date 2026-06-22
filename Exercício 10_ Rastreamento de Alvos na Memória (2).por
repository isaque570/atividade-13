programa {
  funcao inicio() {
     inteiro a[5], i, alvo
    para(i=0;i<=4;i++){
    escreva("Digite um valor para o vetor: A[",i,"]: ")
    leia(a[i])
   }
   escreva("Digite um número alvo: ")
   leia(alvo)
    para(i=0;i<=4;i++){
      se((a[i] == i) e i==alvo ){
        escreva(a[i])
      }
    }
  }
}
