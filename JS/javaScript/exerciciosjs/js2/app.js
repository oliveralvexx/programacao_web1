let pedido = Number(prompt("Digite o número do combo que deseja"));

 switch (pedido) {
    case 1:
        alert ("Combo Bug (Hambúrguer + Refri), total: R$ 22,00")
        break
    case 2:
        alert("Combo Deploy (Pizza + Suco), total: R$ 28,00");
        break
    case 3:
        alert("Combo Sênior (Salada + Água), total: R$ 15,00");
        break
    default:
        alert("ERRO! Escolha inválida");
 }