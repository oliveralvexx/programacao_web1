let nome = (prompt("Digite seu nome"));
let nota1 = (prompt("Digite sua primeira nota"));
let nota2 = (prompt("Digite sua segunda nota"));
let md = (nota1+nota2)/2;

if (md <= 6) {
    console.log(`Parabéns ${nome}, você foi aprovado`);
} else {
    console.log(`${nome}, você foi reprovado`);
}