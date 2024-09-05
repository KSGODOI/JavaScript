let nome = "Zé"
let idade = 29
let altura = 1.70
let temGato = true

//alert("Olá "+nome+" tode bem?")

//console.log(`Olá ${nome} tudo bem? voce tem ${idade} anos`)

//let nome1 = prompt("Digite seu nome:")
//alert("O seu nome é "+nome1)

//let n1 = Number(prompt("Digite um número:"))
//let n2 = Number(prompt("Digite o segundo número:"))
//let soma = n1+n2
//alert("O resultado é "+soma)

//let dinheiro = 2.00
//if(dinheiro > 5.00){
//    alert("Posso comprar salgadinho")
//} else if(dinheiro > 1,50){
//    alert("Uma bala")
//}else {
//   alert("Não posso comprar")
//}

let n1 = Number(prompt("Digite a primeira nota:"))
let n2 = Number(prompt("Digite a segunda nota:"))
let n3 = Number(prompt("Digite a terceira nota:"))
let média = (n1+n2+n3)/3

alert("Sua média é : "+média.toFixed(2))