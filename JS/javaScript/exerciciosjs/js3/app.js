let idade = (prompt("Digite sua idade"));

if (idade <= 18) {
    alert ("Menores de idade não podem acessar este programa");
} else {
    let plano = Number(prompt("Digite o plano que deseja escolher: \n 1 - Plano básico \n 2 - Plano pro \n 3 - Plano VIP"));
    switch(plano) {
        case 1:
            alert("Você escolheu o plano básico, que possui poucos benefícios");
            break
        case 2:
            alert("Você assinou o plano Pro, que possui grande variedade de benefícios");
            break
        case 3:
            alert("Você escolheu o plano VIP, que possui todos os benefícios");
        default:
            alert("ERRO! Escolha inválida");        
    }
}